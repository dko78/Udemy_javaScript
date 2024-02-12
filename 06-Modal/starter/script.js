'use strict';
//test
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay'); //točka ide za selektore

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); //ne smijes točku staviti. TOčka je samo za selektor
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < btnsOpenModal.length; index++) {
  //const element = array[index];

  btnsOpenModal[index].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
