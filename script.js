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

  const playerSelect2 = document.querySelector(".player-select");
  const computerSelect2 = document.querySelector(".computer-select");

  if (playerSelection === computerSelection) {
    if (playerSelection === 'Rock') {
      playerSelect2.textContent = "🤛";
      computerSelect2.textContent = "🤛";
    }
    else if (playerSelection === 'Paper') {
      playerSelect2.textContent = "🖐️";
      computerSelect2.textContent = "🖐️";
    }
    else {
      playerSelect2.textContent = "✌️";
      computerSelect2.textContent = "✌️";
    }
    return "Tie!";
  }

  else if (playerSelection === 'Rock') {
    playerSelect2.textContent = "🤛";
    if (computerSelection === 'Paper') {
      computerSelect2.textContent = "🖐️";
      result = "Lose";
    }
    else {
      computerSelect2.textContent = "✌️";
      result = 'Win';
    }
  }
  else if (playerSelection === 'Paper') {
    playerSelect2.textContent = "🖐️";
    if (computerSelection === 'Rock') {
      computerSelect2.textContent = "🤛";
      result = 'Win';
    }
    else {
      computerSelect2.textContent = "✌️";
      result = 'Lose';
    }
  }
  else {
    playerSelect2.textContent = "✌️"
    if (computerSelection === 'Rock') {
      computerSelect2.textContent = "🤛";
      result = 'Lose';
    }
    else {
      computerSelect2.textContent = "🖐️";
      result = 'Win';
    }
  }

  rounds++;
  const roundNum2 = document.querySelector(".round-num");
  roundNum2.textContent = "Round " + rounds;

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
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.textContent = "Play Again!";
  resetButton.addEventListener("mouseover", addButtonAnimation);
  resetButton.addEventListener("mouseout", removeButtonAnimation);
  resetArea.appendChild(resetButton);
}

function addButtonAnimation() {
  this.classList.add("play-effect");
}

function removeButtonAnimation() {
  this.classList.remove("play-effect");
}

const playButtons = document.querySelectorAll(".play");
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const playerScoreNode = document.querySelector(".playerScore");
const computerScoreNode = document.querySelector(".computerScore");
const roundInfo = document.querySelector(".round")
const roundPlay = document.querySelector(".round-play");
const roundAction = document.querySelector(".round-action");
const resetArea = document.querySelector(".reset");

// ADD EVENT LISTENERS FOR BUTTONS
playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    const roundResult = playRound(playButton.getAttribute("data-action"), getComputerChoice());
    roundInfo.textContent = roundResult;
    checkWinner();
  });
  playButton.addEventListener("mouseover", addButtonAnimation);
  playButton.addEventListener("mouseout", removeButtonAnimation);
})