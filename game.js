let resultOutput = document.createElement("div");

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

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();
    playerSelection = humanChoice.target.textContent.toLowerCase();
    const winnerValue = determineWinner(playerSelection, computerChoice);

    switch(winnerValue) {
        case 0:
            resultOutput.textContent = "it's a tie!";
            break;
        case 1:
            humanScore++;
            resultOutput.textContent = `You Win! ${playerSelection} beats ${computerChoice}`;
            break;
        case 2:
            computerScore++;
            resultOutput.textContent = `You Lose! ${computerChoice} beats ${playerSelection}`;

    }

    checkForGameWinner();
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

function getScoresInfo() {

    return "Player: " +  humanScore + "\t" + "Computer: " + computerScore;
}

function checkForGameWinner() {

    runningScoresBoard.textContent = getScoresInfo();

    if (humanScore === 5) {
        alert("You are the winner!");
       resetGame();
    }

    else if (computerScore === 5){
        alert("Computer is the winner!");
        resetGame();
    }
}

function resetGame() {

    humanScore = 0;
    computerScore = 0;
    resultOutput.textContent = "";
    runningScoresBoard.textContent = getScoresInfo();
}

// function playGame() {

//     let humanSelection;
//     let computerChoice;

    

//     for (let i = 0; i < 5; i++) {

//         humanSelection = getHumanChoice();
//         computerChoice = getComputerChoice();
//         playRound(humanSelection, computerChoice);
//     }

//     if (humanScore === computerScore)
//         console.log("It's a tie!");
//     else if (humanScore > computerScore) 
//         console.log("You are the winner!");
//     else{
//         console.log("Computer is the winner!");
//     }
// }

let rpsButtons = [];


for (let i = 0; i < 3; i++) {
    rpsButtons.push(document.createElement("button"));
}

rpsButtons[0].textContent = "Rock";
rpsButtons[1].textContent = "Paper";
rpsButtons[2].textContent = "Scissors";


rpsButtons.forEach(b => b.addEventListener("click", playRound));

let rpsContainer = document.createElement("div");
let documentBody = document.querySelector("body");


for(let b of rpsButtons){
    rpsContainer.appendChild(b);
}

let runningScoresBoard = document.createElement("div");

runningScoresBoard.textContent = getScoresInfo();

documentBody.appendChild(rpsContainer);
documentBody.appendChild(resultOutput);
documentBody.appendChild(runningScoresBoard);


