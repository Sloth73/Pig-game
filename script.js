'use strict';

//DOM manipulation
const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const currentScoreElement = document.querySelector('#current--0');
const currentScoreElement2 = document.querySelector("#current--1");
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

//Conditions at the beginning
let stillPlaying, activePlayer, currentScore, score;

function init() {
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
    scoreP0.textContent = 0;
    scoreP1.textContent = 0;
    score = [0, 0];
    player1.classList.add("player--active");
    currentScore = 0;
    activePlayer = 0;
    currentScoreElement2.textContent = currentScore;
    currentScoreElement.textContent = currentScore;
    stillPlaying = true;
    diceImg.classList.add('hidden'); //Adds a hidden class on dice Img
}
init();

function switchPlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

//Dice roll
btnRoll.addEventListener('click', function () {
    if (stillPlaying) {
        //Random number
        let dice = Math.trunc(Math.random() * 6 + 1);
        console.log(dice);

        //Display dice
        diceImg.classList.remove("hidden");
        diceImg.src = `images/dice_${dice}.png`;

        //Check if 1
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        }
        else {
            switchPlayer();
        }
    }
});

//Hold button
btnHold.addEventListener('click', function () {
    if (stillPlaying) {
        //Add current score to total score
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
        //Chceck if total score is >= 100
        //If yes - Playes wins
        if (score[activePlayer] >= 10) {
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner");
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove("player--active");
            stillPlaying = false;
            diceImg.classList.add("hidden");
        }
        //If no - switch player
        else {
          switchPlayer();
        }
    }  
});

btnNew.addEventListener('click', init);