const choices = ["rock", "paper", "scissors"]; 


let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");

let playerScore = 0;
let computerScore = 0;
let result = "";

function playGame(playerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        if(playerScore === 5 || computerScore === 5){
            if(playerScore > computerScore){
                resultDisplay.textContent = "YOU WIN!";
                alert("You won! Game end.");
    
            }
            else{
                resultDisplay.textContent = "YOU LOSE!";
                alert("You lost! Game end.");
    
            };
        }
    
        return;
    }

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log('playerChoice', playerChoice);
    if(playerChoice === computerChoice){
        result = "ITS A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === choices[2]) ? "YOU WIN!" : "YOU LOSE!";
                break;                
            case "paper":
                result = (computerChoice === choices[0]) ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === choices[1]) ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    console.log('result', result);
    playerDisplay.textContent = `YOU: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    if(result === "YOU WIN!"){
        playerScore++;
    }
    else if(result === "YOU LOSE!"){
        computerScore++;
    }
    playerScoreDisplay.textContent = `PLAYER: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER: ${computerScore}`;

}