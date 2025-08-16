//   ====== getComputerChoice =======

function getComputerChoice(){
    let RockPaperScissors = 'rock,paper,scissors';
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

// getComputerChoice()

// ========= getComputerChoice ======

function getHumanChoice() {
    let choice = prompt('choose rock, paper, or scissors');
    choice = choice.toLowerCase();
    console.log(choice);
}

// getHumanChoice()

// =============== declare score variables ============

let humanScore = 0;
let computerScore = 0; 
  // ========= the logic to play a single round =========

  function playRound(humanChoice,computerChoice) {
    let win = 'you win!';
    let lose = 'you lose!'
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log(`${lose} paper beats rock.`);
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`${win} paper beats rock`);
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`${win} rock beats scissors`);
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log(`${lose} rock beats scissors`);
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`${win} scissors beats paper`);
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log(`${lose} scissors beats paper`);
    }
    else{
        console.log('it is a tie');
    }
  };
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice()
  playRound(humanSelection,computerSelection)





/*
    ===== pseudocode =======

    1. Create a new function named getComputerChoice
    2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    3. Create a new function named getHumanChoice.
    4. Write the code so that getHumanChoice will return one of the valid choices.
    5. Create a new function named playRound.
*/