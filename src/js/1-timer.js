import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('.btn-start');
const spanValEl = document.querySelector('.value');

let intervalId = null;

btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    const result = Date.now() > selectedDates;
    btnEl.disabled = result;
    if (result) {
      alert('Please choose a date in the future');
    }
  },
};

flatpickr(inputEl, options);

btnEl.addEventListener('click', onClick);
function onClick() {
  let selectedDates = new Date(inputEl.value).getTime() - Date.now();
  intervalId = setInterval(() => {
    selectedDates -= 1000;
    if (selectedDates < 100) {
      clearInterval(intervalId);
      updateTimer();
      return;
    }
    const date = convertMs(selectedDates);
    updateTimer(date);
  }, 1000);
}

function updateTimer({
  days = '00',
  hours = '00',
  minutes = '00',
  seconds = '00',
} = {}) {
  spanValEl[0].textContent = days;
  spanValEl[1].textContent = hours;
  spanValEl[2].textContent = minutes;
  spanValEl[3].textContent = seconds;
}
console.log(spanValEl[0]);
console.log(spanValEl[1]);
console.log(spanValEl[2]);
console.log(spanValEl[3]);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
