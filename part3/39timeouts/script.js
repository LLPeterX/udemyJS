'use strict';

const res = document.querySelector('.res'),
  box = document.querySelector('.box');
let isBoxVisible = false;


const timerId = setInterval(() => {
  console.log(isBoxVisible);
  if (isBoxVisible) {
    box.classList.replace('show', 'hide');
  } else {
    box.classList.replace('hide', 'show');
  }
  isBoxVisible = !isBoxVisible;
}, 100);

// через 2 секунды останавливаем мигающий квадрат
// параметрами в функцию (и в setTimeout) передаем id таймера и элемент-квадрат
setTimeout((id, el) => {
  res.innerHTML = "<p>Привет! Я - Надпись!<br>Я уничтожила злобное мерцание!</p>";
  clearInterval(id);
  el.classList.replace('show', 'hide');
}, 5000, timerId, box);

// // рекурсивный запуск setTimeout
// let id = setTimeout(function log() {
//   console.log('hello');
//   id=setTimeout(log,500); // по истечении 500 ms будет запускаться новый
// },500);

// анимация. Заставим слосчастный квадрат двигаться
box.classList.replace('hide', 'show');
box.classList.add('abs'); // position: absolute

function myAnimation(el) {
  let pos = 0;
  let direction; // 1 вправо, -1 влево
  let id = setInterval(frame, 50);
  // остановить анимацию через 10 сек
  setTimeout(()=> {
    clearInterval(id);
  },10000);
  function frame() {
    if (pos <= 0) {
      pos = 0;
      direction = 1;
    }
    if (pos > 500) {
      direction = -1;
    }
    pos += direction*10;
    el.style.left = pos + 'px';
  }
}
let mbox = document.querySelector('.moving-box');
myAnimation(mbox);