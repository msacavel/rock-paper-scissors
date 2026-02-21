console.log("JavaScript loaded!");

function getComputerChoice(){
  const random = Math.random()
  if (random < 1/3) return "rock";
  else if (random < 2/3) return "paper";
  else  return "scissors";
}

console.log(getComputerChoice()); //Test

function getHumanChoice(){
  const playerChoice = prompt("Rock, Paper, Scissors:");
  return playerChoice
}

console.log(getHumanChoice()); //Test

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase(); //case sensitive

  if (humanChoice===computerChoice){
    return "Its a Tie!!";
  }

  else if (
    (humanChoice ==="rock" && computerChoice==="scissors") ||
    (humanChoice ==="scissors" && computerChoice==="paper") ||
    (humanChoice ==="paper" && computerChoice==="rock"))
    {humanScore++;
    return "Player wins";}

  else {
    computerScore++;
    return "Computer wins";}
}

function playGame(){
  humanScore = 0;
  computerScore = 0;


for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  const result = playRound(humanSelection, computerSelection);
  console.log(result);

  console.log("Score -> Human:", humanScore, "Computer:", computerScore);
  console.log("----------------------");
}

  console.log("Final Score:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("Game is a tie!");
  }
}

playGame();