//   ====== getComputerChoice =======

function getComputerChoice(){
    let RockPaperScissors = "rock,paper,scissors"
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber === 0){
    console.log(RockPaperScissors.slice(0,4))
    }
    else if(randomNumber === 1){
    console.log(RockPaperScissors.slice(5,10))
    }
    else{
    console.log(RockPaperScissors.slice(11))
    }
}

getComputerChoice()

// ========= getComputerChoice ======

function getHumanChoice() {
    let choice = prompt('choose rock, paper, or scissors');
    console.log(choice);
}

getHumanChoice()

// =============== declare score variables ============

let humanScore = 0;
let computerScore = 0; 
  // ========= the logic to play a single round =========

  function playRound(humanChoice,computerChoice) {

  };

  playRound()





/*
    ===== pseudocode =======

    1. Create a new function named getComputerChoice
    2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    3. Create a new function named getHumanChoice.
    4. Write the code so that getHumanChoice will return one of the valid choices.
    5. Create a new function named playRound.
*/