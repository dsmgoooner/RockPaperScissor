function getComputerChoice(){
    const randomNumber = (Math.floor(Math.random() * 2));
    if(randomNumber === 0){
        return 'rock';
    }
    else if(randomNumber === 1){
        return 'paper';
    }
    else if(randomNumber === 2){
        return 'scissors';
    }
}

function playRound(playerSelection , computerSelection){
    
   if (playerSelection === computerSelection){
    return 'Game is a Tie';
   }
   else if(playerSelection === 'rock' & computerSelection === 'paper')
   {
    return 'You lose!Paper beats rock';
   }
   else if(playerSelection === 'rock' & computerSelection === 'scissor')
   {
    return 'You win!Rock beats scissor';
   }
   else if(playerSelection === 'scissor' & computerSelection === 'paper')
   {
    return 'You win!Scissor beats paper';
   }
   else if(playerSelection === 'scissor' & computerSelection === 'rock')
   {
    return 'You lose!Rock beats Scissor';
   }
   else if(playerSelection === 'paper' & computerSelection === 'rock')
   {
    return 'You win!Paper beats rock';
   }
   else if(playerSelection === 'paper' & computerSelection === 'scissor')
   {
    return 'You win!Paper beats scissor';
   }
}

function game(){

    for( let i = 0; i < 5 ; i++ ){
        const playerSelection = prompt("KAI BAI BO");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection , computerSelection));        
    }
}

game();
