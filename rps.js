function getComputerChoice() {
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            console.log("Someone fucked up");
    }
}

console.log("Computer chooses ", getComputerChoice());