


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

function getHumanChoice() {
    return prompt("Enter either rock, paper, or scissors.");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log("Tie! No one wins.");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + "");
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}




