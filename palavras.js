const sons = {

    oa: {
        pronuncia: "OU",
        palavras: [
            { palavra: "boat", significado: "Substantivo - significa Barco" },
            { palavra: "coat", significado: "Substantivo - significa Casaco" },
            { palavra: "goal", significado: "Substantivo - significa Meta" },
            { palavra: "goat", significado: "Substantivo - significa Cabra" },
            { palavra: "road", significado: "Substantivo - significa Estrada" },
            { palavra: "toad", significado: "Substantivo - significa Sapo" }
        ]
    },

    en: {
        pronuncia: "EN",
        palavras: [
            { palavra: "den", significado: "Substantivo - significa Toca" },
            { palavra: "hen", significado: "Substantivo - significa Galinha" },
            { palavra: "pen", significado: "Substantivo - significa Caneta" },
            { palavra: "ten", significado: "Número - significa Dez" },
            { palavra: "then", significado: "Advérbio - significa Então" },
            { palavra: "blend", significado: "Substantivo - significa Mistura" }
        ]
    },

    sh: {
        pronuncia: "SH",
        palavras: [
            { palavra: "shed", significado: "Substantivo - significa Galpão" },
            { palavra: "shin", significado: "Substantivo - significa Canela" },
            { palavra: "ship", significado: "Substantivo - significa Navio" },
            { palavra: "dish", significado: "Substantivo - significa Prato" },
            { palavra: "wash", significado: "Verbo - significa Lavar" },
            { palavra: "splash", significado: "Verbo - significa Espirrar" }
        ]
    },

    ow: {
        pronuncia: "AU",
        palavras: [
            { palavra: "bow", significado: "Substantivo - significa Arco" },
            { palavra: "cow", significado: "Substantivo - significa Vaca" },
            { palavra: "how", significado: "Advérbio - significa Como" },
            { palavra: "owl", significado: "Substantivo - significa Coruja" },
            { palavra: "chow", significado: "Substantivo - significa Comida" },
            { palavra: "towel", significado: "Substantivo - significa Toalha" }
        ]
    },

    ar: {
        pronuncia: "AR",
        palavras: [
            { palavra: "bar", significado: "Substantivo - significa Bar" },
            { palavra: "car", significado: "Substantivo - significa Carro" },
            { palavra: "far", significado: "Advérbio - significa Longe" },
            { palavra: "park", significado: "Substantivo - significa Parque" },
            { palavra: "dark", significado: "Adjetivo - significa Escuro" },
            { palavra: "star", significado: "Substantivo - significa Estrela" },
            { palavra: "part", significado: "Substantivo - significa Parte" }
        ]
    },

    in: {
        pronuncia: "IN",
        palavras: [
            { palavra: "bin", significado: "Substantivo - significa Lixeira" },
            { palavra: "win", significado: "Verbo - significa Vencer" },
            { palavra: "chin", significado: "Substantivo - significa Queixo" },
            { palavra: "shin", significado: "Substantivo - significa Canela" },
            { palavra: "wind", significado: "Substantivo - significa Vento" },
            { palavra: "winner", significado: "Substantivo - significa Vencedor" }
        ]
    },

    ut: {
        pronuncia: "ÂT",
        palavras: [
            { palavra: "but", significado: "Conjunção - significa Mas" },
            { palavra: "cut", significado: "Verbo - significa Cortar" },
            { palavra: "rut", significado: "Substantivo - significa Sulco" },
            { palavra: "shut", significado: "Verbo - significa Fechar" },
            { palavra: "strut", significado: "Verbo - significa Desfilar" },
            { palavra: "butter", significado: "Substantivo - significa Manteiga" }
        ]
    },

    ine: {
        pronuncia: "AIN",
        palavras: [
            { palavra: "mine", significado: "Pronome - significa Meu/Minha" },
            { palavra: "nine", significado: "Número - significa Nove" },
            { palavra: "pine", significado: "Substantivo - significa Pinheiro" },
            { palavra: "vine", significado: "Substantivo - significa Videira" },
            { palavra: "shine", significado: "Verbo - significa Brilhar" },
            { palavra: "diner", significado: "Substantivo - significa Lanchonete" }
        ]
    },

    ing: {
        pronuncia: "ING",
        palavras: [
            { palavra: "ring", significado: "Substantivo - significa Anel" },
            { palavra: "bring", significado: "Verbo - significa Trazer" },
            { palavra: "thing", significado: "Substantivo - significa Coisa" },
            { palavra: "finger", significado: "Substantivo - significa Dedo" },
            { palavra: "string", significado: "Substantivo - significa Corda" },
            { palavra: "singing", significado: "Verbo - significa Cantando" }
        ]
    },

    ain: {
        pronuncia: "EIN",
        palavras: [
            { palavra: "again", significado: "Advérbio - significa Novamente" },
            { palavra: "main", significado: "Adjetivo - significa Principal" },
            { palavra: "rain", significado: "Substantivo - significa Chuva" },
            { palavra: "brain", significado: "Substantivo - significa Cérebro" },
            { palavra: "stain", significado: "Substantivo - significa Mancha" },
            { palavra: "train", significado: "Substantivo - significa Trem" }
        ]
    },

    ap: {
        pronuncia: "ÉP",
        palavras: [
            { palavra: "cap", significado: "Substantivo - significa Boné" },
            { palavra: "gap", significado: "Substantivo - significa Lacuna" },
            { palavra: "lap", significado: "Substantivo - significa Colo" },
            { palavra: "map", significado: "Substantivo - significa Mapa" },
            { palavra: "trap", significado: "Substantivo - significa Armadilha" },
            { palavra: "strap", significado: "Substantivo - significa Alça" }
        ]
    },

    ape: {
        pronuncia: "EIP",
        palavras: [
            { palavra: "cape", significado: "Substantivo - significa Capa" },
            { palavra: "nape", significado: "Substantivo - significa Nuca" },
            { palavra: "tape", significado: "Substantivo - significa Fita" },
            { palavra: "shape", significado: "Substantivo - significa Forma" },
            { palavra: "grape", significado: "Substantivo - significa Uva" }
        ]
    },

    ate: {
        pronuncia: "EIT",
        palavras: [
            { palavra: "date", significado: "Substantivo - significa Data" },
            { palavra: "hate", significado: "Verbo - significa Odiar" },
            { palavra: "late", significado: "Adjetivo - significa Atrasado" },
            { palavra: "mate", significado: "Substantivo - significa Companheiro" },
            { palavra: "plate", significado: "Substantivo - significa Prato" },
            { palavra: "crater", significado: "Substantivo - significa Cratera" }
        ]
    },

    est: {
        pronuncia: "EST",
        palavras: [
            { palavra: "best", significado: "Adjetivo - significa Melhor" },
            { palavra: "nest", significado: "Substantivo - significa Ninho" },
            { palavra: "pest", significado: "Substantivo - significa Praga" },
            { palavra: "test", significado: "Substantivo - significa Teste" },
            { palavra: "biggest", significado: "Adjetivo - significa Maior" }
        ]
    },

    er: {
        pronuncia: "ER",
        palavras: [
            { palavra: "fern", significado: "Substantivo - significa Samambaia" },
            { palavra: "germ", significado: "Substantivo - significa Germe" },
            { palavra: "perk", significado: "Substantivo - significa Benefício" },
            { palavra: "singer", significado: "Substantivo - significa Cantor" },
            { palavra: "hotter", significado: "Adjetivo - significa Mais quente" },
            { palavra: "quicker", significado: "Adjetivo - significa Mais rápido" }
        ]
    },

    at: {
        pronuncia: "ÉT",
        palavras: [
            { palavra: "bat", significado: "Substantivo - significa Morcego" },
            { palavra: "cat", significado: "Substantivo - significa Gato" },
            { palavra: "hat", significado: "Substantivo - significa Chapéu" },
            { palavra: "chat", significado: "Substantivo - significa Conversa" },
            { palavra: "flat", significado: "Adjetivo - significa Plano" }
        ]
    },

    ane: {
        pronuncia: "EIN",
        palavras: [
            { palavra: "cane", significado: "Substantivo - significa Bengala" },
            { palavra: "lane", significado: "Substantivo - significa Faixa" },
            { palavra: "mane", significado: "Substantivo - significa Juba" },
            { palavra: "pane", significado: "Substantivo - significa Vidraça" },
            { palavra: "plane", significado: "Substantivo - significa Avião" }
        ]
    },

    th: {
        pronuncia: "TH",
        palavras: [
            { palavra: "thick", significado: "Adjetivo - significa Grosso" },
            { palavra: "thin", significado: "Adjetivo - significa Fino" },
            { palavra: "think", significado: "Verbo - significa Pensar" },
            { palavra: "bath", significado: "Substantivo - significa Banho" },
            { palavra: "path", significado: "Substantivo - significa Caminho" },
            { palavra: "math", significado: "Substantivo - significa Matemática" }
        ]
    },

    ell: {
        pronuncia: "EL",
        palavras: [
            { palavra: "bell", significado: "Substantivo - significa Sino" },
            { palavra: "fell", significado: "Verbo - significa Caiu" },
            { palavra: "sell", significado: "Verbo - significa Vender" },
            { palavra: "tell", significado: "Verbo - significa Contar" },
            { palavra: "shell", significado: "Substantivo - significa Concha" }
        ]
    },

    et: {
        pronuncia: "ET",
        palavras: [
            { palavra: "get", significado: "Verbo - significa Conseguir" },
            { palavra: "let", significado: "Verbo - significa Deixar" },
            { palavra: "met", significado: "Verbo - significa Encontrou" },
            { palavra: "wet", significado: "Adjetivo - significa Molhado" },
            { palavra: "yet", significado: "Advérbio - significa Ainda" }
        ]
    },

    ite: {
        pronuncia: "AIT",
        palavras: [
            { palavra: "write", significado: "Verbo - significa Escrever" },
            { palavra: "bite", significado: "Verbo - significa Morder" },
            { palavra: "kite", significado: "Substantivo - significa Pipa" },
            { palavra: "quite", significado: "Advérbio - significa Bastante" },
            { palavra: "polite", significado: "Adjetivo - significa Educado" }
        ]
    },

    cl: {
        pronuncia: "CL",
        palavras: [
            { palavra: "clap", significado: "Verbo - significa Bater palmas" },
            { palavra: "clay", significado: "Substantivo - significa Argila" },
            { palavra: "cliff", significado: "Substantivo - significa Penhasco" },
            { palavra: "cloud", significado: "Substantivo - significa Nuvem" },
            { palavra: "clown", significado: "Substantivo - significa Palhaço" },
            { palavra: "uncle", significado: "Substantivo - significa Tio" }
        ]
    },

    ight: {
        pronuncia: "AIT",
        palavras: [
            { palavra: "light", significado: "Substantivo - significa Luz" },
            { palavra: "night", significado: "Substantivo - significa Noite" },
            { palavra: "right", significado: "Adjetivo - significa Certo" },
            { palavra: "flight", significado: "Substantivo - significa Voo" },
            { palavra: "might", significado: "Verbo - significa Poderia" },
            { palavra: "sight", significado: "Substantivo - significa Visão" }
        ]
    },

    cr: {
        pronuncia: "CR",
        palavras: [
            { palavra: "cry", significado: "Verbo - significa Chorar" },
            { palavra: "crab", significado: "Substantivo - significa Caranguejo" },
            { palavra: "crib", significado: "Substantivo - significa Berço" },
            { palavra: "crash", significado: "Verbo - significa Bater" },
            { palavra: "crowd", significado: "Substantivo - significa Multidão" },
            { palavra: "across", significado: "Preposição - significa Através" }
        ]
    },

    ea: {
        pronuncia: "I",
        palavras: [
            { palavra: "eat", significado: "Verbo - significa Comer" },
            { palavra: "bean", significado: "Substantivo - significa Feijão" },
            { palavra: "hear", significado: "Verbo - significa Ouvir" },
            { palavra: "seat", significado: "Substantivo - significa Assento" },
            { palavra: "treat", significado: "Substantivo - significa Presente" }
        ]
    },

    ee: {
        pronuncia: "I",
        palavras: [
            { palavra: "keep", significado: "Verbo - significa Manter" },
            { palavra: "green", significado: "Adjetivo - significa Verde" },
            { palavra: "sheep", significado: "Substantivo - significa Ovelha" },
            { palavra: "cheerful", significado: "Adjetivo - significa Alegre" },
            { palavra: "sweep", significado: "Verbo - significa Varrer" }
        ]
    },

    an: {
        pronuncia: "AN",
        palavras: [
            { palavra: "and", significado: "Conjunção - significa E" },
            { palavra: "can", significado: "Verbo - significa Poder" },
            { palavra: "man", significado: "Substantivo - significa Homem" },
            { palavra: "pan", significado: "Substantivo - significa Panela" },
            { palavra: "plan", significado: "Substantivo - significa Plano" },
            { palavra: "stand", significado: "Verbo - significa Ficar em pé" }
        ]
    },

    qui: {
        pronuncia: "KUI",
        palavras: [
            { palavra: "quick", significado: "Adjetivo - significa Rápido" },
            { palavra: "quill", significado: "Substantivo - significa Pena" },
            { palavra: "quip", significado: "Substantivo - significa Comentário espirituoso" },
            { palavra: "quit", significado: "Verbo - significa Parar" },
            { palavra: "quiz", significado: "Substantivo - significa Questionário" }
        ]
    },

    th2: {
        pronuncia: "TH",
        palavras: [
            { palavra: "that", significado: "Pronome - significa Aquilo" },
            { palavra: "them", significado: "Pronome - significa Eles/Elas" },
            { palavra: "then", significado: "Advérbio - significa Então" },
            { palavra: "this", significado: "Pronome - significa Isto" },
            { palavra: "rather", significado: "Advérbio - significa Preferencialmente" }
        ]
    },

    old: {
        pronuncia: "OULD",
        palavras: [
            { palavra: "old", significado: "Adjetivo - significa Velho" },
            { palavra: "bold", significado: "Adjetivo - significa Ousado" },
            { palavra: "cold", significado: "Adjetivo - significa Frio" },
            { palavra: "fold", significado: "Verbo - significa Dobrar" },
            { palavra: "hold", significado: "Verbo - significa Segurar" },
            { palavra: "told", significado: "Verbo - significa Contou" }
        ]
    },

    oo: {
        pronuncia: "U",
        palavras: [
            { palavra: "door", significado: "Substantivo - significa Porta" },
            { palavra: "foot", significado: "Substantivo - significa Pé" },
            { palavra: "wood", significado: "Substantivo - significa Madeira" },
            { palavra: "wool", significado: "Substantivo - significa Lã" },
            { palavra: "floor", significado: "Substantivo - significa Chão" }
        ]
    },

    oo2: {
        pronuncia: "U",
        palavras: [
            { palavra: "boot", significado: "Substantivo - significa Bota" },
            { palavra: "fool", significado: "Substantivo - significa Tolo" },
            { palavra: "root", significado: "Substantivo - significa Raiz" },
            { palavra: "cool", significado: "Adjetivo - significa Legal" }
        ]
    },

    ch: {
        pronuncia: "TCH",
        palavras: [
            { palavra: "chat", significado: "Substantivo - significa Conversa" },
            { palavra: "chip", significado: "Substantivo - significa Chip" },
            { palavra: "chin", significado: "Substantivo - significa Queixo" },
            { palavra: "much", significado: "Adjetivo - significa Muito" }
        ]
    },

    ir: {
        pronuncia: "ER",
        palavras: [
            { palavra: "sir", significado: "Substantivo - significa Senhor" },
            { palavra: "air", significado: "Substantivo - significa Ar" },
            { palavra: "bird", significado: "Substantivo - significa Pássaro" },
            { palavra: "girl", significado: "Substantivo - significa Menina" },
            { palavra: "circle", significado: "Substantivo - significa Círculo" }
        ]
    },

    it: {
        pronuncia: "IT",
        palavras: [
            { palavra: "bit", significado: "Verbo - significa Mordeu" },
            { palavra: "hit", significado: "Verbo - significa Bater" },
            { palavra: "pit", significado: "Substantivo - significa Cova" },
            { palavra: "sit", significado: "Verbo - significa Sentar" },
            { palavra: "quit", significado: "Verbo - significa Parar" }
        ]
    },

    sl: {
        pronuncia: "SL",
        palavras: [
            { palavra: "slap", significado: "Verbo - significa Dar um tapa" },
            { palavra: "slim", significado: "Adjetivo - significa Magro" },
            { palavra: "slip", significado: "Verbo - significa Escorregar" },
            { palavra: "slop", significado: "Verbo - significa Derramar" },
            { palavra: "asleep", significado: "Adjetivo - significa Dormindo" }
        ]
    },

    ore: {
        pronuncia: "OR",
        palavras: [
            { palavra: "bore", significado: "Verbo - significa Entediou" },
            { palavra: "chore", significado: "Substantivo - significa Tarefa doméstica" },
            { palavra: "more", significado: "Advérbio - significa Mais" },
            { palavra: "sore", significado: "Adjetivo - significa Dolorido" },
            { palavra: "tore", significado: "Verbo - significa Rasgou" }
        ]
    },

    ot: {
        pronuncia: "OT",
        palavras: [
            { palavra: "got", significado: "Verbo - significa Conseguiu" },
            { palavra: "hot", significado: "Adjetivo - significa Quente" },
            { palavra: "lot", significado: "Substantivo - significa Lote" },
            { palavra: "not", significado: "Advérbio - significa Não" },
            { palavra: "shot", significado: "Substantivo - significa Tiro" }
        ]
    },

    y: {
        pronuncia: "AI",
        palavras: [
            { palavra: "by", significado: "Preposição - significa Por" },
            { palavra: "my", significado: "Pronome - significa Meu/Minha" },
            { palavra: "dry", significado: "Adjetivo - significa Seco" },
            { palavra: "fry", significado: "Verbo - significa Fritar" },
            { palavra: "shy", significado: "Adjetivo - significa Tímido" },
            { palavra: "try", significado: "Verbo - significa Tentar" }
        ]
    },

    ute: {
        pronuncia: "IUT",
        palavras: [
            { palavra: "cute", significado: "Adjetivo - significa Fofo" },
            { palavra: "mute", significado: "Adjetivo - significa Mudo" },
            { palavra: "flute", significado: "Substantivo - significa Flauta" },
            { palavra: "brute", significado: "Substantivo - significa Bruto" }
        ]
    },

    str: {
        pronuncia: "STR",
        palavras: [
            { palavra: "strap", significado: "Substantivo - significa Alça" },
            { palavra: "straw", significado: "Substantivo - significa Canudo" },
            { palavra: "stray", significado: "Verbo - significa Desviar-se" },
            { palavra: "strip", significado: "Verbo - significa Tirar" },
            { palavra: "string", significado: "Substantivo - significa Corda" },
            { palavra: "strong", significado: "Adjetivo - significa Forte" }
        ]
    }
};

