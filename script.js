'use strict';

//DOM manipulation
const ScoreP1 = document.querySelector('#score--0');
const ScoreP2 = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

//Conditions at the beginning
currentScoreP1.textContent = 0;
currentScoreP2.textContent = 0;
diceImg.classList.add('hidden'); //Adds a hidden class on dice Img

let currentScore = 0;

//Dice roll
btnRoll.addEventListener('click', function () {
    //Random number
    let dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice)

    //Display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `images/dice_${dice}.png`;
    
  
});