let choices = ["Rock", "Paper", "Scissors" ];

let roundMsg = "";
let playerMsg = "";
let computerMsg = "";

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.textContent));
});

function getComputerChoice() {
    return choices[~~(Math.random() * 3)];
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if(playerChoice == computerChoice) {
        roundMsg = "Tie";
        playerMsg = "➖";
        computerMsg = "➖";
    }

    if(playerChoice === "Paper" && computerChoice === "Rock" ||
       playerChoice === "Rock" && computerChoice === "Scissors" ||
       playerChoice === "Scissors" && computerChoice === "Paper")
    {
        playerScore += 1;
        roundMsg = `${playerChoice} beats ${computerChoice}`;
        playerMsg = "✔️";
        computerMsg = "❌";
    }
    if(playerChoice === "Rock" && computerChoice === "Paper" ||
       playerChoice === "Scissors" && computerChoice === "Rock" ||
       playerChoice === "Paper" && computerChoice === "Scissors")
    {
        computerScore += 1;
        roundMsg = `${computerChoice} beats ${playerChoice}`;
        playerMsg = "❌";
        computerMsg = "✔️";
    }
    render();
}

function checkScore() {
    if(playerScore == 5 || computerScore == 5) {
        return;
    }
}

function render() {
    const score_results = document.getElementsByClassName("score-results")[0];

    const playerScoreCount = document.getElementById("playerScore");
    playerScoreCount.innerText = playerScore;

    const computerScoreCount = document.getElementById("computerScore");
    computerScoreCount.innerText = computerScore;

    const player = document.getElementById("player");
    player.innerText = playerMsg;
    score_results.appendChild(player);

    const scoreMsg = document.getElementById("scoreMsg");
    scoreMsg.innerText = roundMsg;
    score_results.appendChild(scoreMsg);

    const computer = document.getElementById("computer");
    computer.innerText = computerMsg;
    score_results.appendChild(computer);
}