// Variáveis globais
const categories = {
    Filmes: ["Jurassic Park", "Titanic", "Matrix", "O Rei Leão", "Avatar"],
    Profissões: ["Bombeiro", "Professor", "Médico", "Engenheiro", "Advogado"],
    Objetos: ["Relógio", "Cadeira", "Guarda-chuva", "Bola", "Laptop"],
    Ações: ["Correr", "Pular", "Cozinhar", "Dormir", "Nadar"],
    Animais: ["Elefante", "Cachorro", "Gato", "Cavalo", "Girafa"]
};

let roundTime, totalRounds, currentRound = 0;
let team1Score = 0, team2Score = 0;
let currentTeam = 1, timer;
let usedWords = [];

// Elementos DOM
const setupScreen = document.getElementById("setup-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");
const timerDisplay = document.getElementById("timer");
const wordCategory = document.getElementById("word-category");
const wordDisplay = document.getElementById("word");
const correctBtn = document.getElementById("correct-btn");
const nextTeamBtn = document.getElementById("next-team-btn");

// Iniciar o jogo
document.getElementById("start-game").addEventListener("click", () => {
    roundTime = parseInt(document.getElementById("round-time").value);
    totalRounds = parseInt(document.getElementById("rounds").value);
    setupScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    startRound();
});

// Sorteia uma palavra
function getRandomWord() {
    const categoriesArray = Object.keys(categories);
    let category, word;
    do {
        category = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
        word = categories[category][Math.floor(Math.random() * categories[category].length)];
    } while (usedWords.includes(word));
    usedWords.push(word);
    return { category, word };
}

// Inicia uma rodada
function startRound() {
    currentRound++;
    const { category, word } = getRandomWord();
    wordCategory.textContent = category;
    wordDisplay.textContent = word;
    document.getElementById("current-team").textContent = `Equipe Atual: Equipe ${currentTeam}`;
    timerDisplay.textContent = roundTime;

    correctBtn.classList.remove("hidden");
    nextTeamBtn.classList.add("hidden");
    startTimer();
}

// Timer
function startTimer() {
    let timeLeft = roundTime;
    timer = setInterval(() => {
        timerDisplay.textContent = --timeLeft;
        if (timeLeft <= 0) endRound();
    }, 1000);
}

// Finaliza a rodada
function endRound() {
    clearInterval(timer);
    correctBtn.classList.add("hidden");
    nextTeamBtn.classList.remove("hidden");
}

// Botão Acertou
correctBtn.addEventListener("click", () => {
    if (currentTeam === 1) team1Score++;
    else team2Score++;
    updateScoreboard();
    startRound();
});

// Atualiza placar
function updateScoreboard() {
    document.getElementById("team1-score").textContent = `Equipe 1: ${team1Score}`;
    document.getElementById("team2-score").textContent = `Equipe 2: ${team2Score}`;
}

// Botão Próxima Equipe
nextTeamBtn.addEventListener("click", () => {
    currentTeam = currentTeam === 1 ? 2 : 1;
    if (currentRound < totalRounds * 2) startRound();
    else showResult();
});

// Tela final
function showResult() {
    gameScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    document.getElementById("final-score").textContent = `Equipe 1: ${team1Score} | Equipe 2: ${team2Score}`;
    document.getElementById("winner").textContent = 
        team1Score > team2Score ? "Equipe 1 Venceu!" : 
        team2Score > team1Score ? "Equipe 2 Venceu!" : "Empate!";
}
