// Rock Paper Scissors Game ( RPS )
console.log("Hello World!");

// Game logic starts here:
let humanScore, computerScore; 
    humanScore = computerScore = 0;
// Decision for human choice:
// Decision for human choice:
let hChoice;
console.log("Human Choice is: ");
function getHumanChoice() {
    let choice = prompt(" Make a choice here: ('rock' 'paper' or 'scissors'").toUpperCase();
    switch(choice) {

        case "ROCK":
            hChoice = "ROCK";
            console.log(hChoice);
        break;
        case "PAPER":
            hChoice = "PAPER";
            console.log(hChoice);
        break;
        case "SCISSORS":
            hChoice = "SCISSORS"
            console.log(hChoice);
        break;
        default: 
        console.log("Indecissive ");
    }
}

// Using Math.random() to initiate a random choice for computer
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.35) {
        console.log("Computer choice: ROCK");
    } else if (compChoice = 0.36 || compChoice <= 0.65) {
        console.log("Computer choice: PAPER");
    } else {
        console.log("Computer choice: SCISSORS");
    }
}


// playRound determines if game has a win or draw
function playRound(humanChoice, computerChoice) {
    console.log("Decision Making");
   /* switch (humanChoice, computerChoice) {
        case "ROCK", "PAPER":
            console.log("You Lose! Rock beat Paper");
            ++computerScore;
            console.log()
        break;
        case "PAPER", "SCISSORS": 
        console.log("You Lose! Scissors beats Paper '(it cut paper into pieces)'");
        ++computerScore;
        break;
        case "SCISSORS", "ROCK":
            console.log("You Lose! Rock smash Scissors ");
            ++computerScore;
        break;
        case "PAPER", "ROCK":
            console.log("You Win! Paper suffocate Rock to death");
            ++humanScore;
        break; 
        case "SCISSORS", "PAPER":
            console.log("You Win! Scissors beats Paper");
            ++humanScore;
        break;
        case "ROCK", "SCISSORS":
            console.log("You win! Rock smash Scisstors");
            ++humanScore;
        break;
        default:
            console.log("No Winner");
    }*/
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanScore);
playRound(humanSelection, computerSelection);
