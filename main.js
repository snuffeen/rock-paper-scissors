let playerScore = 0
let computerScore = 0

const result = document.querySelector("#result")
result.textContent = (`${playerScore} ${computerScore}`)


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


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
})


// function getPlayerChoice() {
//     choice = prompt("Rock, Paper or Scissors?");
//     if (!(choice.toLowerCase() == "rock"
//     || choice.toLowerCase() == "paper"
//     || choice.toLowerCase() == "scissors")
//     ) {
//         alert("Please pick Rock, Paper or Scissors")
//         getPlayerChoice()
//     }
//     alert("You picked " + capitalizeFirstLetter(choice) + ".")
//     return(choice)
// }

function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        console.log("Tie.")
    }
    else if (playerChoice == "rock" && computerChoice == "scissors"
    || playerChoice == "paper" && computerChoice == "rock"
    || playerChoice == "scissors" && computerChoice == "paper"
    ) {
        playerScore++
        console.log("You won!" + capitalizeFirstLetter(playerChoice) + " beats " + capitalizeFirstLetter(computerChoice) + ".")
    }
    else {
        computerScore++
        console.log("You lose!" + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(playerChoice) + ".")
    }
    console.log(playerScore, computerScore)
}



// function playGame() {
//     for (let i = 0; playerScore < 3 && computerScore < 3; i++) {
//         const playerSelection = getPlayerChoice()
//         const computerSelection = getComputerChoice()
//         playRound(playerSelection, computerSelection);
//         if (playerScore == 3) {
//             alert("You won with the score of" + playerScore + " " + computerScore + ".")
//         }
//         else if (computerScore == 3) {
//             alert("You lost with the score of " + playerScore + " " + computerScore + ".")
//         }
//     }

// }

// playGame()