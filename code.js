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
    (humanChoice ==="paper" && computerChoice==="rock")){
    return "Player wins";}

  else {
    return "Computer wins";}
}
