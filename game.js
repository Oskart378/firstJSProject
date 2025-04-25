function getComputerChoice() {
    const choice = Math.floor((Math.random() * 3));
    
    return getChoice(choice);
}

function getHumanChoice() {
    let choice = null;

    while(choice < 1 || choice > 3)
        choice = prompt("Enter an option from 1 to 3, (1 = rock, 2 = paper, 3 = scissors)");
    
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
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            break;
        case 2:
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

    }
}


function determineWinner(player1, player2) {

    if(player1 === player2) {
        return 0;
    }
    else if((player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")) {
        return 1;
    }

    else {
        return 2;
    }
}

function playGame() {

    let humanSelection;
    let computerChoice;

    

    for (let i = 0; i < 5; i++) {

        humanSelection = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanSelection, computerChoice);
    }

    if (humanScore === computerScore)
        console.log("It's a tie!");
    else if (humanScore > computerScore) 
        console.log("You are the winner!");
    else{
        console.log("Computer is the winner!");
    }
}


playGame();