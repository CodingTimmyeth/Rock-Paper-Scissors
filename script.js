const input = document.querySelector('input')
const computerInput = document.getElementById('computer')
const button = document.querySelector('button')

let playerScore = 0;
let computerScore = 0;

function getComputerChocie() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

function updateScore (player, computer, type) {
    const score = document.getElementById('score')

    score.innerHTML = `
        <h1>Score Board</h1>
        <h3>${type}</h3>
        <p>Player Score: ${player}</p>
        <p>Computer Score: ${computer}</p>
    `
}

function game (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if(playerSelection === computerSelection){
        updateScore(playerScore, computerScore, 'Tied!')
        return'Tied Game'
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
        ) {
            computerScore++
            updateScore(playerScore, computerScore, 'Keep Trying')
            return 'You Lost'
        } else {
            playerScore++
            updateScore (playerScore, computerScore, 'Winner')
            return 'You Win'
        }
}

input.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        const playerSelection = input.value
        const computerSelection = getComputerChocie()
        computerInput.innerText = computerSelection
        game(playerSelection, computerSelection);
        input.value = ''
    }
})

function resetGame () {
    playerScore = '';
    computerScore = '';
    updateScore(playerScore, computerScore, 'New Game!')
}

button.addEventListener('click', resetGame)


// for(let i = 0; i < 5; i++){
//     const playerSelection = 'rock'
//     const computerSelection = getComputerChocie()
//     console.log(game(playerSelection, computerSelection));
// }