const parametros = new URLSearchParams(window.location.search);

const som = parametros.get("som");
const nomePalavra = parametros.get("palavra");

const grupo = sons[som];

const soundPage = document.getElementById("soundPage");
const wordPage = document.getElementById("wordPage");

const sound = document.getElementById("sound");
const soundPronunciation = document.getElementById("soundPronunciation");

const allWords = document.getElementById("allWords");
const startButton = document.getElementById("startButton");

const word = document.getElementById("word");
const meaning = document.getElementById("meaning");
const pronunciation = document.getElementById("pronunciation");

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const soundStar = document.getElementById("soundStar");
const wordStar = document.getElementById("wordStar");

let indiceAtual = 0;
let audioAtual = null;

function palavraFavoritada(nome) {
    return localStorage.getItem("favorita-" + nome.toLowerCase()) === "true";
}

function mudarFavorito(nome) {
    const chave = "favorita-" + nome.toLowerCase();
    const atual = palavraFavoritada(nome);

    localStorage.setItem(chave, (!atual).toString());
}

function ouvirPalavra(texto) {
    const nomeArquivo = texto.toLowerCase() + ".mp3";

    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    audioAtual = new Audio("audio/" + nomeArquivo);

    audioAtual.play().catch(() => {
        mostrarErroAudio(texto);
    });
}

