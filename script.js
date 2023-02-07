const buttons = document.querySelectorAll(".button")
const userscore = document.querySelector("[data-player-score]")
const compscore = document.querySelector("[data-computer-score]")
const disresult = document.getElementById("resultcontainer")
const againbutton = document.querySelector(".again")


let playerchoice;
let playerscore = 0;
let computerscore = 0;
let round = 0;


buttons.forEach( button => {
    button.addEventListener("click", () => {
        playerchoice = button.getAttribute("data-choice")
        round += 1;
        playround(playerchoice, computerchoice());
        result();
    })
})


let computerchoice = () => {
    let value = ["rock","paper", "scissors"]
    return value[Math.floor(Math.random()* value.length)]
    
}


let incrementscore = (updatescore) => {
    updatescore.innerText = parseInt(updatescore.innerText) + 1;
}


let playround = (playerchoice, computerchoice) => {
    if(playerchoice === computerchoice){
        disresult.textContent = `That's a tie`;
    }else if(playerchoice === 'rock' && computerchoice === 'scissors' ||
    playerchoice === 'paper' && computerchoice === 'rock' ||
    playerchoice === 'scissors' && computerchoice === 'paper'){
        incrementscore(userscore)
        playerscore+=1;
        disresult.textContent = `You've Won! Computer chose: ${computerchoice}`
    }else{
        incrementscore(compscore)
        computerscore+=1;
        textContent = `You've Lost! Computer chose: ${computerchoice}`
    }
}


function result(){
    if(playerscore === 5 || computerscore === 5){
        if (playerscore == 5){
            disresult.textContent = `You've Won, Played like a champ!`
            againbutton.style.visibility = 'visible';
            reset();
        } else if (computerscore == 5) {
            disresult.textContent = `Nice Try, Computer got you this time. Try Again!`
            againbutton.style.visibility = 'visible';
            reset();
        }
}
}


let reset = () => {
    againbutton.addEventListener("click", () =>{
    playerscore = 0;
    userscore.textContent = playerscore;
    computerscore = 0;
    compscore.textContent = computerscore;
    disresult.textContent = "";
    againbutton.style.visibility = 'hidden';
    })
}