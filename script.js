'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', toggleModal);
}

btnCloseModal.addEventListener('click', toggleModal);

overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});

/*
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

 function openModal() {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
 }
 */

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}
