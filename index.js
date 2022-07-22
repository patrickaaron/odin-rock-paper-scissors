let choices = ["Rock", "Paper", "Scissors"];

let roundMsg = "";
let playerStatus = "";
let computerStatus = "";

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

function getComputerChoice() {
    return choices[~~(Math.random() * 3)];
}

function playRound(e) {
    let playerChoice = e.target.dataset.id;
    let computerChoice = getComputerChoice();

    if(playerChoice == computerChoice) {
        roundMsg = "Tie";
        playerStatus = "➖";
        computerStatus = "➖";
    }

    if(playerChoice === "Paper" && computerChoice === "Rock" ||
       playerChoice === "Rock" && computerChoice === "Scissors" ||
       playerChoice === "Scissors" && computerChoice === "Paper")
    {
        playerScore += 1;
        roundMsg = `${playerChoice} beats ${computerChoice}`;
        playerStatus = "✔️";
        computerStatus = "❌";
    }
    if(playerChoice === "Rock" && computerChoice === "Paper" ||
       playerChoice === "Scissors" && computerChoice === "Rock" ||
       playerChoice === "Paper" && computerChoice === "Scissors")
    {
        computerScore += 1;
        roundMsg = `${computerChoice} beats ${playerChoice}`;
        playerStatus = "❌";
        computerStatus = "✔️";
    }
    render();
}

// function checkScore() {
//     if(playerScore == 5 || computerScore == 5) {
//         return;
//     }
// }

function removeTransition(e) {
    if(e.propertyName !== "text-shadow") return; 
    this.classList.remove("neon");
}

function render() {
    // Scoreboard 
    const scoreCount = document.querySelectorAll(".score-count > div");

    scoreCount.forEach((score) => {
        if(score.id === "playerScore" && playerStatus === "✔️") {
            score.innerText = playerScore;
            score.classList.add("neon");
            score.addEventListener("transitionend", removeTransition);
        }
        else if(score.id === "computerScore" && computerStatus === "✔️") {
            score.innerText = computerScore;
            score.classList.add("neon");
            score.addEventListener("transitionend", removeTransition);
        }
    });

    // Score info
    const score_results = document.getElementsByClassName("score-results")[0];

    const scoreMsg = document.getElementById("scoreMsg");
    scoreMsg.innerText = roundMsg;
    score_results.appendChild(scoreMsg);
}