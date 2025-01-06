let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const scoreDiv = document.querySelector("#score");
const messageDiv = document.querySelector("#message");
const modal = document.querySelector("#gameOverModal");
const winnerMessage = document.querySelector("#winnerMessage");
const restartButton = document.querySelector("#restartButton");

function displayMessage(message) {
  messageDiv.textContent = message;
}

function updateScores() {
  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function announceWinner(winner) {
  winnerMessage.textContent = winner === "human" ? "Congratulations! You win the game!" : "Game over! The computer wins!";
  modal.classList.add("active"); // Show modal
  gameOver = true;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScores();
  displayMessage("");
  modal.classList.remove("active"); // Hide modal
}

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    displayMessage(`It's a tie! Both chose ${humanChoice}.`);
    return "tie";
  }

  const winningCombinations = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
  };

  if (winningCombinations[humanChoice] === computerChoice) {
    displayMessage(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    return "human";
  } else {
    displayMessage(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
    return "computer";
  }
}

function handleChoice(humanChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  const roundWinner = playRound(humanChoice, computerChoice);

  if (roundWinner === "human") {
    humanScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }

  updateScores();

  if (humanScore === 5) {
    announceWinner("human");
  } else if (computerScore === 5) {
    announceWinner("computer");
  }
}

document.querySelector("#rock").addEventListener("click", () => handleChoice("ROCK"));
document.querySelector("#paper").addEventListener("click", () => handleChoice("PAPER"));
document.querySelector("#scissors").addEventListener("click", () => handleChoice("SCISSORS"));

restartButton.addEventListener("click", resetGame);
