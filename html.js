let userScore=0;
let comp=0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const choiceId= choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playgame(choiceId);
    })
});

const gameWin= (userWin,choiceId,compchoice)=>{
    if (userWin){
        userScore++;
        userscore.innerText=userScore
        console.log("you win");
        msg.innerText=`You win. Your ${choiceId} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        comp++;
        compscore.innerText=comp;
        console.log("you lose");
        msg.innerText=`You lose.${compchoice} beats your  ${choiceId}`;
        msg.style.backgroundColor="red";


    }
}

const drawGame=() =>{
    console.log("draw game");
    msg.innerText=`its a draw.play again`;

}
const playgame=(choiceId)=>{
    console.log("user-choice",choiceId);
    let compchoice= genCompChoice();
    console.log("Comp-choice",compchoice);
    if (choiceId== compchoice){
        drawGame();
   }
   else{
    userWin= true;
    if (choiceId="papers"){
        userWin= compchoice=== "scissors" ? false : true;
    }
    else if(choiceId="scissors"){
        userWin= compchoice==="paper"? true :false;
    }
    else{
        userWin = compchoice==="scissors" ?true :false;
    }
    gameWin(userWin,choiceId,compchoice);
   }
}

const genCompChoice=() =>{
    let options=["rock","paper","scissors"]
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