function mostrarErroAudio(palavra) {
    const aviso = document.createElement("div");

    aviso.className = "audio-error";

    aviso.innerHTML = `
        <strong>Ops!</strong>
        <span>Não foi possível reproduzir o áudio de ${palavra}.</span>
    `;

    document.body.appendChild(aviso);

    setTimeout(() => {
        aviso.classList.add("sumindo");

        setTimeout(() => {
            aviso.remove();
        }, 400);
    }, 5000);
}

function atualizarPalavrasFavoritas() {
    document.querySelectorAll(".all-word").forEach(elemento => {
        const nome = elemento.dataset.palavra;

        elemento.classList.toggle(
            "favorite-word",
            palavraFavoritada(nome)
        );
    });
}

function destacarPalavra(texto) {
    if (!som) return texto;

    const inicio = texto.toLowerCase().indexOf(som.toLowerCase());

    if (inicio === -1) {
        return texto;
    }

    return (
        texto.substring(0, inicio) +
        `<span class="sound">${texto.substring(inicio, inicio + som.length)}</span>` +
        texto.substring(inicio + som.length)
    );
}

function criarPaginaInicial() {
    if (!grupo || !allWords) return;

    sound.textContent = som;

    soundPronunciation.textContent =
        "Pronuncia-se " + grupo.pronuncia;

    allWords.innerHTML = "";

    grupo.palavras.forEach(item => {
        const elemento = document.createElement("p");

        elemento.className = "all-word";
        elemento.dataset.palavra = item.palavra;

        elemento.innerHTML = destacarPalavra(item.palavra);

        elemento.style.cursor = "pointer";

        elemento.addEventListener("click", () => {
            const indice = grupo.palavras.findIndex(
                palavra => palavra.palavra === item.palavra
            );

            mostrarPalavra(indice);
        });

        if (palavraFavoritada(item.palavra)) {
            elemento.classList.add("favorite-word");
        }

        allWords.appendChild(elemento);
    });

    atualizarPalavrasFavoritas();
}

