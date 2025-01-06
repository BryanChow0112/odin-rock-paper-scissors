function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    displayMessage(`It's a tie! Both chose ${humanChoice}.`);
    return "tie";
  }

  const winningCombinations = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER"
  };

  if (winningCombinations[humanChoice] === computerChoice) {
    displayMessage(`You win! ${humanChoice} beats ${computerChoice}.`);
    return "human";
  } else {
    displayMessage(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "computer";
  }
}

let humanScore = 0;
let computerScore = 0;

function handleChoice(humanChoice) {
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

const resultsDiv = document.querySelector("#results");

function displayMessage(message) {
  const messageDiv = document.createElement("p");
  messageDiv.textContent = message;
  resultsDiv.appendChild(messageDiv);
}

function updateScores() {
  const scoreDiv = document.querySelector("#score");
  if (!scoreDiv) {
    const newScoreDiv = document.createElement("div");
    newScoreDiv.id = "score";
    newScoreDiv.innerHTML = `<p>Human: ${humanScore} | Computer: ${computerScore}</p>`;
    resultsDiv.appendChild(newScoreDiv);
  } else {
    scoreDiv.innerHTML = `<p>Human: ${humanScore} | Computer: ${computerScore}</p>`;
  }
}