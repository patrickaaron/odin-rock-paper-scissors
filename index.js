let choices = ["Rock", "Paper", "Scissors" ];

function game() {
    let playerChoice = "";
    let scoreA = 0;
    let scoreB = 0;

    for(let i = 1; i <= 5; i++) {
        playerChoice = window.prompt("Round " + i);
        let str = playRound(playerChoice, getComputerChoice());
        console.log(str);

        if(str.includes("Win")) {
            scoreA += 1;
        }
        else if(str.includes("Lose")) {
            scoreB += 1;
        }
    }
    
    if(scoreA > scoreB) {
        alert("Congratulations You won!");
    }
    else if(scoreA < scoreB) {
        alert("You've lost this game!. Try again!")
    }
    else {
        alert("It's a Tie!");
    }
}

function getComputerChoice() {
    return choices[~~(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if(playerChoice == computerChoice) {
        return "It's a Tie!";
    }

    switch(playerChoice) {
        case "paper": 
            if(computerChoice == "rock") {
                return "You Win! Paper beats Rock";
            }
            else {
                return "You Lose! Scissors beat Paper";
            }
        case "scissors":
            if(computerChoice == "paper") {
                return "You Win! Scissors beat Paper";
            }
            else {
                return "You Lose! Rock beats Scissors";
            }
        case "rock":
            if(computerChoice == "scissors") {
                return "You Win! Rock beat Scissors";
            }
            else {
                return "You Lose! Paper beats Rock";
            }
    }
}
game();