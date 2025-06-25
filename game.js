//------ Constants -------

const CHOICES = ["rock", "paper", "scissors"];
const TIE = 0;
const PLAYER_WINS = 1;
const COMPUTER_WINS = 2;

// ----- Game State --------

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

//------ DOM Elements -------

const resultDisplay = document.querySelector("#result");
const scoreBoard = document.querySelector("#scoreboard");
const buttonContainer = document.querySelector("#button-container");
const gameContainer = document.querySelector(".game-container");
let gameOverDisplay;


//----- Utility Functions----

function getRandomComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}


function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice)
        return TIE;
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) return PLAYER_WINS;

      return COMPUTER_WINS;
}


function getFormattedScore() {
    return `Player: ${playerScore} | Computer: ${computerScore}`;
}

function updateScore(winner) {
    if (winner === PLAYER_WINS) playerScore++;
    if (winner === COMPUTER_WINS) computerScore++;
    scoreBoard.textContent = getFormattedScore();
}

function displayRoundResult(winner, playerChoice, computerChoice) {

    if (winner === TIE) {
        resultDisplay.textContent = "It's a tie!";
    }
    
    else if (winner === PLAYER_WINS) {
        resultDisplay.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else {
        resultDisplay.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}


function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        gameOverDisplay.textContent = playerScore === 5 ? "🎉 You are the winner!" : "💀 Computer is the winner!";
        gameOverDisplay.classList.add("show");
        playAgainButton.style.display = "block"; // 👈 Show the button

    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    scoreBoard.textContent = getFormattedScore();
    resultDisplay.textContent = "";
    gameOverDisplay.textContent = "";
    gameOverDisplay.classList.remove("show");

    showMoves("", "");
    playAgainButton.style.display = "none"; // 👈 Hide the button again

}

function showMoves(playerChoice, computerChoice) {
    document.querySelector("#player-move").textContent = `🧍 You: ${playerChoice}`;
    document.querySelector("#computer-move").textContent = `💻 CPU: ${computerChoice}`;
}

//-------- Game Flow--------

function handlePlayerChoice(event) {

    if (gameOver) return;
 
    event.target.classList.add("clicked");
    setTimeout(() => event.target.classList.remove("clicked"), 200);

    const playerChoice = event.target.textContent.toLowerCase();
    const computerChoice = getRandomComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    updateScore(winner);
    displayRoundResult(winner, playerChoice, computerChoice);
    showMoves(playerChoice, computerChoice);
    checkGameOver();
}

//--------- UI Setup ---------

function initializeUI() {
    CHOICES.forEach( choice => {
        const button = document.createElement("button");
        button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
        button.addEventListener("click", handlePlayerChoice);
        buttonContainer.appendChild(button);
        button.classList.add(choice.toLowerCase());

    });


    scoreBoard.textContent = getFormattedScore();

    gameContainer.appendChild(buttonContainer);
    gameContainer.appendChild(resultDisplay);
    gameContainer.appendChild(scoreBoard);

    const playerMoveDisplay = document.createElement("div");
    playerMoveDisplay.id = "player-move";

    const computerMoveDisplay = document.createElement("div");
    computerMoveDisplay.id = "computer-move";

    // Append them to the DOM
    gameContainer.appendChild(playerMoveDisplay);
    gameContainer.appendChild(computerMoveDisplay);

    showMoves("", "");

    gameOverDisplay = document.createElement("div");
    gameOverDisplay.id = "game-over-message";
    gameContainer.appendChild(gameOverDisplay);

    playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.id = "play-again";
    playAgainButton.style.display = "none"; // hide it initially
    playAgainButton.addEventListener("click", resetGame);
    gameContainer.appendChild(playAgainButton);

}

initializeUI();
