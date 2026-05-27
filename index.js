const result = document.querySelector("#result");
const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#cpu-score");

function getHumanChoice() {
  return prompt("What will you play? Rock, Paper, or Scissors:").toLowerCase();
}

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
    humanScore.textContent++;
  } else {
    result.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} loses to ${computerChoice}!`;
    computerScore.textContent++;
  }
}

function checkWinner() {
  if (humanScore.textContent == 5) {
    result.textContent = "You scored 5 points! You win the game!";
  } else if (computerScore.textContent == 5) {
    result.textContent = "The computer scored 5 points! You lose the game!";
  }
}

function resetGame() {
  result.textContent = "...";
  humanScore.textContent = 0;
  computerScore.textContent = 0;
}

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "rock":
    case "paper":
    case "scissors":
      playRound(e.target.id, getComputerChoice());
      checkWinner()
      break;
  }
});
