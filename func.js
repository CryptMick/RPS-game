// Rock Paper Scissors Game ( RPS )
console.log("Hello World!");
const start = document.querySelector("#start");
start.addEventListener("click", () => { console.log("who Please?");
// Game logic starts here:
let humanScore, computerScore;
humanScore = 0;
computerScore = 0; 
// Decision for human choice:
let hChoice;
console.log("Human Choice is: ");
function getHumanChoice() {
    let choice = prompt(" Make a choice here: ('rock' 'paper' or 'scissors')").toUpperCase();
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
console.log("Computer Choice: ");
let comChoice;
function getComputerChoice() {
    let compChoice = Math.random();
    console.log(compChoice);
    if (compChoice <= 0.35) {
        comChoice = "ROCK";
        console.log(comChoice);
    } else if (compChoice >= 0.36 && compChoice <= 0.65) {
        comChoice = "PAPER";
        console.log(comChoice);
    } else if (compChoice >= 0.66 && compChoice <= 1) {
        comChoice = "SCISSORS";
        console.log(comChoice);
    } else {
        console.log("No Decision");
    }
}

// Using Math.random() to initiate a random choice for computerremark;
console.log("Round 1:");
function playRound(humanChoice, computerChoice) {
    console.log("Decision Making");
    if (hChoice === "ROCK" && comChoice === "PAPER") {
        console.log("You Lose! Rock beat Paper");
            ++computerScore;
            remark = "SUCCESS";
    } else if (hChoice === "PAPER" && comChoice === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper '(it cut paper into pieces)'");
        ++computerScore;
        remark = "SUCCESS";
    } else if (hChoice === "SCISSORS" && comChoice === "ROCK"){
        console.log("You Lose! Rock smash Scissors ");
            ++computerScore;
            remark = "SUCCESS";
    } else if (hChoice === "PAPER" && comChoice === "ROCK") {
        console.log("You Win! Paper suffocate Rock to death");
            ++humanScore;
            remark = "SUCCESS";
    } else if ( hChoice === "SCISSORS" && comChoice === "PAPER") {
        console.log("You Win! Scissors beats Paper");
            ++humanScore;
            remark = "SUCCESS";
    } else if (hChoice === "ROCK" && comChoice === "SCISSORS") {
        console.log("You win! Rock smash Scisstors");
            ++humanScore;
            remark = "SUCCESS";
    } else {
        console.log("It's a draw");
        remark = "SUCCESS";
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// rePlay 
function playGame() {
    switch (remark) {
        case "SUCCESS":
            console.log("Round 2")
            const humanSelect = getHumanChoice();
            const computerSelect = getComputerChoice();
            playRound(humanSelect, computerSelect);
                    remark = "Round 3";
                    switch (remark) {
                        case "Round 3":
                            console.log(remark, "Begins:")
                            const human = getHumanChoice();
                            const computer = getComputerChoice();
                            playRound(human, computer);
                            remark = "Round 4";
                            switch (remark) {
                                case "Round 4":
                                    console.log(remark, "Begins:")
                                    const human = getHumanChoice();
                                    const computer = getComputerChoice();
                                    playRound(human, computer);
                                    remark = "Round 5";
                                    switch (remark) {
                                        case "Round 5":
                                            console.log(remark, "Begins:")
                                            const human = getHumanChoice();
                                            const computer = getComputerChoice();
                                            playRound(human, computer);
                                    }
                            }
                    }
        break;
        default: 
        console.log("It all end here");
        }
        
}
playGame();

console.log("Winners Score goes here (Human : Computer");
console.log(humanScore, ":", computerScore);
// This section will output result of the game to on the main DOM
const humanscore = document.querySelector("#humanscore");
const compscore = document.querySelector("#computerscore");
const sc = document.createTextNode( humanScore);
const cs = document.createTextNode( computerScore);
humanscore.appendChild(sc);
compscore.appendChild(cs);
// Game conclusion (win, lose, or a draw game);
 
const message = document.querySelector("#message");
if (humanScore > computerScore) {
    message.textContent = `Congratulation Player, you won the entire game rounds with a socre of ${humanScore} `;
    
} else if (humanScore < computerScore) {
    message.textContent = `You lose the Game. Therefore Computer wins with a score of ${computerScore}`;
} else {
    message.textContent = "It is a draw game. No winner/loser";
}
});
