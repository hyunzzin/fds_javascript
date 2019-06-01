/* eslint-disable radix */
/* eslint-disable no-implied-eval */


function zero(num) {
  return `${parseInt(num / 10) === 0 ? '0' : ''}`;
}

function digitalclock() {
  const $digitalClock = document.querySelector('.digital-clock');
  const $hour = document.querySelector('.hour');
  const $min = document.querySelector('.minute');
  const $sec = document.querySelector('.second');
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  $digitalClock.innerHTML = `${zero(hour)}${hour}:${zero(min)}${min}:${zero(sec)}${sec}`;

  $hour.style.transform = `rotate(${(hour % 12) * 30}deg)`;
  $min.style.transform = `rotate(${6 * min}deg)`;
  $sec.style.transform = `rotate(${6 * sec}deg)`;
}


setInterval('digitalclock()', 1000);