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







/* 1. Create a new function named getComputerChoice
   2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
   3. 
*/