// Game logic begins here: 
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let para = document.querySelector(".para");
let humanscor = document.querySelector("#humanscore");
let compscore = document.querySelector("#computerscore");
const message = document.querySelector("#message");
let playerChoice;
let humanOutput = document.createElement("p");
let compOutput = document.createElement("p");
let div = document.querySelector("#container");
div.appendChild (humanOutput);
div.appendChild (compOutput);
// Using Math.random() to initiate a random choice for computer
let comChoice;
function getComputerChoice() {
    let rand = Math.random();
    console.log(rand);
    if (rand <= 0.35) {
        comChoice = "ROCK";
        console.log(comChoice);
    } else if (rand >= 0.36 && rand <= 0.65) {
        comChoice = "PAPER";
        console.log(comChoice);
    } else if (rand >= 0.66 && rand <= 1) {
        comChoice = "SCISSORS";
        console.log(comChoice);
    } 
     compOutput.textContent = `Computer choose: ${comChoice}`;
     return comChoice;
}

let humanScore = 0;
    let computerScore = 0;
// Game Decision Rule, playRound determine who win or lose the game 
function playRound(player, computer) {
    
    if (player === "ROCK" && computer === "PAPER") {
        para.textContent = "You Lose!"; //Rock beat Paper";
        compscore.textContent = ++computerScore;
    } else if (player === "PAPER" && computer === "SCISSORS") {
        para.textContent = "You Lose!"; //Scissors beats Paper '(it cut paper into pieces)'";
        compscore.textContent = ++computerScore;
            } else if (player === "SCISSORS" && computer === "ROCK"){
        para.textContent = "You Lose!"; //Rock smash Scissors ";
        compscore.textContent = ++computerScore;
           
    } else if (player === "PAPER" && computer === "ROCK") {
        para.textContent = "You Win!"; //Paper suffocate Rock to death";
        humanscor.textContent = ++humanScore;
    } else if ( player === "SCISSORS" && computer === "PAPER") {
        para.textContent = "You Win!"; //Scissors beats Paper";
        humanscor.textContent = ++humanScore;
    } else if (player === "ROCK" && computer === "SCISSORS") {
        para.textContent = "You win!"; //Rock smash Scisstors";
        humanscor.textContent = ++humanScore;
    } else {
        para.textContent = "It's a draw";
    }
    return para.textContent;
}
humanscor.textContent = humanScore;
compscore.textContent = computerScore;
// game() return player and computer input and call the playRound() to deteremine win, lose, or draw.

/*function count() {
    if (para.textContent === "You win!" ) {humanscor.textContent = ++humanScore;}
    else if (para.textContent === "You Lose!" ) { compscore.textContent = ++computerScore;}
}*/
// Scores and final game message: 
function scores() {
    if (humanScore === 5 || computerScore === 5) {
        alert ("Game Over");
        if (humanScore > computerScore) {
            message.textContent = `Congratulation Player, you won the entire game rounds with a socre of ${humanScore} `;
            
        } else if (humanScore < computerScore) {
            message.textContent = `You lose the Game. Therefore Computer wins with a score of ${computerScore}`;
        } else {
            message.textContent = "It is a draw game. No winner/loser";
        }
    }

}

let computerChoice;

// Player decision is captured in choice 
rock.addEventListener("click", () => {
    playerChoice = "ROCK";
    humanOutput.textContent = `You choose: ${playerChoice}`;
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    scores();
    //count(); 
});
    paper.addEventListener("click", () => {
        playerChoice = "PAPER";
        humanOutput.textContent = `You choose: ${playerChoice}`;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        scores();
        //count();
    });
    scissors.addEventListener("click", () => {
        playerChoice = "SCISSORS";
        humanOutput.textContent = `You choose: ${playerChoice}`;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        scores();
        //count();
    });