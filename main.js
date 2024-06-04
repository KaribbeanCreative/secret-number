'use strict';

let score = 20;
let highscore = 0;

// Function DRY to display message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Get random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Click the check button
document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);

    // Check if input have a number
    if (!guessNumber) {
        displayMessage('⛔ No Number !')

        // Check if guessNumber === secretNumber
    } else if (guessNumber === secretNumber) {
        displayMessage('🎉 Correct Number !');
        document.querySelector('.number').textContent = secretNumber;

        // Change background-color and width when user found secret number
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Implement highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Check if guessNumber is !== than secretNumber
    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber < secretNumber ? '📉 Too low !' : '📈 Too High !');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😥 You lose !');
        }
    }
});


// Reset game with the Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing ...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
