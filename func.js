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
let replay;
console.log("Round 1:");
function playRound(humanChoice, computerChoice) {
    console.log("Decision Making");
    if (hChoice === "ROCK" && comChoice === "PAPER") {
        console.log("You Lose! Rock beat Paper");
            ++computerScore;
            replay = "SUCCESS";
    } else if (hChoice === "PAPER" && comChoice === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper '(it cut paper into pieces)'");
        ++computerScore;
        replay = "SUCCESS";
    } else if (hChoice === "SCISSORS" && comChoice === "ROCK"){
        console.log("You Lose! Rock smash Scissors ");
            ++computerScore;
            replay = "SUCCESS";
    } else if (hChoice === "PAPER" && comChoice === "ROCK") {
        console.log("You Win! Paper suffocate Rock to death");
            ++humanScore;
            replay = "SUCCESS";
    } else if ( hChoice === "SCISSORS" && comChoice === "PAPER") {
        console.log("You Win! Scissors beats Paper");
            ++humanScore;
            replay = "SUCCESS";
    } else if (hChoice === "ROCK" && comChoice === "SCISSORS") {
        console.log("You win! Rock smash Scisstors");
            ++humanScore;
            replay = "SUCCESS";
    } else {
        console.log("It's a draw");
        replay = "SUCCESS";
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
