'use strict';

//DOM manipulation
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const currentScoreElement1 = document.querySelector('#current--0');
const currentScoreElement2 = document.querySelector("#current--1");
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

//Conditions at the beginning
scoreP1.textContent = 0;
scoreP2.textContent = 0;
diceImg.classList.add('hidden'); //Adds a hidden class on dice Img

let currentScore = 0;
let activePlayer = 0;

//Dice roll
btnRoll.addEventListener('click', function () {
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
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
});