let getComputerChoice = () => {
    let cpuChoice = Math.floor(Math.random()*3);
    if (cpuChoice===0){
        return ("rock");
    } else if (cpuChoice===1){
        return ("paper");
    } else {
        return ("scissors");
    }
};

function displayScore (humScore, cpuScore){
    currentScore.textContent="";
    currentScore.textContent=`The current score is -- You: ${humScore} // Computer: ${cpuScore}`;
}

let playRound = (humanChoice, computerChoice) => {
    results.textContent = "";
    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        results.textContent="You score a point! Rock beats scissors!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        results.textContent="You score a point! Paper beats rock!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        results.textContent="You score a point! Scissors beat paper!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        results.textContent="The computer scores a point! Paper beats rock!";
    }    
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        results.textContent="The computer scores a point! Scissors beat paper!";
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        results.textContent="The computer scores a point! Rock beats Scissors!";
    }
    else {
        results.textContent="It's a draw! Nobody scores!";
    }
    displayScore(humanScore, computerScore);
};

function resetGame (){
    alert("Starting a new game...");
    humanScore = 0;
    computerScore = 0;
    gameTracker = 0;
}

const menu = document.querySelector("#menu");
const results = document.querySelector(".results");
const currentScore = document.querySelector(".currentScore");

let humanScore = 0, computerScore = 0;
let humanSelection = "";

let gameTracker = 0;

menu.addEventListener("click", (e) => {
    let target = e.target;
    switch (target.id) {
        case "rock":
            humanSelection = "rock";
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            gameTracker++;
            break;
        case "paper":
            humanSelection = "paper";
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            gameTracker++;
            break;
        case "scissors":
            humanSelection = "scissors";
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            gameTracker++;
            break;
    }
    if (humanScore >= 5) {
        alert("Congratulations! A WINNER IS YOU!");
        resetGame();
    }
    if (computerScore >= 5) {
        alert("OH, NO! You lost!");
        resetGame();
    }
});