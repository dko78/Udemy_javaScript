'use strict';
//test
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay'); //točka ide za selektore

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let index = 0; index < btnsOpenModal.length; index++) {
  //const element = array[index];

  btnsOpenModal[index].addEventListener('click', function () {
    //dd fukcija
    console.log('Button clicked');
    modal.classList.remove('hidden'); //ne smijes točku staviti. TOčka je samo za selektor
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', function () {
  //function
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
