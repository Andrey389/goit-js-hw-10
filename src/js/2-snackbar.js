import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const delayEl = document.querySelector('.delay-input');
const fulfilledEl = document.querySelector('.ful-input');
const rejectEl = document.querySelector('.rej-input');
const btnSubEl = document.querySelector('.btn-submit');

function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilledEl) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}
const p1 = createPromise(1000);
console.log(p1);
