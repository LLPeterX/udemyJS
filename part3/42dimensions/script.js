'use strict';

const box = document.querySelector('.box');
// box в css 400x350, margin-top:50. padding: 10
// стоит "box-sizing: border-box", поэтому padding включается в размеры
console.log(`clientWidth: ${box.clientWidth}, clientHeight: ${box.clientHeight}`); // 384,334 (16px-скролл)
console.log(`offsetWidth: ${box.offsetWidth}, offsetHeight: ${box.offsetHeight}`); // 400, 350
console.log(`scrollWidth: ${box.scrollWidth}, scrollHeight: ${box.scrollHeight}`); // 384,1342
console.log(`scrollLeft: ${box.scrollLeft}, scrollTop: ${box.scrollTop}`); // 0, 20
/* jshint ignore:start */
console.log(box.getBoundingClientRect()); // {x:760, y:50, width:400, height:350, top:50, right:1160, bottom:400, left:760}
/* jshint ignore:end */
const style = window.getComputedStyle(box);
//console.log(style);
console.log(style.textAlign); // block
console.log(style.backgroundColor); // rgba(0,0,0,0) - ???
// свойства document
console.log('doc scrollTop:',document.documentElement.scrollTop);



// Задача 1. при клике на кнопку поностью раскрыть элемент
// (моя модификация: при повторном клике вернуть начальный размер)
const btn = document.querySelector("button");
let initialHeight = btn.style.height;
btn.addEventListener('click', () => {
  console.log('scrollTop:', box.scrollTop);
  if (!box.classList.contains('huge')) {
    box.style.height = box.scrollHeight + 'px'; // раскрываем 
    box.classList.add('huge');
    console.log('doc scrollTop2:',document.documentElement.scrollTop);

  } else {
    box.style.height = initialHeight; // сворачиваем
    box.classList.remove('huge');
  }

});