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