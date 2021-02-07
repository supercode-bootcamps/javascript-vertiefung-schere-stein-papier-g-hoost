let playerScore = 0;
let computerScore = 0;

const pScore = document.getElementById('human');
const cScore = document.getElementById('computer');
const round5 = document.getElementById('.five');
const round10 = document.getElementById('.ten');
const round15 = document.getElementById('.fifteen');
const round20 = document.getElementById('.twenty');

const buttons = document.querySelectorAll('#symbols button');
let variations = ['rock', 'paper', 'scissor']

let restart = document.getElementById('restart');

let playerScoreElement = document.getElementById('human');
let computerScoreElement = document.getElementById('comuter');

document.getElementById('human').innerHTML = playerScore;
document.getElementById('computer').innerHTML = computerScore;

buttons.forEach((button) =>
{

    button.addEventListener('click', e =>
    {

        let computerChoice = variations[Math.floor(Math.random() * (variations.length))];
        console.log(computerChoice);


        if (computerChoice == 'rock' && button.className == 'paper') {
            playerScore++;
        }
    });
    //     } else if (computerChoice == 'rock' && button.className = 'paper') {
    //     playerScore++;
    // } else if (computerChoice == 'rock' && button.className = 'paper') {
    //     playerScore++;
    //     computerScore++;
    // } else if (computerChoice ==  && playerChoice == button.getElementsByClassName('rock')) {
    //     computerScore++;
    // } else if (computerChoice == variations.length[1] && playerChoice == button.getElementsByClassName('scissor')) {
    //     playerScore++;
    // } else if (computerChoice == variations.length[1] && playerChoice == button.getElementsByClassName('paper')) {
    //     playerScore++;
    //     computerScore++;
    // } else if (computerChoice == variations.length[2] && playerChoice == button.getElementsByClassName('rock')) {
    //     computerScore++;
    // } else if (computerChoice == variations.length[2] && playerChoice == button.getElementsByClassName('paper')) {
    //     computerScore++;
    // } else if (computerChoice == variations.length[2] && playerChoice == button.getElementsByClassName('scissor')) {
    //     playerScore++;
    //     computerScore++;

    // })
});
