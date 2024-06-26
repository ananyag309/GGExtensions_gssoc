let score = 0;
let highScore = 0;

const bottle = document.getElementById('bottle');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const flipButton = document.getElementById('flip');
const restartButton = document.getElementById('restart');
const messageDisplay = document.getElementById('message');

flipButton.addEventListener('click', flipBottle);
restartButton.addEventListener('click', restartGame);

function flipBottle() {
    const isSuccessfulFlip = Math.random() > 0.5;

    // Apply flip animation
    bottle.style.transform = 'rotate(720deg)';
    bottle.style.bottom = '100px';

    setTimeout(() => {
        // Reset bottle position
        bottle.style.transform = 'rotate(0deg)';
        bottle.style.bottom = '0';

        if (isSuccessfulFlip) {
            score++;
            scoreDisplay.textContent = score;
           
            if (score > highScore) {
                highScore = score;
                highScoreDisplay.textContent = highScore;
            }
            showMessage('Flip successful!');
        } else {
            showMessage('Flip failed! Try again.');
            score = 0;
            scoreDisplay.textContent = score;
        }
    }, 500);
}

function restartGame() {
    score = 0;
    scoreDisplay.textContent = score;
    hideMessage();
}

function showMessage(msg) {
    messageDisplay.textContent = msg;
}

function hideMessage() {
    messageDisplay.textContent = '';
}
