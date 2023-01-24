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

function playRound(playerSelection, computerSelection) {
    const lowerPlayerSelection = playerSelection.toLowerCase();
    const lowerComputerSelection = computerSelection.toLowerCase();

    if (lowerComputerSelection === lowerPlayerSelection) {
        return "tie";
    }
    else {
        if ((lowerComputerSelection === "rock") && (lowerPlayerSelection === "paper")) {
            return "player";
        }
        else {
            if ((lowerComputerSelection === "rock") && (lowerPlayerSelection === "scissors")) {
                return "computer";
            }
            else {
                if ((lowerComputerSelection === "paper") && (lowerPlayerSelection === "rock")) {
                    return "computer";
                }
                else {
                    if ((lowerComputerSelection === "paper") && (lowerPlayerSelection === "scissors")) {
                        return "player";
                    }
                    else {
                        if ((lowerComputerSelection === "scissors") && (lowerPlayerSelection === "rock")) {
                            return "player";
                        }
                        else {
                            if ((lowerComputerSelection === "scissors") && (lowerPlayerSelection === "paper")) {
                                return "computer";
                            }
                            else {
                                return "wtf";
                            }
                        }
                    }
                }
            }
        }
    }
}

function game()
{
    player = 0;
    computer = 0;
 
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        
        if ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")){
            console.log("You lose this round because you can't follow simple instructions.");
            computer++;
        } 
        else {    
            switch(playRound(playerSelection, getComputerChoice())) {
                case "player":
                    player++;
                    break;
                case "computer":
                    computer++;
                    break;
                case "tie":
                    break;
                default:
                    console.log("You're a shitty programmer who fucked something up!");
            }
        }
    }
    if (player > computer) {
        return "Player wins!";
    }
    else {
        if (computer > player) {
            return "Computer wins!";
        }
        else {
            return "It's a tie!";
        }
    }
}

console.log(game());