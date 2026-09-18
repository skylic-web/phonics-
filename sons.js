const palavrasPorSom = {

    oa: ["boat", "coat", "goal", "goat", "road", "toad"],

    en: ["den", "hen", "pen", "ten", "then", "blend"],

    sh: ["shed", "shin", "ship", "dish", "wash", "splash"],

    ow: ["bow", "cow", "how", "owl", "chow", "towel"],

    ar: ["bar", "car", "far", "park", "dark", "star", "part"],

    in: ["bin", "win", "chin", "shin", "wind", "winner"],

    ut: ["but", "cut", "rut", "shut", "strut", "butter"],

    ine: ["mine", "nine", "pine", "vine", "shine", "diner"],

    ing: ["ring", "bring", "thing", "finger", "string", "singing"],

    ain: ["again", "main", "rain", "brain", "stain", "train"],

    ap: ["cap", "gap", "lap", "map", "trap", "strap"],

    ape: ["cape", "nape", "tape", "shape", "grape"],

    ate: ["date", "hate", "late", "mate", "crater", "plate"],

    est: ["best", "nest", "pest", "test", "biggest"],

    er: ["fern", "germ", "perk", "singer", "hotter", "quicker"],

    at: ["bat", "cat", "hat", "chat", "flat"],

    ane: ["cane", "lane", "mane", "pane", "plane"],

    th: ["thick", "thin", "think", "bath", "path", "math"],

    ell: ["bell", "fell", "sell", "tell", "shell"],

    et: ["get", "let", "met", "wet", "yet"],

    ite: ["write", "bite", "kite", "quite", "polite"],

    cl: ["clap", "clay", "cliff", "cloud", "clown", "uncle"],

    ight: ["light", "night", "right", "flight", "might", "sight"],

    cr: ["cry", "crab", "crib", "crash", "crowd", "across"],

    ea: ["eat", "bean", "hear", "seat", "treat"],

    ee: ["keep", "green", "sheep", "cheerful", "sweep"],

    an: ["and", "can", "man", "pan", "plan", "stand"],

    qui: ["quick", "quill", "quip", "quit", "quiz"],

    th2: ["that", "them", "then", "this", "rather"],

    old: ["old", "bold", "cold", "fold", "hold", "told"],

    oo: ["door", "foot", "wood", "wool", "floor"],

    oo2: ["boot", "fool", "root", "cool"],

    ch: ["chat", "chip", "chin", "much"],

    ir: ["sir", "air", "bird", "girl", "circle"],

    it: ["bit", "hit", "pit", "sit", "quit"],

    sl: ["slap", "slim", "slip", "slop", "asleep"],

    ore: ["bore", "chore", "more", "sore", "tore"],

    ot: ["got", "hot", "lot", "not", "shot"],

    y: ["by", "my", "dry", "fry", "shy", "try"],

    ute: ["cute", "mute", "flute", "brute"],

    str: ["strap", "straw", "stray", "strip", "string", "strong"]
};


const soundCards = document.querySelectorAll(".sound-card");


soundCards.forEach(card => {

    const link = card.getAttribute("href");

    if (!link || !link.includes("?")) return;

    const parametros = new URLSearchParams(
        link.split("?")[1]
    );

    const som = parametros.get("som");

    const estrela = card.querySelector(".sound-star");

    if (!som || !estrela) return;


    function atualizarCartao() {

        const palavras = palavrasPorSom[som] || [];

        const temFavorita = palavras.some(
            palavra =>
                localStorage.getItem(
                    "favorita-" + palavra
                ) === "true"
        );


        card.classList.toggle(
            "favorite-card",
            temFavorita
        );

        estrela.classList.toggle(
            "active",
            temFavorita
        );
    }


    estrela.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();


        const palavras = palavrasPorSom[som] || [];

        const algumaFavorita = palavras.some(
            palavra =>
                localStorage.getItem(
                    "favorita-" + palavra
                ) === "true"
        );


        palavras.forEach(palavra => {

            localStorage.setItem(
                "favorita-" + palavra,
                (!algumaFavorita).toString()
            );

        });


        atualizarCartao();
    });


    atualizarCartao();

});