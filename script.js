let pscore = 0
let cscore = 0
let p = prompt("Enter your choice: ROCK PAPER SCISSOR")
let c = 0
function compChoice(){
    let c = Math.floor(Math.random()*3+1)
    if(c==1){
        c='SCISSOR'
    }
    else if(c==2){

        c='ROCK'
    }
    else if(c==3){
        c='PAPER'
    }
    return c
}
c=compChoice()
console.log(c)
console.log(p) 