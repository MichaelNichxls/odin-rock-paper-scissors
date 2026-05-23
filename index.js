function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random(3) * 3)];
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors: ").toLowerCase();
}
