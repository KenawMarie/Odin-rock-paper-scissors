 const body=document.querySelector('body')
 const container=document.querySelector('.container')
const hScore=document.querySelector('.hScore');
const cScore=document.querySelector('.cScore');
const winner=document.querySelector('.winnerAnnounce')
const buttons=document.querySelectorAll('button');
const humanChoice=document.querySelector('.humanChoice')
const computerChoice=document.querySelector('.computerChoice')
const score=document.querySelector('.score')
const rps=document.querySelector('.rps')
const h1=document.querySelector('h1')

body.addEventListener('click',()=>{
    return body.style.backgroundColor= `rgb(${random(255)},${random(255)},${random(255)})`
})

function random(num){
    return Math.floor(Math.random() *(num +1));
}
//   ====== get Computer Choice =======


// ========= get Human Choice ======

// =============== declare score variables ============

let humanScore = 0;
let computerScore = 0; 


for(const button of buttons){
    button.addEventListener('click',playRound);
}

// ========= the logic to play a single round =========

function playRound(e){
    
   
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
            else if(choice==='Scissors'){
                 computerChoice.textContent=`${buttons[2].previousElementSibling.textContent}`
            }
            humanScore +=1
            hScore.textContent = humanScore;
            container.style.backgroundColor='limegreen'
            winner.textContent=`you won ${e.target.textContent} beats ${choice}`;
        }
        
        else if(e.target.textContent === 'Rock' && choice === 'Paper' ||
            e.target.textContent === 'Scissors' && choice === 'Rock' ||
            e.target.textContent === 'Paper' && choice === 'Scissors')
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
            computerScore +=1
            cScore.textContent =computerScore;
            container.style.backgroundColor='#8B0000'
            winner.textContent=`you lose ${choice} beats ${ e.target.textContent}`;
            
        }
        
        else if(e.target.textContent===choice){
            humanChoice.textContent=`${e.target.previousElementSibling.textContent}`
            computerChoice.textContent=`${e.target.previousElementSibling.textContent}`
            container.style.backgroundColor='skyblue'
            winner.textContent=`it is a tie
            Your choice: ${e.target.textContent}  
            computer choice: ${choice} `;
        }
        
        if(humanScore===5 || computerScore===5){
            for(const button of buttons){
                button.removeEventListener('click',playRound);
            }
            const para=document.createElement('p');
            if(humanScore>computerScore){
                
                container.textContent='' ;
                container.style.backgroundColor='gold'
                para.textContent='🎉🎉🎉🎉🎉 🥳🥳🥳🥳 congratulation !  you are the winner ! 🎉🎉'
                para.style.fontSize='3em'
                para.style.color='#000080'
                container.appendChild(para)
            }
            else if(humanScore<computerScore){
                
                container.textContent=''
                container.style.backgroundColor='#add8e6'
                para.textContent=' 😔😔😔😔😔 Sorry ! you lost! better luck next time!'
                para.style.color='#808080'
                para.style.fontSize='3em'
                container.appendChild(para)
            }
            else{
                console.log('it is draw');
                
            }
            
            const div=document.createElement('div');
            div.textContent='do you wanna restart the game'
            div.style.fontSize='1.5em'
            div.className='pop-up'

            const divBtn=document.createElement('div')
            divBtn.className='divBtn'

            const okBtn=document.createElement('button')
            okBtn.className='btns'
            okBtn.textContent='Ok'

            const cancelBtn=document.createElement('button')
            cancelBtn.className='btns'
            cancelBtn.textContent='Cancel'
            divBtn.appendChild(okBtn)
            divBtn.appendChild(cancelBtn)
            div.appendChild(divBtn)
            container.appendChild(div)
            okBtn.addEventListener('click',(e)=>{
                if(e.target.textContent==='Ok'){
                location.reload()
                };
            })
            cancelBtn.addEventListener('click',(e)=>{
                if(e.target.textContent==='Cancel'){
                    container.textContent=''
                    container.textContent='I feel sorry to see you go! 😔'
                    container.style.fontSize='2em'
                };
            })
            
        }
        
        
    }
    if(humanScore===5 || computerScore===5){
        console.log(humanScore);
        console.log(computerScore);
        winner.textContent= confirm('do you wanna restart the game')
        if(confirm){
            
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