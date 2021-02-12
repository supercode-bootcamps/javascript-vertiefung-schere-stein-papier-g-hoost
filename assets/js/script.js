let playerScore = 0;
let computerScore = 0;
let round = 0;

const pScore = document.getElementById('human');
const cScore = document.getElementById('computer');
let letsPlay = document.getElementById('letsPlay');

let buttons = document.querySelectorAll('#symbols button');
let variations = ['rock', 'paper', 'scissor']

let restart = document.getElementById('restart');
letsPlay.innerHTML = "Let's play!";

let rock = document.getElementsByClassName('rock');
let paper = document.getElementsByClassName('paper');
let scissor = document.getElementsByClassName('scissor');
let lizard = document.getElementsByClassName('lizard');
let spock = document.getElementsByClassName('spock');

function showPoints(home, computer)
{
    document.getElementById('human').innerHTML = home;
    document.getElementById('computer').innerHTML = computer;
};


restart.addEventListener('click', e => 
{
    location.reload();
});

function resetButtonColor()
{
    buttons.forEach(x =>
    {
        console.log(x);
        x.style.backgroundColor = "";
    });
};

buttons.forEach((button) =>
{
    button.addEventListener('click', e =>
    {

        resetButtonColor();
        document.getElementById('letsPlay').innerHTML = "Let's play!";
        let computerChoice = variations[Math.floor(Math.random() * (variations.length))];

        if (document.querySelector('input[name="rounds"]:checked').value == null) {
            letsPlayText = "Let's play!";
        };


        if (computerChoice === 'rock' && button.className === 'paper') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";
            document.getElementById('letsPlay').innerHTML = "Paper (user) wraps rock (computer)"
        } else if (computerChoice === 'rock' && button.className === 'scissor') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Rock (computer) whets scissors (user)";
        } else if (computerChoice === 'rock' && button.className === 'lizard') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Rock (computer) squashes lizard (user)";
        } else if (computerChoice === 'rock' && button.className === 'spock') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Spock (user) vaporizes rock (computer)";
        }
        else if (computerChoice === 'paper' && button.className === 'rock') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Paper (computer) wraps rock (user)";
        } else if (computerChoice === 'paper' && button.className === 'scissor') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Scissors (user) cut paper (computer)";
        }
        else if (computerChoice === 'paper' && button.className === 'lizard') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Lizard (user) eats paper (computer)";
        }
        else if (computerChoice === 'paper' && button.className === 'spock') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Spock (user) is rebuted by paper (computer)";
        }
        else if (computerChoice === 'scissor' && button.className === 'lizard') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Scissors (computer) behead lizard (user)";
        }
        else if (computerChoice === 'scissor' && button.className === 'spock') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Spock (user) smashes scissors (computer)";
        }
        else if (computerChoice === 'scissor' && button.className === 'rock') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Rock (user) whets scissors (computer)";
        } else if (computerChoice === 'scissor' && button.className === 'paper') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Scissors (computer) cut paper (user)";
        } else if (computerChoice === 'lizard' && button.className === 'paper') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Lizard (computer) eats paper (user)";
        } else if (computerChoice === 'lizard' && button.className === 'rock') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Rock (computer) smashes lizard (user)";
        }
        else if (computerChoice === 'lizard' && button.className === 'sicssor') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Scissors (user) behead lizard (computer)";
        }
        else if (computerChoice === 'lizard' && button.className === 'spock') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Lizard (computer) poisons Spock (user)";
        }
        else if (computerChoice === 'spock' && button.className === 'rock') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Spock (computer) evaporates rock (user)";
        }
        else if (computerChoice === 'spock' && button.className === 'paper') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Paper (user) rebutes Spock (computer)";
        }
        else if (computerChoice === 'spock' && button.className === 'scissor') {
            computerScore++;
            button.style.backgroundColor = "Red", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Spock (computer) smashes scissor (user)";
        }
        else if (computerChoice === 'spock' && button.className === 'lizard') {
            playerScore++;
            button.style.backgroundColor = "Green", button.style.transition = ".5s";;
            document.getElementById('letsPlay').innerHTML = "Spock (computer) is poisoned by lizard (user)";
        }
        else if (computerChoice === button.className) {
            computerScore + 0;
            playerScore + 0;
            document.getElementById('letsPlay').innerHTML = "It was a draw! You both chose " + button.className;
        }
        round++;
        showPoints(playerScore, computerScore);

        let numberOfRounds = document.querySelector('input[name="rounds"]:checked').value;


        if (numberOfRounds == round) {

            buttons.forEach(button =>
            {
                button.disabled = true;
            });
            function timeout()
            {
                letsPlay.innerHTML = (playerScore > computerScore) ? 'GAME OVER, PLAYER WINS' : 'GAME OVER, COMPUTER WINS';
            };
            setTimeout(timeout, 1000);
        };
    });

});
showPoints(playerScore, computerScore);