let playerScore = 0;
let computerScore = 0;
let round = 0;

const pScore = document.getElementById('human');
const cScore = document.getElementById('computer');
let letsPlay = document.getElementById('letsPlay');

const buttons = document.querySelectorAll('#symbols button');
let variations = ['rock', 'paper', 'scissor']

let restart = document.getElementById('restart');
let letsPlayText = document.getElementById('letsPlay').innerHTML = "Let's play!";

let rock = document.getElementsByClassName('rock');
let paper = document.getElementsByClassName('paper');
let scissor = document.getElementsByClassName('scissor');

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
    document.getElementById('letsPlay').innerHTML = "Let's play!";

});


buttons.forEach((button) =>
{
    button.addEventListener('click', e =>
    {
        document.getElementById('letsPlay').innerHTML = "Let's play!";
        let computerChoice = variations[Math.floor(Math.random() * (variations.length))];

        if (document.querySelector('input[name="rounds"]:checked').value == null) {
            letsPlayText = "Let's play!";
        };


        if (computerChoice === 'rock' && button.className === 'paper') {
            playerScore++;
            e.target.style.backgroundColor = "Green";
            document.getElementById('letsPlay').innerHTML = "Paper (user) beats rock (computer)";
        } else if (computerChoice === 'rock' && button.className === 'scissor') {
            computerScore++;
            e.target.style.backgroundColor = "Red";
            document.getElementById('letsPlay').innerHTML = "Rock (computer) beats scissor (user)";
        } else if (computerChoice === 'paper' && button.className === 'rock') {
            computerScore++;
            e.target.style.backgroundColor = "Green";
            document.getElementById('letsPlay').innerHTML = "Paper (computer) beats rock (user)";
        } else if (computerChoice === 'paper' && button.className === 'scissor') {
            playerScore++;
            e.target.style.backgroundColor = "Red";
            document.getElementById('letsPlay').innerHTML = "Scissor (user) beats paper (computer)";
        } else if (computerChoice === 'scissor' && button.className === 'rock') {
            playerScore++;
            e.target.style.backgroundColor = "Green";
            document.getElementById('letsPlay').innerHTML = "Rock (user) beats scissor (computer)";
        } else if (computerChoice === 'scissor' && button.className === 'paper') {
            computerScore++;
            e.target.style.backgroundColor = "Red";
            document.getElementById('letsPlay').innerHTML = "Scissor (computer) beats paper (user)";
        } else if (computerChoice === button.className) {
            computerScore + 0;
            playerScore + 0;
            document.getElementById('letsPlay').innerHTML = "It was a draw! You both chose " + button.className;
        }
        round++;
        showPoints(playerScore, computerScore);


        if (document.querySelector('input[name="rounds"]:checked').value == round) {
            document.getElementById('letsPlay').innerHTML = 'GAME OVER';
        };


    });

});
showPoints(playerScore, computerScore);


// function whoWon()
// {
//     if (playerScore > computerScore) {
//         document.getElementById('letsPlay').innerHTML = 'GAME OVER, YOU WIN!'
//     } else {
//         document.getElementById('letsPlay').innerHTML = 'GAME OVER, COMPUTER WINS!'
//     }
// };

//Let's Play wird am Anfag nicht mehr gezeigt.
//Was tun mit den Pull-Requests?