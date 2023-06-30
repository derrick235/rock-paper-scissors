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