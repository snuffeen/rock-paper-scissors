let humanScore = 0
let computerScore = 0

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    let b = ""
    switch (a){
        case 0:
            b = "rock"
            break
        case 1:
            b = "paper"
            break
        case 2:
            b = "scissors"
            break
    }
    console.log("Your opponent picked " + capitalizeFirstLetter(b)+ ".")
    return b
}

function getHumanChoice() {
    choice = prompt("Rock, Paper or Scissors?");
    if (!(choice.toLowerCase() == "rock" || 
    choice.toLowerCase() == "paper" || 
    choice.toLowerCase() == "scissors")
    ) {
        alert("Please pick Rock, Paper or Scissors")
        getHumanChoice()
    }
    // else alert("You picked " + choice)
    console.log("You picked " + capitalizeFirstLetter(choice) + ".")
    return(choice)
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("Tie.")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore++
        console.log("You won!" + capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice) + ".")
    }
    else {
        computerScore++
        console.log("You lose!" + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice) + ".")
    }
    console.log(humanScore, computerScore)
}

function playGame() {
    for (let i = 0; humanScore < 3 && computerScore < 3; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
        if (humanScore == 3) {
            console.log("You won with the score of" + humanScore + " " + computerScore + ".")
        }
        else if (computerScore == 3) {
            console.log("You lost with the score of " + humanScore + " " + computerScore + ".")
        }
    }

}

playGame()