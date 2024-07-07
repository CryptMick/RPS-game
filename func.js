console.log("Hello World!");

function getComputerChoice() {
    const random = Math.random();
    if (random > 0 && random < 0.35) {
        console.log("Computer choice: Rock");
    } else if (random > 0.35 && random < 0.7) {
        console.log("Computer Choice: Paper");
    } else if (random > 0.7 && random < 1) {
        console.log("Computer Choice: Scissors");
    } else {
        console.log("");
    }
}
function getHumanChoice() {
    let hInput = prompt("Make a choice between Rock, Paper, and Scissors").toUpperCase();
    if (hInput === "ROCK") {
        console.log("Human Choice: ROCK");
    } else if (hInput === "PAPER") {
        console.log("Human Choice: PAPER");
    } else if (hInput === "SCISSORS") {
        console.log("SCISSORS");
    } else {
        console.log("");
    }
}

function playRound(humanChoice, computerChoice) {
    // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);