function mostrarPalavra(indice) {
    if (!grupo) return;

    if (indice < 0 || indice >= grupo.palavras.length) {
        return;
    }

    const item = grupo.palavras[indice];

    indiceAtual = indice;

    word.innerHTML = destacarPalavra(item.palavra);

    meaning.textContent = item.significado;

    pronunciation.innerHTML =
        `Pronuncia-se ${grupo.pronuncia} - ` +
        `<span class="listen" id="listenButton">OUVIR</span>`;

    const somPalavra = word.querySelector(".sound");

    if (somPalavra) {
        somPalavra.style.cursor = "pointer";

        somPalavra.addEventListener("click", event => {
            event.stopPropagation();
            ouvirPalavra(item.palavra);
        });
    }

    const listenButton = document.getElementById("listenButton");

    if (listenButton) {
        listenButton.style.cursor = "pointer";

        listenButton.addEventListener("click", () => {
            ouvirPalavra(item.palavra);
        });
    }

    atualizarEstrela(item.palavra);

    if (indice === 0) {
        previous.disabled = false;

        previous.onclick = () => {
            wordPage.style.display = "none";
            soundPage.style.display = "flex";
        };
    } else {
        previous.disabled = false;

        previous.onclick = () => {
            mostrarPalavra(indice - 1);
        };
    }

    if (indice < grupo.palavras.length - 1) {
        next.disabled = false;

        next.onclick = () => {
            mostrarPalavra(indice + 1);
        };
    } else {
        next.disabled = true;
        next.onclick = null;
    }

    soundPage.style.display = "none";
    wordPage.style.display = "flex";
}

