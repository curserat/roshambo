
//Get computer's choice
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch (num) {
        case 1:
            choice = 'Rock';
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        default:
            alert("Something went wrong!");
    }

    return choice;
}

//Format player's choice
function formatText(text) {
    text = text.trim();
    text = text.toLowerCase();
    return text.replace(text[0], text[0].toUpperCase());
}

//Check the player's input
function checkInput(playerSelection) {
    let input = playerSelection;
    let keepGoing = true;

    while (keepGoing) {
        if (!input) {
            input = prompt('Please enter Rock, Paper, or Scissors');
            keepGoing = true;
        } else if (formatText(input) == 'Rock' || formatText(input) == 'Paper') {
            keepGoing = false;
        } else if (formatText(input) == 'Scissors' || formatText(input) == 'Scissor') {
            input = 'Scissors';
            keepGoing = false;
        } else {
            input = prompt('Please enter Rock, Paper, or Scissors');
            keepGoing = true;
        }
    }
    return formatText(input);
}


//Play the round
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == computerSelection) {
        return `It's a Draw! ${playerSelection} and ${computerSelection}!`
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}
//Initialize scores
let computerScore = 0;
let playerScore = 0;

//Runs a 5-round game of Rock, Paper, Scissors
function game() {
    computerScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = checkInput(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    console.log("GAME END")
    if(playerScore > computerScore){
        console.log("You Win the Game!");
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else if(playerScore < computerScore){
        console.log("Computer Wins the Game!");
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else if(playerScore == computerScore){
        console.log("It's a Tie Game!");
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else {
        console.log("Wait, what?");
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
    }
}

game();