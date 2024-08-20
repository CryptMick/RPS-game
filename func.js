// Game logic begins here: 
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start = document.querySelector("#start");
const begin = document.querySelector("#begin");
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
function outward() {
    humanscor.textContent= `Player Score: ${humanScore}`;
    compscore.textContent= `Computer Score: ${computerScore}`;
}
outward();
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

// Scores and final game message and disable game button at completion of each round (first to score a 5 point)
function scores() {
    outward();
    if (humanScore === 5 || computerScore === 5) {
        start.disabled = false;
       rock.disabled = true;
        paper.disabled = true;
        scissors.disabled  = true;
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

// Player decision is captured in variable "choice"
rock.addEventListener("click", () => {
    playerChoice = "ROCK";
    humanOutput.textContent = `You choose: ${playerChoice}`;
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    scores();

});
    paper.addEventListener("click", () => {
        playerChoice = "PAPER";
        humanOutput.textContent = `You choose: ${playerChoice}`;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        scores();
    });
    scissors.addEventListener("click", () => {
        playerChoice = "SCISSORS";
        humanOutput.textContent = `You choose: ${playerChoice}`;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        scores();
    });
   
    // Restart button starts a new round when the prior round is completed 
    if (humanScore < 5  || computerScore < 5) {start.disabled = true;}
    start.addEventListener("click", () => {
        rock.disabled = false;
        scissors.disabled = false;
        paper.disabled = false;
        begin.textContent = "Game Restarted";
        humanScore = 0;
        computerScore = 0;
        message.textContent = "";
        para.textContent = "";
        outward();
    })
    