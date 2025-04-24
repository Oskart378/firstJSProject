function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    
    return getChoice(choice);
}

function getHumanChoice() {
    let choice = 
        prompt("Enter an option from 1 to 3, (1 = rock, 2 = paper, 3 = scissors)");
    
    return getChoice(choice - 1);
}

function getChoice(choice) {

    switch(choice) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default:
            return null;
    }
}

console.log(getHumanChoice());