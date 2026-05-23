function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random(3) * 3)];
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice, score) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return score;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    score[0]++;
    return score;
  } else {
    console.log(`You lose! ${humanChoice} loses to ${computerChoice}.`);
    score[1]++;
    return score;
  }
}

function playGame() {
  let score = [0, 0];
  for (let i = 0; i < 5; i++) {
    score = playRound(getHumanChoice(), getComputerChoice(), score);
  }
  if (score[0] === score[1]) {
    console.log("The game is a tie!");
  } else if (score[0] > score[1]) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game! The computer wins!");
  }
}
