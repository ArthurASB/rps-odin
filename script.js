const menu = document.querySelector("#menu");
const results = document.querySelector(".results");

menu.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
});


// let getHumanChoice = () => {
//     const message = `Write one of the following ` +
//         `words to make your selection (with no quotes): ` +
//         ` 'rock', 'paper' or 'scissors'`;
//     let humanPick = prompt(message).toLowerCase();
//     return humanPick;
// }

let getComputerChoice = () => {
    let cpuChoice = Math.floor(Math.random()*3);
    if (cpuChoice===0){
        return ('rock');
    } else if (cpuChoice===1){
        return ('paper');
    } else {
        return ('scissors');
    }
};


// function  playGame (){
//     let humanScore = 0, computerScore = 0;
//     let humanSelection, computerSelection;

    // let playRound = (humanChoice, computerChoice) => {
    let playRound = (humanChoice) => {
        let computerChoice = getComputerChoice();
        results.textContent = '';
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            // humanScore++;
            results.textContent="You score a point! Rock beats scissors!";
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock'){
            // humanScore++;
            results.textContent="You score a point! Paper beats rock!";
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            // humanScore++;
            results.textContent="You score a point! Scissors beat paper!";
        }
        else if (humanChoice === 'rock' && computerChoice === 'paper'){
            // computerScore++;
            results.textContent="The computer scores a point! Paper beats rock!";
        }    
        else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            // computerScore++;
            results.textContent="The computer scores a point! Scissors beat paper!";
        } 
        else if (humanChoice === 'scissors' && computerChoice === 'rock'){
            // computerScore++;
            results.textContent="The computer scores a point! Rock beats Scissors!";
        }
        else {
            results.textContent="It's a draw! Nobody scores!";
        }
    };

    // let gameTracker = 0;
    // while (gameTracker < 5){
    //  humanSelection = getHumanChoice();
    //  computerSelection = getComputerChoice();

    //  playRound(humanSelection, computerSelection)
    //  gameTracker++;
    // }
    // if (humanScore > computerScore){
    //     console.log("Congratulations! A WINNER IS YOU!");
    // } else if (computerScore > humanScore) {
    //         console.log("OH, NO! You lost!");        
    // } else {
    //         console.log("Impressive! You've managed a draw!");
    // }
    
// }

// playGame ();