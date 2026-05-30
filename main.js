const choices = document.querySelector("#choices");
const reset = document.querySelector("#reset button");
const result = document.querySelector("#result");
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

const vineboom = new Audio("./assets/audio/moai-vineboom.mp3");

function getPlayerChoice() {
  return prompt("Rock Paper Scissors").toLowerCase();
}

function getCpuChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    result.textContent = `Red's attack missed!`;
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    result.textContent = `Red used ${playerChoice}! It's super effective!`;
    playerScore.textContent++;
  } else {
    result.textContent = `Red used ${playerChoice}! It's not very effective...`;
    cpuScore.textContent++;
  }
}

function checkWinner() {
  if (playerScore.textContent == 5) {
    result.textContent = "Red got $200 for winning!";
  } else if (cpuScore.textContent == 5) {
    result.textContent = "Red fainted!";
  } else {
    return
  }
  reset.style.visibility = "visible";
}

function resetGame() {
  result.textContent = "Wild charizard appeared!";
  playerScore.textContent = 0;
  cpuScore.textContent = 0;
  reset.style.visibility = "hidden";
}

choices.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "rock":
      vineboom.play();
    case "paper":
    case "scissors":
      playRound(e.target.id, getCpuChoice());
      checkWinner();
      break;
  }
});
reset.addEventListener("click", (e) => resetGame());
