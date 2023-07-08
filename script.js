function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result == 0) {
    return "Rock";
  }
  else if (result == 1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection = computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1).toLowerCase();
  let result;
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  else if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      result = "Lose";
    }
    else {
      result = 'Win';
    }
  }
  else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      result = 'Win';
    }
    else {
      result = 'Lose';
    }
  }
  else {
    if (computerSelection === 'Rock') {
      result = 'Lose';
    }
    else {
      result = 'Win';
    }
  }

  if (result === 'Win') {
    playerScore++;
    playerScoreNode.textContent = playerScore;
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
  else {
    computerScore++;
    computerScoreNode.textContent = computerScore;
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function checkWinner() {
  if (playerScore === 5) {
    roundInfo.textContent += "\nYou won the game!";
  }
  else if (computerScore === 5) {
    roundInfo.textContent += "\nYou lost the game. Try again!";
  }
  else {
    return;
  }
}

const playButtons = document.querySelectorAll(".play");
let playerScore = 0;
let computerScore = 0;
const playerScoreNode = document.querySelector(".playerScore");
const computerScoreNode = document.querySelector(".computerScore");
const roundInfo = document.querySelector(".round")

console.log(playButtons);
playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    const roundResult = playRound(playButton.getAttribute("data-action"), getComputerChoice());
    roundInfo.textContent = roundResult;
    checkWinner();
  });
})