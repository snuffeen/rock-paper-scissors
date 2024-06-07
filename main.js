let playerScore = 0
let computerScore = 0

const scoreboard = document.querySelector("#scoreboard")
scoreboard.textContent = (`${playerScore} ${computerScore}`)

const playerChoiceDisplay = document.querySelector("#player-choice-display")
playerChoiceDisplay.textContent = ""

const computerChoiceDisplay = document.querySelector("#computer-choice-display")
computerChoiceDisplay.textContent = ""

const gameInfo = document.querySelector("#game-info")
gameInfo.textContent = "Make a choice!"


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function getComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    let result = ""
    switch (a){
        case 0:
            result = "rock"
            break
        case 1:
            result = "paper"
            break
        case 2:
            result = "scissors"
            break
    }
    return result
}


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
})


function playRound(playerChoice, computerChoice){
    playerChoiceDisplay.textContent = `You picked ${playerChoice}.`
    computerChoiceDisplay.textContent = `Your opponent picked ${computerChoice}.`
    if (playerChoice == computerChoice){
        gameInfo.textContent = (
            `You both picked ${playerChoice}. It's a tie.`
        )
    }
    else if (playerChoice == "rock" && computerChoice == "scissors"
    || playerChoice == "paper" && computerChoice == "rock"
    || playerChoice == "scissors" && computerChoice == "paper"
) {
    playerScore++
    gameInfo.textContent = (
        `${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}! You got a point!`
)
}
else {
    computerScore++
    gameInfo.textContent = (
        `${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}! Your opponent got a point.`
    )
}
scoreboard.textContent = (`${playerScore} ${computerScore}`)
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