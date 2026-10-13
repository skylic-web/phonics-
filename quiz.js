document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const PONTOS_ACERTO = 20;
  const PONTOS_ERRO = 10;
  const PENALIDADE_DICA = 5;

  const startScreen = $("#startScreen");
  const quizScreen = $("#quizScreen");
  const resultScreen = $("#resultScreen");
  const helpModal = $("#helpModal");
  const modeButtons = $$("#startScreen .mode-card");
  const countButtons = $$("#startScreen .count-button");
  const startQuizButton = $("#startQuizButton");
  const helpButton = $("#helpButton");
  const closeHelp = $("#closeHelp");
  const understoodButton = $("#understoodButton");
  const scoreBadge = $("#scoreBadge");
  const scoreText = $("#score");
  const questionTitle = $("#questionTitle");
  const questionMeaning = $("#questionMeaning");
  const questionHint = $("#questionHint");
  const answerForm = $("#answerForm");
  const answerInput = $("#answerInput");
  const answerButton = $("#answerButton");
  const hintButton = $("#hintButton");
  const nextButton = $("#nextButton");
  const feedback = $("#feedback");
  const feedbackTitle = $("#feedbackTitle");
  const feedbackText = $("#feedbackText");

  let selectedMode = "meaning";
  let selectedCount = 5;
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let hintsUsed = 0;
  let answered = false;
  let hintUsed = false;
  let history = [];

  const normalize = (value) => String(value ?? "").trim().toLocaleLowerCase("en-US");

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function splitMeaning(text) {
    const match = String(text).match(/^(.*?)\s*-\s*significa\s+(.*)$/i);
    return match ? { classe: match[1].trim(), traducao: match[2].trim() } : { classe: "", traducao: String(text).trim() };
  }

  function getWordBank() {
    if (typeof sons === "undefined" || !sons) return [];
    const words = new Map();

    Object.entries(sons).forEach(([sound, group]) => {
      if (!group || !Array.isArray(group.palavras)) return;
      group.palavras.forEach((entry) => {
        if (!entry?.palavra || !entry?.significado) return;
        const key = normalize(entry.palavra);
        if (words.has(key)) return;
        const { classe, traducao } = splitMeaning(entry.significado);
        words.set(key, {
          palavra: String(entry.palavra).trim(),
          significado: String(entry.significado).trim(),
          classe,
          traducao,
          som: sound,
          somBase: sound.replace(/\d+$/, ""),
          pronuncia: group.pronuncia || ""
        });
      });
    });
    return [...words.values()];
  }

  const wordBank = getWordBank();

  function findMissingChunk(item) {
    const word = item.palavra;
    const lowerWord = normalize(word);
    const sound = normalize(item.somBase);
    let index = sound ? lowerWord.indexOf(sound) : -1;
    let length = sound.length;

    if (index < 0) {
      // Se o nome do grupo não aparece literalmente na palavra, esconde 1–2 letras centrais.
      length = word.length >= 5 ? 2 : 1;
      index = Math.max(1, Math.floor((word.length - length) / 2));
      if (index + length >= word.length) index = Math.max(0, word.length - length - 1);
    }

    if (length >= word.length) {
      length = Math.max(1, Math.min(2, word.length - 1));
      index = Math.max(0, Math.floor((word.length - length) / 2));
    }

    const missing = word.slice(index, index + length);
    const mask = word.slice(0, index) + "＿".repeat(length) + word.slice(index + length);
    return { missing, mask };
  }

  function getQuestions() {
    if (selectedMode === "meaning") {
      return wordBank.map((item) => ({ ...item, resposta: item.palavra }));
    }
    return wordBank.map((item) => {
      const chunk = findMissingChunk(item);
      return { ...item, resposta: chunk.missing, incompleta: chunk.mask };
    }).filter((item) => item.resposta);
  }

  function showScreen(screen) {
    startScreen.classList.toggle("hidden", screen !== "start");
    quizScreen.classList.toggle("hidden", screen !== "quiz");
    resultScreen.classList.toggle("hidden", screen !== "result");
    scoreBadge.classList.toggle("hidden", screen === "start");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateScore(animate = false) {
    scoreText.textContent = score;
    if (animate) {
      scoreBadge.classList.remove("bump");
      void scoreBadge.offsetWidth;
      scoreBadge.classList.add("bump");
    }
  }

  function selectButton(buttons, selected) {
    buttons.forEach((button) => {
      const active = button === selected;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  modeButtons.forEach((button) => button.addEventListener("click", () => {
    selectedMode = button.dataset.mode;
    selectButton(modeButtons, button);
  }));

  countButtons.forEach((button) => button.addEventListener("click", () => {
    selectedCount = Number(button.dataset.count);
    selectButton(countButtons, button);
  }));

  function openHelp() {
    helpModal.classList.remove("hidden");
    closeHelp.focus();
  }
  function closeHelpModal() {
    helpModal.classList.add("hidden");
    helpButton.focus();
  }
  helpButton.addEventListener("click", openHelp);
  closeHelp.addEventListener("click", closeHelpModal);
  understoodButton.addEventListener("click", closeHelpModal);
  helpModal.addEventListener("click", (event) => {
    if (event.target === helpModal) closeHelpModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !helpModal.classList.contains("hidden")) closeHelpModal();
  });

  function startQuiz() {
    const available = shuffle(getQuestions());
    if (!available.length) {
      startQuizButton.textContent = "Palavras não carregadas";
      startQuizButton.disabled = true;
      console.error("O quiz não encontrou palavras. Confira palavras.js e o objeto sons.");
      return;
    }

    questions = available.slice(0, Math.min(selectedCount, available.length));
    currentIndex = 0;
    score = 0;
    correct = 0;
    wrong = 0;
    hintsUsed = 0;
    answered = false;
    hintUsed = false;
    history = [];
    updateScore();
    showScreen("quiz");
    showQuestion();
  }

  function showQuestion() {
    const item = questions[currentIndex];
    if (!item) return showResult();

    const meaningMode = selectedMode === "meaning";
    answered = false;
    hintUsed = false;
    $("#questionCounter").textContent = `QUESTÃO ${currentIndex + 1} DE ${questions.length}`;
    $("#progressBar").style.width = `${(currentIndex / questions.length) * 100}%`;
    $("#questionInstruction").textContent = meaningMode ? "DESCUBRA A PALAVRA" : "COMPLETE AS LETRAS";
    questionTitle.textContent = meaningMode ? item.traducao : item.incompleta;
    questionTitle.classList.toggle("is-mask", !meaningMode);
    questionMeaning.textContent = meaningMode
      ? `${item.classe ? item.classe + " · " : ""}Como se escreve em inglês?`
      : `Significado: ${item.traducao}${item.classe ? ` (${item.classe})` : ""}`;

    questionHint.textContent = "";
    questionHint.classList.add("hidden");
    $("#answerLabel").textContent = meaningMode ? "Escreva a palavra em inglês" : "Digite as letras que faltam";
    answerInput.value = "";
    answerInput.placeholder = meaningMode ? "Digite a palavra..." : "Digite somente as letras...";
    answerInput.disabled = false;
    answerButton.disabled = false;
    answerButton.classList.remove("hidden");
    hintButton.classList.toggle("hidden", !item.pronuncia);
    hintButton.disabled = false;
    hintButton.textContent = `💡 Ver dica (−${PENALIDADE_DICA} pontos)`;
    feedback.classList.add("hidden");
    feedback.classList.remove("is-correct", "is-wrong");
    feedbackTitle.textContent = "";
    feedbackText.textContent = "";
    nextButton.classList.add("hidden");
    nextButton.textContent = currentIndex === questions.length - 1 ? "Ver resultado →" : "Próxima palavra →";
    answerInput.focus();
  }

  function useHint() {
    if (answered || hintUsed) return;
    const item = questions[currentIndex];
    if (!item?.pronuncia) return;
    hintUsed = true;
    questionHint.textContent = `Dica de pronúncia: ${item.pronuncia}`;
    questionHint.classList.remove("hidden");
    hintButton.disabled = true;
    hintButton.textContent = `💡 Dica usada (acerto vale ${PONTOS_ACERTO - PENALIDADE_DICA})`;
    answerInput.focus();
  }
  hintButton.addEventListener("click", useHint);

  function answerQuestion(event) {
    event.preventDefault();
    if (answered) return;
    const item = questions[currentIndex];
    const userAnswer = answerInput.value.trim();
    if (!userAnswer) {
      answerInput.focus();
      return;
    }

    answered = true;
    const isCorrect = normalize(userAnswer) === normalize(item.resposta);
    let pointsChange = 0;

    if (isCorrect) {
      pointsChange = hintUsed ? PONTOS_ACERTO - PENALIDADE_DICA : PONTOS_ACERTO;
      correct++;
    } else {
      pointsChange = -Math.min(score, PONTOS_ERRO);
      wrong++;
    }
    if (hintUsed) hintsUsed++;
    score += pointsChange;
    updateScore(true);
    $("#progressBar").style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
    showFeedback(item, isCorrect, pointsChange);

    answerInput.disabled = true;
    answerButton.disabled = true;
    answerButton.classList.add("hidden");
    hintButton.classList.add("hidden");
    nextButton.classList.remove("hidden");

    history.push({ ...item, acertou: isCorrect, respostaUsuario: userAnswer, usouDica: hintUsed, pontos: pointsChange });
  }

  function showFeedback(item, isCorrect, pointsChange) {
    feedback.classList.remove("hidden", "is-correct", "is-wrong");
    feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
    if (isCorrect) {
      feedbackTitle.textContent = "Correto! 🎉";
      feedbackText.textContent = `A palavra é ${item.palavra}. +${pointsChange} pontos${hintUsed ? " (dica utilizada)." : "."}`;
      return;
    }
    feedbackTitle.textContent = "Quase!";
    feedbackText.textContent = selectedMode === "meaning"
      ? `A resposta correta era "${item.palavra}". ${pointsChange < 0 ? `${pointsChange} pontos.` : "Você continua com 0 pontos."}`
      : `As letras que faltavam eram "${item.resposta}". A palavra completa é "${item.palavra}". ${pointsChange < 0 ? `${pointsChange} pontos.` : "Você continua com 0 pontos."}`;
  }

  answerForm.addEventListener("submit", answerQuestion);
  nextButton.addEventListener("click", () => {
    if (!answered) return;
    currentIndex++;
    if (currentIndex >= questions.length) showResult();
    else showQuestion();
  });

  function favoriteKey(word) { return `favorita-${normalize(word)}`; }
  function isFavorite(word) {
    try { return localStorage.getItem(favoriteKey(word)) === "true"; }
    catch { return false; }
  }
  function toggleFavorite(word) {
    const next = !isFavorite(word);
    try {
      if (next) localStorage.setItem(favoriteKey(word), "true");
      else localStorage.removeItem(favoriteKey(word));
    } catch (error) {
      console.error("Não foi possível salvar o favorito:", error);
    }
    return next;
  }

  function showResult() {
    showScreen("result");
    const rate = correct / Math.max(questions.length, 1);
    $("#progressBar").style.width = "100%";
    $("#resultTitle").textContent = rate >= .8 ? "Mandou muito bem!" : "Quiz completo!";
    $("#finalScore").textContent = `${score} pontos`;
    $("#correctCount").textContent = correct;
    $("#wrongCount").textContent = wrong;
    $("#hintCount").textContent = hintsUsed;

    const reviewList = $("#reviewList");
    reviewList.replaceChildren();

    history.forEach((item) => {
      const row = document.createElement("div");
      row.className = `review-item ${item.acertou ? "is-correct" : "is-wrong"}`;
      const content = document.createElement("div");
      content.className = "review-content";

      const word = document.createElement("span");
      word.className = "review-word";
      word.textContent = item.palavra;

      const detail = document.createElement("span");
      detail.className = "review-detail";
      detail.textContent = `${item.traducao}${item.classe ? ` · ${item.classe}` : ""}`;

      const status = document.createElement("span");
      status.className = "review-status";
      status.textContent = item.acertou
        ? `✓ Acertou${item.usouDica ? " (com dica)" : ""} · +${item.pontos} pontos`
        : `✗ Sua resposta: ${item.respostaUsuario || "—"} · Correta: ${item.resposta}`;

      const star = document.createElement("button");
      star.type = "button";
      star.className = "favorite-button";
      star.setAttribute("aria-label", `Favoritar ${item.palavra}`);

      function refreshStar() {
        const favorite = isFavorite(item.palavra);
        star.textContent = favorite ? "★" : "☆";
        star.classList.toggle("is-favorite", favorite);
        star.setAttribute("aria-pressed", String(favorite));
        star.setAttribute("aria-label", `${favorite ? "Remover dos favoritos" : "Favoritar"} ${item.palavra}`);
      }
      star.addEventListener("click", () => {
        toggleFavorite(item.palavra);
        refreshStar();
      });
      refreshStar();

      content.append(word, detail, status);
      row.append(content, star);
      reviewList.append(row);
    });
  }

  startQuizButton.addEventListener("click", startQuiz);
  $("#restartButton").addEventListener("click", () => {
    updateScore();
    showScreen("start");
  });

  if (!wordBank.length) {
    startQuizButton.disabled = true;
    startQuizButton.textContent = "Banco de palavras não carregado";
    console.error("O quiz não encontrou palavras. Confirme se palavras.js carrega antes de quiz.js e define o objeto sons.");
  }
});