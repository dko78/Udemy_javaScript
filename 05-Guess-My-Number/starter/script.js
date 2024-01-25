'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Ispravan broj';

document.querySelector('.number').textContent = '!';

document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 23;//input fileld je NUMBER

console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

let score = 20; //state varijable je  pa kak to  strašno

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Ispravan broj';
    score = 0;
    console.log('promijeni u zelen');
    document.querySelector('body').style.background = '#60b347';
    //novi komentar
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Prevelik broj';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'IZGUBILI STE!!!';
      document.querySelector('.score').textContent = 20;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Premali broj';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'IZGUBILI STE!!!';
      document.querySelector('.score').textContent = 20;
    }
  }
});
