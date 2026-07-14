console.log("hello worlds");

let humanScore = 0;
let computerScore = 0;

// 1-> Dino, 2-> Road, 3-> Gun
let choices = ['Dino 🦖', 'Road 🛣️', 'Gun 🔫'];

let humanChoice = 1;
let pc = 1;


// 1 vs 2 -> 1 wins
// 2 vs 3 -> 2 wins
// 3 vs 1 -> 3 wins
function getComputerChoice(){
    let num = Math.random();

    if(num < 0.33){
        return 1;
    }
    else if(num < 0.66){
        return 2;
    }
    else{
        return 3;
    }
}

// 0-> pc, 1-> human, 2-> draw
function giveResult(val){
    const doc = document.getElementsByClassName("result-text")[0];
    const summary_doc = document.getElementsByClassName("summary-text")[0];
    if(val == 0){
        doc.innerHTML = "OOFF, PC WON :(";
    }
    else if(val == 1){
        doc.innerHTML = "YAYYY, You won :D";
    }
    else if(val == 2){
        doc.innerHTML = "DRAWWWW :/";
    }

    summary_doc.innerHTML = `-> You chose ${choices[humanChoice-1]} <br>-> Computer chose ${choices[pc-1]}`

}

function updateWinner(humanwin){
    if(humanwin){
        document.getElementsByClassName("score-box-human")[0].innerHTML = `Human Score: ${humanScore}`;
        giveResult(1);
    }
    else{
        document.getElementsByClassName("score-box-computer")[0].innerHTML = `Computer Score: ${computerScore}`;
        giveResult(0);

    }    
}

function GameResult(human){
    pc = getComputerChoice();
    humanChoice = human;
    let hwin = false;
    if(human == pc){
        giveResult(2);
        return;
    }
    else if(human == 1 && pc == 2){
        humanScore++;
        hwin = true;
    }
    else if(human == 2 && pc == 3){
        humanScore++;
        hwin = true;
    }
    else if(human == 3 && pc == 1){
        humanScore++;
        hwin = true;
    }
    else if(pc == 1 && human == 2){
        computerScore++;
    }
    else if(pc == 2 && human == 3){
        computerScore++;
    }
    else{
        computerScore++;
    } 

    updateWinner(hwin);
}