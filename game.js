var plays = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  return plays[Math.floor(Math.random() * 3)];
}

const computerSelection = computerPlay();
const playerSelection = prompt().toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors'){
        return "You win! Rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return "You win! Paper beats rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return "You lose! Rock beats scissors!";
    } else if  (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return "You win! Scissors beats paper!";
    } else {
        return "Draw";
    }
}

console.log(playRound(playerSelection, computerSelection));