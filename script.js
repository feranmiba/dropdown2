'use strict';
const features = document.querySelector('.fea');
const features2 = document.querySelector('.tures');
const company = document.querySelector('.comp');
const company1 = document.querySelector('.com');
const FirstOne = document.querySelector('.feat');
const SecondOne = document.querySelector('.feel');
const arrowDown1 = document.querySelector('.up1');
const arrowDown2 = document.querySelector('.up');
const openIt = document.querySelector('.hamburger');
const closeIt = document.querySelector('.close');
const All = document.querySelector('.tin');
const log = document.querySelector('.log');
const overlay = document.querySelector('.overlay');

const openfeat = function () {
  console.log('buttn clicked');
  features.classList.toggle('hidden');
  FirstOne.classList.remove('hidden');
  arrowDown1.classList.remove('hidden');
  if (openfeat) {
    console.log('oened');
  }
  sorted = !sorted;
};
const CloseFeat = function () {
  features.classList.remove('hidden');
  FirstOne.classList.toggle('hidden');
  arrowDown1.classList.toggle('hidden');
};

const CloseFeat2 = function () {
  if (features2) {
    features.classList.remove('hidden');
    FirstOne.classList.toggle('hidden');
    arrowDown1.classList.toggle('hidden');
  }
};
features.addEventListener('click', openfeat);
let sorted = false;
features2.addEventListener('click', openfeat);
arrowDown1.addEventListener('click', CloseFeat);

//COMPANY
const openComp = function () {
  console.log('buttn clicked');
  company.classList.toggle('hidden');
  SecondOne.classList.remove('hidden');
  arrowDown2.classList.remove('hidden');
};
const CloseComp = function () {
  company.classList.remove('hidden');
  SecondOne.classList.toggle('hidden');
  arrowDown2.classList.toggle('hidden');
};
company1.addEventListener('click', openComp);
company.addEventListener('click', openComp);
arrowDown2.addEventListener('click', CloseComp);

// MOBILE OPEN AND CLOSE
openIt.addEventListener('click', function () {
  openIt.classList.toggle('hidden');
  All.classList.remove('hide');
  log.classList.remove('hide');
  closeIt.classList.toggle('hidden');
});

closeIt.addEventListener('click', function () {
  openIt.classList.toggle('hidden');
  All.classList.add('hide');
  log.classList.add('hide');
  closeIt.classList.toggle('hidden');
});
