function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Please choose rock, paper, or scissors"
  ).toUpperCase();

  while (!["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
    console.log("Invalid choice, please choose again.");
    humanChoice = prompt(
      "Please choose rock, paper, or scissors"
    ).toUpperCase();
  }

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return "tie";
  }

  const winningCombinations = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER"
  };

  if (winningCombinations[humanChoice] === computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const roundWinner = playRound(humanSelection, computerSelection);

  if (roundWinner === "human") {
    humanScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }

  console.log(
    `Round Winner: ${roundWinner}\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`
  );

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const humanSelection = "ROCK";
  const computerSelection = getComputerChoice();
  const roundWinner = playRound(humanSelection, computerSelection);
  console.log(roundWinner);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const humanSelection = "PAPER";
  const computerSelection = getComputerChoice();
  const roundWinner = playRound(humanSelection, computerSelection);
  console.log(roundWinner);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const humanSelection = "SCISSORS";
  const computerSelection = getComputerChoice();
  const roundWinner = playRound(humanSelection, computerSelection);
  console.log(roundWinner);
});

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