function atualizarEstrela(nome) {
    const favorita = palavraFavoritada(nome);

    if (wordStar) {
        wordStar.classList.toggle("active", favorita);
    }

    if (soundStar) {
        const algumaFavorita = grupo.palavras.some(item =>
            palavraFavoritada(item.palavra)
        );

        soundStar.classList.toggle("active", algumaFavorita);
    }

    atualizarPalavrasFavoritas();
}

if (wordStar) {
    wordStar.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();

        const item = grupo.palavras[indiceAtual];

        if (!item) return;

        mudarFavorito(item.palavra);

        atualizarEstrela(item.palavra);
    });
}

if (soundStar) {
    soundStar.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();

        const algumaFavorita = grupo.palavras.some(item =>
            palavraFavoritada(item.palavra)
        );

        grupo.palavras.forEach(item => {
            localStorage.setItem(
                "favorita-" + item.palavra.toLowerCase(),
                (!algumaFavorita).toString()
            );
        });

        atualizarEstrela(
            grupo.palavras[indiceAtual]?.palavra
        );
    });
}

if (startButton) {
    startButton.addEventListener("click", () => {
        mostrarPalavra(0);
    });
}

if (grupo) {
    criarPaginaInicial();

    if (nomePalavra) {
        const indice = grupo.palavras.findIndex(
            item => item.palavra.toLowerCase() === nomePalavra.toLowerCase()
        );

        if (indice !== -1) {
            mostrarPalavra(indice);
        }
    }
}