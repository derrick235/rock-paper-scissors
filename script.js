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
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
  else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    let playerDecision = prompt("What will your move be?");
    let result = playRound(playerDecision, getComputerChoice());
    console.log(result);
    if (result.slice(0, 7) === "You Win") {
      playerScore++;
    }
    else if (result.slice(0, 8) === "You Lose") {
      computerScore++;
    }
  }

  if (playerScore === 5) {
    console.log("You win the game! Congratulations!");
  }
  else {
    console.log("You lost the game. Nice try!");
  }
}