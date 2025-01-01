function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt("Please choose rock, paper or scissors");

  // Make the choice case insensitive
  humanChoice.toLowerCase();

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    console.log("Invalid choice");
  }
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    console.log("You win!" + humanChoice + " beats " + computerChoice);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    console.log("You win!" + humanChoice + " beats " + computerChoice);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    console.log("You win!" + humanChoice + " beats " + computerChoice);
  } else {
    computerScore += 1;
    console.log("You lose!" + computerChoice + " beats " + humanChoice);
  }
}

const humanScore = 0;
const computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
