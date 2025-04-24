function getComputerChoice() {
    const choice = Math.floor((Math.random() * 3));
    
    return getChoice(choice);
}

function getHumanChoice() {
    const choice = 
        prompt("Enter an option from 1 to 3, (1 = rock, 2 = paper, 3 = scissors)");
    
    return getChoice(choice - 1);
}

function getChoice(choice) {

    switch(choice) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default:
            return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    const winnerValue = determineWinner(humanChoice, computerChoice);

    switch(winnerValue) {
        case 0:
            console.log("it's a tie!");
            break;
        case 1:
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            break;
        case 2:
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

    }
}


function determineWinner(player1, player2) {
    if(player1 == player2) {
        return 0;
    }
    if((player1 == "rock" && player2 == "scissors") ||
        (player1 == "paper" && player2 == "rock") ||
        (player1 == "scissors" && player2 == "paper")) {
        humanScore++;
        return 1;
    }

    else {
        return 2;
    }
}


const humanSelection = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanSelection, computerChoice);