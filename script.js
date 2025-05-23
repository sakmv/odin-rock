//computer choice code
let computerChoice = 'None'
function getComputerChoice(){
const arr = ['rock','paper','scissor']
let i = Math.floor(Math.random()*3)
computerChoice = arr[i]
}
//player choice code
let x=1
let p=0
let c=0
let playerChoice = 'None'
function getPlayerChoice(){
const rock = document.querySelector(".rock")
rock.addEventListener("click",()=>{playerChoice='rock'
    highlightPlayerChoice()
    getComputerChoice();
    highlightComputerChoice()
    console.log('YOUR CHOICE: ',playerChoice,'\nCOMPUTER CHOICE:',computerChoice)
    x++
    compare()
    round.textContent=`Round: ${x}`
    if(c==5||p==5){
        console.log("game end")
        reset()

    }
})
const paper = document.querySelector(".paper")
paper.addEventListener("click",()=>{playerChoice='paper'
    highlightPlayerChoice()
    getComputerChoice();
    x++
    highlightComputerChoice()
    console.log('YOUR CHOICE: ',playerChoice,'\nCOMPUTER CHOICE:',computerChoice)
    compare()
    round.textContent=`Round: ${x}`
    if(c==5||p==5){
        console.log("game end")
        reset()
    }
})
const scissor = document.querySelector(".scissor")
scissor.addEventListener("click",()=>{playerChoice='scissor'
    highlightPlayerChoice()
    getComputerChoice()
    x++
    highlightComputerChoice()
    console.log('YOUR CHOICE: ',playerChoice,'\nCOMPUTER CHOICE:',computerChoice)
    compare()
    round.textContent=`Round: ${x}`
    if(c==5||p==5){
        console.log("game end")
        reset()
    }
})
}


//comparison code
function compare(){
    const wins = { rock: 'scissor', scissor: 'paper', paper: 'rock' };
    
    if (computerChoice === playerChoice) {
        console.log('ITS A DRAW');
    } else if (wins[playerChoice] === computerChoice) {
        console.log('PLAYER WINS');
        p++;
        pscore.textContent = p;
    } else {
        console.log('COMPUTER WON');
        c++;
        cscore.textContent = c;
    }
}

//playing the game

getPlayerChoice()
const start = document.querySelector(".startbtn")
const disappear = document.querySelector(".menu")
const appear = document.querySelector(".start")
start.addEventListener("click",()=>{
    console.log("button clicked")
     disappear.style.display = "none"
     appear.style.display="block"

})
const round = document.querySelector("#round")
const pscore = document.querySelector('#pscore')
const cscore = document.querySelector('#cscore')
function highlightComputerChoice() {
    // Remove old highlights
    document.querySelectorAll(".btns button").forEach(btn => {
        btn.classList.remove("highlight");
    });

    // Add highlight to the one the computer picked
    const button = document.querySelector(`.${computerChoice}`);
    button.classList.add("highlight");
}
function highlightPlayerChoice() {
    // Remove old highlights
    document.querySelectorAll(".btns button").forEach(btn => {
        btn.classList.remove("phighlight");
    });

    // Add highlight to the one the computer picked
    const button = document.querySelector(`.${playerChoice}`);
    button.classList.add("phighlight");
}
function reset(){
    const loss = document.querySelector(".loss")
    const end = document.querySelector(".start")
    const win = document.querySelector(".win")
    end.style.display="none"
    if(p>c){
        win.style.display="flex"
    
    }
    if(c>p){
        loss.style.display="flex"
    }
     document.querySelectorAll('.res').forEach(btn=>{btn.addEventListener("click",()=>{disappear.style.display="flex"
        loss.style.display="none"
        win.style.display="none"
         
    })})
    x=1
    c=0
    p=0
    pscore.textContent = p;
    cscore.textContent = c;
    round.textContent=`Round: ${x}`
     document.querySelectorAll(".btns button").forEach(btn => {
        btn.classList.remove("phighlight");
        btn.classList.remove("highlight");}
     )
}

