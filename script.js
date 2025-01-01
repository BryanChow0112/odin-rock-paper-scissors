function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * 3);
  console.log("The computer has chosen " + choices[randomNumber]);
  return choices[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose rock, paper or scissors");

  // Make the choice case insensitive
  humanChoice = humanChoice.toUpperCase();

  if (
    humanChoice === "ROCK" ||
    humanChoice === "PAPER" ||
    humanChoice === "SCISSORS"
  ) {
    console.log("You have chosen " + humanChoice);
    return humanChoice;
  } else {
    console.log("Invalid choice");
  }
}

function playRound(humanChoice, computerChoice) {
  let roundWinner = "";

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    roundWinner = "tie";
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    roundWinner = "human";
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    roundWinner = "human ";
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    roundWinner = "human";
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    roundWinner = "computer";
  }

  return roundWinner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1));
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let roundWinner = playRound(humanSelection, computerSelection);
    console.log("Round Winner: " + roundWinner);

    if (roundWinner === "human") {
      humanScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
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
