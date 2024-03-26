// commonjs
const flatpickr = require('flatpickr');

// es modules are recommended, if available, especially for typescript
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let intervalId = null;
const startBtn = document.querySelector('[data-action-start]');

flatpickr('#datetime-picker', options);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
