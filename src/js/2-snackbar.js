import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const delayEl = document.querySelector('.delay-input');
const stateEl = document.querySelectorAll('.state-radio');
const btnSubEl = document.querySelector('.btn-submit');
console.log(stateEl);
function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateEl.values) {
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
