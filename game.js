var plays = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  return plays[Math.floor(Math.random() * 3)];
}

const computerSelection = computerPlay();
let playerSelection;
let output;
let computerScore = 0; 
let playerScore = 0; 
let compScore = document.querySelector('#computerScore');
let playScore = document.querySelector('#playerScore');
let draw = document.querySelector('#draw');
let round = 1;
let roundPlay = document.querySelector('.round');
let winner = document.querySelector('#winner');
let roundResult = document.querySelector('#result');

let weapons = document.querySelectorAll('.weapons');
 weapons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
    });
    button.addEventListener('click', game);
});

function playRound(playerSelection, computerSelection){
    roundPlay.textContent = `Round ${round}`; 

    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        output = "You lose this round! Paper beats rock!";
        computerScore += 1;
        compScore.textContent = `Computer score: ${computerScore}`
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors'){
        output = "You win this round! Rock beats scissors!";
        playerScore += 1;
        playScore.textContent = `Player score: ${playerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        output = "You lose this round! Scissors beats paper!";
        computerScore += 1;
        compScore.textContent = `Computer score: ${computerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        output ="You win this round! Paper beats rock!";
        playerScore += 1;
        playScore.textContent = `Player score: ${playerScore}`
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        output = "You lose this round! Rock beats scissors!";
        computerScore += 1;
        compScore.textContent = `Computer score: ${computerScore}`
    } else if  (playerSelection === 'scissors' && computerSelection === 'Paper') {
        output = "You win this round! Scissors beats paper!";
        playerScore += 1;
        playScore.textContent = `Player score: ${playerScore}`
    } else {
        output = "Draw";
        
    }
    round += 1;
    return output;
}

function checkScores(playerScore, computerScore){
    if (computerScore >= 5){
        roundResult.textContent = `You lose the game!`;
    } else if (playerScore >= 5) {
        roundResult.textContent = `You win the game!`;
    }
} 


  

function game(){
    
  if (computerScore < 5 && playerScore < 5){
    roundResult.textContent = playRound(playerSelection, computerSelection);
        
    console.log(computerSelection)
    console.log(playerSelection)
  }
    
        
    

    
    checkScores(playerScore, computerScore);
    
}

