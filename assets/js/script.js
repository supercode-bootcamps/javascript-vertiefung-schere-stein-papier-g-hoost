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

let home = document.getElementById('human').innerHTML = playerScore;
let comp = document.getElementById('computer').innerHTML = computerScore;

// // round5.onclick = round5.value.innerHTML = "5";
// <input onclick=“getRounds(10)” type=“radio” name=“value” id=“value10" value=“10”>




function getRounds(i)
{
    round5.onclick = getRounds(5);
    round10.onclick = getRounds(10);
    round15.onclick = getRounds(15);
    round20.onclick = getRounds(20);
    console.log(i);
    getRounds(i);
};




buttons.forEach((button) =>
{
    button.addEventListener('click', e =>
    {

        let computerChoice = variations[Math.floor(Math.random() * (variations.length))];
        console.log(computerChoice);

        if (computerChoice === 'rock' && button.className === 'paper') {
            home++;
        } else if (computerChoice === 'rock' && button.className === 'scissor') {
            comp++;
        } else if (computerChoice === 'paper' && button.className === 'rock') {
            comp++;
        } else if (computerChoice === 'paper' && button.className === 'scissor') {
            home++;
        } else if (computerChoice === 'scissor' && button.className === 'rock') {
            home++;
        } else if (computerChoice === 'scissor' && button.className === 'paper') {
            comp++;
        } else if (computerChoice === button.className) {
            document.getElementsByClassName('.dots').innerHTML = "It's a tie!";
        }
    });

});
