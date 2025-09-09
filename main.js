const body=document.querySelector('body')
const hScore=document.querySelector('.hScore');
const cScore=document.querySelector('.cScore');
const winner=document.querySelector('.winnerAnnounce')
const buttons=document.querySelectorAll('button');
const humanChoice=document.querySelector('.humanChoice')
const computerChoice=document.querySelector('.computerChoice')

body.addEventListener('click',()=>{
   return body.style.backgroundColor= `rgb(${random(255)},${random(255)},${random(255)})`
})

function random(num){
    return Math.floor(Math.random() *(num +1));
}
//   ====== get Computer Choice =======

function getComputerChoice(){
    let choice='Rock Paper Scissors';
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
let choice=getComputerChoice();

// ========= get Human Choice ======
for(const button of buttons){
    button.addEventListener('click',playRound);
}

    // =============== declare score variables ============

    let humanScore = 0;
    let computerScore = 0; 
    
    // ========= the logic to play a single round =========

    function playRound(e){
        if(e.target.textContent === 'Paper' && choice === 'Rock' ||
            e.target.textContent === 'Rock' && choice === 'Scissors' ||
            e.target.textContent === 'Scissors' && choice === 'Paper')
        {
            humanChoice.textContent=`${e.target.previousElementSibling.textContent}`
            if(choice==='Rock'){
                computerChoice.textContent=`${buttons[0].previousElementSibling.textContent}`
            }
            else if(choice==='Paper'){
                 computerChoice.textContent=`${buttons[1].previousElementSibling.textContent}`
            }
            else{
                 computerChoice.textContent=`${buttons[2].previousElementSibling.textContent}`
            }
            hScore.textContent += 1;
            winner.textContent=`you won ${e.target.textContent} beats ${choice}`;
        }

        else if(e.target.textContent === 'Rock' && choice === 'Paper' ||
                e.target.textContent === 'Scissors' && choice === 'Rock' ||
                e.target.textContent === 'Paper' && choice === 'Scissors')
        {console.log();
            humanChoice.textContent=`${e.target.previousElementSibling.textContent}`
            if(choice==='Rock'){
                computerChoice.textContent=`${buttons[0].previousElementSibling.textContent}`
            }
            else if(choice==='Paper'){
                 computerChoice.textContent=`${buttons[1].previousElementSibling.textContent}`
            }
            else{
                 computerChoice.textContent=`${buttons[2].previousElementSibling.textContent}`
            }
            cScore.textContent +=1;
            winner.textContent=`you lose ${choice} beats ${ e.target.textContent}`;
            
        }

        else if(e.target.textContent===choice){
            humanChoice.textContent=`${e.target.previousElementSibling.textContent}`
            computerChoice.textContent=`${e.target.previousElementSibling.textContent}`
            winner.textContent=`it is a tie
            Your choice: ${e.target.textContent}  
            computer choice: ${choice} `;
        }
        
        
    }





 
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