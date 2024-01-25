'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Ispravan broj';

document.querySelector('.number').textContent = '!';

document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 23;//input fileld je NUMBER

console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state varijable
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //tu se klasa zove btn check, ima 2 naziva ali btn je generički pa ga ne koristiš
  const guess = Number(document.querySelector('.guess').value); //zato što je input type Number, onda ide .value
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Ispravan broj';

    document.querySelector('.number').textContent = secretNumber;
    console.log('promijeni u zelen');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Prevelik broj' : 'Premali broj';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'IZGUBILI STE!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
