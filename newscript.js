let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScore= document.querySelector("#user-score");
const compScore= document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner =(userwin, userchoice, compChoice)=>{
    if (userwin){
        user++;
        userScore.innerText = user;
        console.log("You Win!");
        msg.innerText =  `You Win! ${userchoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
           msg.style.color = "white";
    } else{
        comp++;
        compScore.innerText = comp;
        msg.innerText = `You Loss! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
         msg.style.color = "white";
    }
};
    const drawGame = ()=>{
 
    msg.innerText = "Draw the Game! Play again";
      msg.style.backgroundColor = "Yellow";
        msg.style.color = "black";
}
const playGame = (userchoice) => {
    console.log("user choice", userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userchoice=== compChoice) {
        //draw
      drawGame();  
    } else{
        let userwin =true;
        if(userchoice === "rock"){
            //sicssor ,, paper
            userwin = compChoice=== "paper"? false : true;
        }
        else if( userchoice==="paper"){
            //rock,,, scissor
            userwin=compChoice=== "scissors"? false : true;
        }
        else  {
            //rock,,,paper
            userwin=compChoice=== "rock"? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
 
