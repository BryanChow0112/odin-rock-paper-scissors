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

  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1));
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
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
