
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
function capitalize(text) {
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
        } else if (capitalize(input) == 'Rock' || capitalize(input) == 'Paper') {
            keepGoing = false;
        } else if (capitalize(input) == 'Scissors' || capitalize(input) == 'Scissor') {
            input = 'Scissors';
            keepGoing = false;
        } else {
            input = prompt('Please enter Rock, Paper, or Scissors');
            keepGoing = true;
        }
    }
    return capitalize(input);
}

//Play the round
function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == computerSelection) {
        return `It's a Draw! ${playerSelection} and ${computerSelection}!`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

//Runs a 5-round game of Rock, Paper, Scissors
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = checkInput(playerSelection);

        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();