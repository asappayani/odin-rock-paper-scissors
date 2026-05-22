let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const scoreboard = document.querySelector(".scoreboard");
const gameCommentary = document.querySelector(".game-commentary");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // we'll get 0, 1, or 2 here

    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    if (gameOver) {return};
    if (humanChoice === computerChoice){
        gameCommentary.textContent = "Tie! No one wins!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        gameCommentary.textContent = "You lose! Paper beats Rock.";

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        gameCommentary.textContent = "You win! Paper beats Rock.";

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        gameCommentary.textContent = "You win! Rock beats Scissors.";

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        gameCommentary.textContent = "You lose! Rock beats Scissors.";

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        gameCommentary.textContent = "You lose! Scissors beats Paper";

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        gameCommentary.textContent = "You win! Scissors beats Paper.";
    }

    scoreboard.textContent = humanScore + " - " + computerScore;

    if (humanScore == 5) {
        gameCommentary.textContent = "You win the game!";
        gameOver = true;
    } else if (computerScore == 5) {
        gameCommentary.textContent = "You lost the game!";
        gameOver = true;
    }
}

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});





