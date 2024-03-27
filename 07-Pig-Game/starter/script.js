'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//mičem kocku takod a stavim hidden

//diceEl.classList.add('hidden');

let scores, activePlayer, playing, currentScore; //zato što nisu vidljive u funkciji init()

//current score i zbrajanje

const init = function () {
  //nuliraj totale i trenutne rezultate
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winne');
  player1El.classList.remove('player--winne');

  //player0El.classList.remove('player--active');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //internal state var
  activePlayer = 0; //0 je prvi igra�
  playing = true;
  currentScore = 0;
  scores = [0, 0];

  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //reassign actie player super
  player0El.classList.toggle('player--active'); //stavlja klasu ako nema, ako ima miče
  player1El.classList.toggle('player--active'); //u prethodoj modal si koristio ovo: !modal.classList.contains('hidden'),dakle contains za klasu, a mogao si i toggle
};

//test
/* s
const curScor0 = document.getElementById('current--0');
curScor0.textContent = 100;
const curScor1 = document.getElementById('current--1');
curScor1.textContent = 20;
document.getElementById('current--1').textContent = 1; // i ovak mozes
*/

//rolling dice funcionalnost

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display the dice
    diceEl.classList.remove('hidden');
    //ovisi koji broj diplejaj kocku od 1-6
    diceEl.src = `dice-${dice}.png`; //super

    // check ako je 1 promijeni igra�a, ako nije zbrajaj
    if (dice !== 1) {
      //zbroji currentScore
      currentScore += dice;
      //id="current--0"
      //current0El.textContent = currentScore; //todo kod odre�enog igra�a, ne kod oba
      //dinami�ki
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //prebaci na 2. igra�a
      switchPlayer();
    }
  }
});

//gumb HOLD
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. provjeri ako je >= 100, ako je gotova igra, ako nije prebaci na 2. igra�a
    if (scores[activePlayer] >= 100) {
      //finish the game i daj winner klasu .player--winner
      console.log('gotova igra!!!');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); //n emoraš init() jer nema virjednosti
