console.log("Game log");

let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let scorelog=document.querySelector("#scorelog");
let btn=document.querySelector(".btn");
let playerwin=0;
let cuwin=0;
let nowin=0;
let counter=0;

let cuplay=document.querySelector("#cuplay");


let scorebox=document.querySelector("#scorebox");
scorebox.textContent=("player: "+playerwin+" computer: "+cuwin+" Draw: "+nowin);

let scoremsg=document.createElement("div");
scorelog.appendChild(scoremsg);

rock.addEventListener("click", playerRock);
paper.addEventListener("click", playerPaper);
scissors.addEventListener("click", playerScissors);

function playerRock(){
        console.log("you played: Rock");
        gamePlay("rock");                
};

function playerPaper(){
        console.log("you played: Paper");
        gamePlay("paper");  
};

function playerScissors(){
        console.log("you played: Scissors");
        gamePlay("scissors");
};


function gamePlay(play){
    let selections=["rock", "paper", "scissors"];
    let computerPlay=selections[Math.floor(Math.random()*selections.length)];
    console.log("computer play is ", computerPlay);
    let message="";

    if(play=="rock"){
        if (computerPlay=="paper") {message="you lose, paper beats rock"; console.log("result is ",message); cuwin++;}
        else if (computerPlay=="rock") {message="tie!"; console.log("result is ",message); nowin++;}
        else {message="you win!, rock beats scissors"; console.log("result is ",message); playerwin++;}
        }
    else if(play=="paper"){
        if (computerPlay=="scissors") {message="you lose, scissors beats paper"; console.log("result is ",message); cuwin++;}
        else if (computerPlay=="paper") {message="tie!"; console.log("result is ",message); nowin++;}
        else {message="you win!, paper beats rock"; console.log("result is ",message); playerwin++;}
        }
    else if (play=="scissors"){
        if (computerPlay=="rock") {message="you lose, rock beats scissors"; console.log("result is ",message); cuwin++;}
        else if (computerPlay=="scissors") {message="tie!"; console.log("result is ",message); nowin++;}
        else {message="you win!, scissors beats paper"; console.log("result is ",message); playerwin++;}
        }
    else {console.log("play has no value")} 
    scorebox.textContent=("player: "+playerwin+"       computer: "+cuwin+"     Draw: "+nowin);
    console.log("your winnig times: ",playerwin);
    counter++;
    cuplay.textContent="Computer play: "+computerPlay;
    scorelog.textContent=`round: ${counter} >> ${message}`;
    if (counter==5){endGame()};  
}

function endGame(){
    if(playerwin>cuwin){alert("You won!"+playerwin+" : "+cuwin);}
    else if (playerwin<cuwin) {alert ("you lost "+playerwin+" : "+cuwin);}
    else {alert("It's a draw! "+playerwin+" : "+cuwin)}
    playerwin=cuwin=nowin=counter=0;
    
    scorelog.textContent="";
    cuplay.textContent="";
    console.clear();
    console.log("Game log");
    scorebox.textContent=("player: "+playerwin+"       computer: "+cuwin+"     Draw: "+nowin);
}