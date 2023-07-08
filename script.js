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
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
  else {
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

const playButtons = document.querySelectorAll(".play");
console.log(playButtons);
playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {playRound(playButton.getAttribute("data-action"), getComputerChoice())});
})