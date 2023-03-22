'use strict';

//DOM manipulation
const currentScoreP1 = document.querySelector('#score--0');
const currentScoreP2 = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

//Conditions at the beginning
currentScoreP1.textContent = 0;
currentScoreP2.textContent = 0;
diceImg.classList.add('hidden'); //Adds a hidden class on dice Img

//Dice roll
btnHold.addEventListener('click', function () {
    //Random number
    let dice = Math.trunc(Math.random() * 6 + 1);
    
});