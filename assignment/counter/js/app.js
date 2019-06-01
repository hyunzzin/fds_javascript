console.log('hello');
const $increase = document.querySelector('.increase');
const $decrease = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');


$increase.onclick = function () {
  const num = +$counter.textContent + 1;
  $counter.innerHTML = num;
};

$decrease.onclick = function () {
  let num = $counter.textContent;
  num = num <= 0 ? num : num - 1;
  $counter.innerHTML = num;
};