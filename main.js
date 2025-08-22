//   ====== get Computer Choice =======

function getComputerChoice(){
    let choice='rock paper scissors';
    let randomNumber= Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return choice.slice(0,4)
    }
    else if(randomNumber === 1){
        return choice.slice(5,10)
    }
    else{
        return choice.slice(11)
    }

}


// getComputerChoice()

// ========= get Human Choice ======

function getHumanChoice(){
    let choice= prompt('choose rock, paper, scissors');
    let loweredCase= choice.toLowerCase()
    return loweredCase
}

// getHumanChoice()



// =============== declare score variables ============

let humanScore = 0;
let computerScore = 0; 

  // ========= the logic to play a single round =========

 let humanSelection=getHumanChoice();
 let computerSelection=getComputerChoice(); 

function playRound(humanChoice,computerChoice){
    
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1;
        return `you win Rock beats Scissors. human score: ${humanScore}`;
        
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore += 1;
        return `you lose! paper beats rock Computer score: ${computerScore}`;
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore += 1;
        return `you win! rock beats scissors. human score: ${humanScore}`;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore += 1;
        return `you lose! rock beats scissors Computer score: ${computerScore}`;
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore += 1;
        return `you lose! scissors beats paper Computer score: ${computerScore}`;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore += 1;
        return `you win! scissors beats paper Computer score: ${computerScore}`;
    }
    else if(humanChoice === computerChoice){
        return 'It is a tie';
    }
    
    
}

  console.log(playRound(humanSelection,computerSelection));





/*
    ===== pseudocode =======

    1. Create a new function named getComputerChoice
    2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    3. Create a new function named getHumanChoice.
    4. Write the code so that getHumanChoice will return one of the valid choices.
    5. Create a new function named playRound.
    6. make your input  case insensitive.
    7. Write the code for your playRound function to console.log a string value representing the round winner.
    8. Increment the humanScore or computerScore variable based on the round winner.
*/