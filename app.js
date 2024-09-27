let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw.Play again";
      msg.style.backgroundColor = "black";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
         msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
           msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice=",userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
             userWin = compChoice === "paper" ? false:true; 
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        } else {
            userwin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})