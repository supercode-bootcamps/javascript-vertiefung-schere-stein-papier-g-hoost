let playerScore = 0;
let computerScore = 0;
let round = 0;

const pScore = document.getElementById('human');
const cScore = document.getElementById('computer');
let letsPlay = document.getElementById('letsPlay');

const buttons = document.querySelectorAll('#symbols button');
let variations = ['rock', 'paper', 'scissor']

let restart = document.getElementById('restart');



function showPoints(home, computer)
{
    document.getElementById('human').innerHTML = home;
    document.getElementById('computer').innerHTML = computer;
};


restart.addEventListener('click', e => 
{
    playerScore = 0;
    computerScore = 0;
    round = 0;
    showPoints(0, 0);

});


buttons.forEach((button) =>
{
    button.addEventListener('click', e =>
    {

        let computerChoice = variations[Math.floor(Math.random() * (variations.length))];
        console.log(computerChoice);

        if (document.querySelector('input[name="rounds"]:checked').value == null) {
            document.getElementById('letsPlay').innerHTML = "let's play!";
        };


        if (computerChoice === 'rock' && button.className === 'paper') {
            playerScore++;
        } else if (computerChoice === 'rock' && button.className === 'scissor') {
            computerScore++;
        } else if (computerChoice === 'paper' && button.className === 'rock') {
            computerScore++;
        } else if (computerChoice === 'paper' && button.className === 'scissor') {
            playerScore++;
        } else if (computerChoice === 'scissor' && button.className === 'rock') {
            playerScore++;
        } else if (computerChoice === 'scissor' && button.className === 'paper') {
            computerScore++;
        } else if (computerChoice === button.className) {
            computerScore + 0;
            playerScore + 0;
        }
        round++;
        showPoints(playerScore, computerScore);


        if (document.querySelector('input[name="rounds"]:checked').value == round) {
            document.getElementById('letsPlay').innerHTML = 'GAME OVER';
        };


    });

});
showPoints(playerScore, computerScore);