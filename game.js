var plays = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  return plays[Math.floor(Math.random() * 3)];
}

const computerSelection = computerPlay();

let output;
let computerScore = 0; 
let playerScore = 0; 

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        output = "You lose this round! Paper beats rock!";
        computerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors'){
        output = "You win this round! Rock beats scissors!";
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        output = "You lose this round! Scissors beats paper!";
        computerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        output ="You win this round! Paper beats rock!";
        playerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        output = "You lose this round! Rock beats scissors!";
        computerScore += 1;
    } else if  (playerSelection === 'scissors' && computerSelection === 'Paper') {
        output = "You win this round! Scissors beats paper!";
        playerScore += 1;
    } else {
        output = "Draw";
    }
    return output;
}

function checkScores(playerScore, computerScore){
    if (computerScore >= 5){
        console.log(`You lose the game!`);
    } else if (playerScore >= 5) {
        console.log(`You win the game!`);
    }
} 

function game(){
    do {
        const playerSelection = prompt().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    
        console.log(`You: ${playerScore}, Computer: ${computerScore}`);
    } while (computerScore < 5 && playerScore < 5)
    
    checkScores(playerScore, computerScore);
}

game();