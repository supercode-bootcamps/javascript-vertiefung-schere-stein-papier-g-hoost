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

let computerChoice = Math.round(Math.random() * (variations.length));
console.log(computerChoice);

buttons.forEach((button) => {
    button.addEventListener('click', e =>  {
        console.log(button.className);
    })
});




//if-anweisung für die Lösungsmöglichkeiten
// i++ für die Counter
// eventListener für die Buttons