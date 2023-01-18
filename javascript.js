
//Get Computer's choice
function getComputerChoice(){
    const num = Math.floor(Math.random()*3)+1;
    let choice;
    switch (num){
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

//Formats player's choice
function capitalize(text){
    text = text.toLowerCase();
    return text.replace(text[0], text[0].toUpperCase());
}
//Check the player's input
function checkInput(playerSelection){
    playerSelection = capitalize(playerSelection);
    let check;
    if (playerSelection == 'Rock'){
        check = true;
    } else if (playerSelection == 'Paper'){
        check = true;
    } else if (playerSelection == 'Scissors' || playerSelection == 'Scissor'){
        check = true;
    } else {
        check = false;
    }
}
//Play the round
function playRound(playerSelection, computerSelection){
     
    
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(getComputerChoice());