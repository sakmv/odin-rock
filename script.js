let pscore = 0
let cscore = 0
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
function compare(cmp,plr){
    if(plr=='SCISSOR'){
        if(cmp=='PAPER'){
            pscore++
            console.log('PLAYER WON')
        }
        if(cmp=='ROCK'){
            cscore++
            console.log('COMP WON')
        }
    }
    else if(plr=='ROCK'){
        if(cmp=='PAPER'){
            cscore++
            console.log('COMP WON')
        }
        if(cmp=='SCISSOR'){
            pscore++
            console.log('PLAYER WON')
        }
    }
    else if(plr=='PAPER'){
        if(cmp=='ROCK'){
            pscore++
            console.log('PLAYER WON')
        }
        if(cmp=='SCISSOR'){
            cscore++
            console.log('COMP WON')
        }
    }
    else{
        console.log("INVALID CHOICE-->NEGATIVE POINT")
        pscore--
    }
    if(plr==cmp){
        console.log('ITS A DRAW')
    }
}
for(let i=0;i<5;i++){
    console.log("ROUND ",i+1,"BEGIN")
    let p = prompt("Enter your choice: ROCK PAPER SCISSOR").toUpperCase()
    c=compChoice()
    console.log('COMP CHOICE',c)
    console.log('YOUR CHOICE',p) 
    compare(c,p)
}
console.log("PLayer score :",pscore,"\nComp score: ",cscore)
if(pscore>cscore){
    console.log("Player Won!!")
}
else if(cscore>pscore){
    console.log("Computer Won!!")
}
else{
    console.log("It's A DRAW!!")
}