/* eslint-disable consistent-return */
/* eslint-disable radix */
const $display = document.querySelector('.display');
const $control = document.querySelector('.control');

let mil = 0;
let sec = 0;
let min = 0;
let timer;

function zero(num) {
  return `${parseInt(num / 10) === 0 ? '0' : ''}`;
}

$control.onclick = function () {
  if ($control.textContent === 'Start') {
    $control.innerHTML = 'Stop';
    // eslint-disable-next-line no-return-assign
    return timer = setInterval(() => {
      // eslint-disable-next-line radix
      const html = `${zero(min)}${min}:${zero(sec)}${sec}:${zero(mil)}${mil}`;
      $display.innerHTML = html;
      mil += 1;
      if (mil === 99) {
        sec += 1;
        mil = 0;
      }
      if (sec === 59) {
        min += 1;
        sec = 0;
      }
    }, 10);
  }
  if ($control.textContent === 'Stop') {
    $control.innerHTML = 'Start';
    clearInterval(timer);
  }
};