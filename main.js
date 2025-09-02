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


// ========= get Human Choice ======

function getHumanChoice(){
    let humanChoice= prompt('choose rock, paper, scissors');
    if(humanChoice===null || humanChoice===''){
        return null
    }
    let choice=humanChoice.toLowerCase();
    
    if(choice==='rock' || choice==='paper' ||choice==='scissors'){
        return choice
    }
    else{
      return  getHumanChoice()
    }

}





function playGame(){

    // =============== declare score variables ============

    let humanScore = 0;
    let computerScore = 0; 

    // ========= the logic to play a single round =========


    function playRound(humanChoice,computerChoice){
        
        if(humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'scissors' && computerChoice === 'paper')
        {

            humanScore += 1;
            console.log(`you won ${humanChoice} beats ${computerChoice}`);
         
        }

        else if(humanChoice === 'rock' && computerChoice === 'paper' ||
                humanChoice === 'scissors' && computerChoice === 'rock' ||
                humanChoice === 'paper' && computerChoice === 'scissors')
        {

            computerScore += 1;
            console.log(`you lose ${computerChoice} beats ${humanChoice}`);
            
        }

        else if(humanChoice===computerChoice){
            computerScore +=0; humanScore += 0;
            console.log(`it is a tie
            Your choice: ${humanChoice}  
            computer choice: ${computerChoice} `);
        }
        else{
            return null
        }
        
        console.log(`
        Your score: ${humanScore}
        computer score: ${computerScore} `);
    }

    for(let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
   if(humanScore > computerScore){
     console.log( `Congratulation! you are the winner! 
      human score: ${humanScore}
      Computer score: ${computerScore}`)
   }
   else if(humanScore < computerScore){
     console.log(`I'm sorry! you lost! better luck next time! 
      human score: ${humanScore}
      Computer score: ${computerScore}`);
   }
   else{
     console.log(`Wow! It's a tie!
      human score: ${humanScore}
      Computer score: ${computerScore}`); 
   }

}


playGame()


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
    9. create function named playGame.
    10. move the the playRound function and the score variables.
    11. use loops to play the game five time.
    12. use conditionals to announce the winner.

*/