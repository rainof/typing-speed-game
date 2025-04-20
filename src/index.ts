const words = ["hello", "typescript", "keyboard", "game", "challenge"];
let timeLeft = 10;
let score = 0;
let currentWord = '';
let timerInterval: any;

const wordDisplay = document.getElementById("word-display") as HTMLElement;
const wordInput = document.getElementById("word-input") as HTMLInputElement;
const timeLeftDisplay = document.getElementById("time-left") as HTMLElement;
const scoreDisplay = document.getElementById("score") as HTMLElement;
const startButton = document.getElementById("start-button") as HTMLButtonElement;

wordInput.addEventListener("input", checkInput);
startButton.addEventListener("click", startGame);

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index]
}

function updateTime() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        wordInput.disabled = true;
        alert(`Game Over! Your score is ${score}`);
    } else {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft.toString();
    }
}

function checkInput() {
    if (wordInput.value.trim() === currentWord) {
        score++;
        scoreDisplay.textContent = score.toString();
        currentWord = getRandomWord();
        wordDisplay.textContent = currentWord;
        wordInput.value = '';
    }
}

function startGame() {
    timeLeft = 10;
    score = 0;
    wordInput.disabled = false;
    wordInput.value = '';
    startButton.disabled = true;

    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
    timeLeftDisplay.textContent = timeLeft.toString();
    scoreDisplay.textContent = score.toString();

    timerInterval = setInterval(updateTime, 1000);
}

startGame()