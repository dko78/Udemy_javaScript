'use strict';
//selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting pozicije
score0El.textContent = 0;
score1El.textContent = 0;

//mičem kocku takod a stavim hidden

diceEl.classList.add('hidden');

//current score i zbrajanje
const scores = [0, 0]; //array uvijek sa const
let currentScore = 0;
let activePlayer = 0; //0 je prvi igrač

//test
/*
const curScor0 = document.getElementById('current--0');
curScor0.textContent = 100;
const curScor1 = document.getElementById('current--1');
curScor1.textContent = 20;
document.getElementById('current--1').textContent = 1; // i ovak mozes
*/

//rolling dice funcionalnost

btnRoll.addEventListener('click', function () {
  // 1. Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. display the dice
  diceEl.classList.remove('hidden');
  //ovisi koji broj diplejaj kocku od 1-6
  diceEl.src = `dice-${dice}.png`; //super

  // check ako je 1 promijeni igrača, ako nije zbrajaj
  if (dice !== 1) {
    //zbroji currentScore
    currentScore += dice;
    //id="current--0"
    //current0El.textContent = currentScore; //todo kod određenog igrača, ne kod oba
    //dinamički
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //prebaci na 2. igrača
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //reassign actie player super
  }
});

