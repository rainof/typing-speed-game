const words = ["hello", "typescript", "keyboard", "game", "challenge"];

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index]
}

async function startGame() {
    const word = getRandomWord();
    console.log("Word:", word);
    const startTime = Date.now();
    console.log("Start Time:", startTime);
    const userInput = prompt("Type the displayed word: ") || ''
    const endTime = Date.now();
    console.log("End Time:", endTime);
    console.log("User Input:", userInput);
    const diffTime = (endTime - startTime) / 1000;
    console.log("Different Time:", diffTime, "sec");
    if (userInput === word) {
        console.log(`Correct! You spent: ${diffTime.toFixed(2)} seconds`);
    }
    else {
        console.log(`Wrong word! The correct word is: ${word}`);
    }
}

startGame()