// DOM
const $btn = document.querySelector('.fa-arrow-circle-right');
const $container = document.querySelector('.container');


$btn.onclick = function () {
  $container.classList.toggle('active');
};