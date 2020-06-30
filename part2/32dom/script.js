'use strict';
// Навигация по DOM-дереву
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild); 


// ищем элемент-кнопку с id="current", а затем его родителя
let parentDiv = document.querySelector("#current").parentNode;
console.log(parentDiv); // <div class="first">
let parentDiv2 = document.querySelector("#current").parentNode.parentNode;
console.log(parentDiv2); // <div class="wrapper">
console.log('children of parentDIV2');
console.log(parentDiv2.children);

// data-атрибут
let data3 = document.querySelector('[data-current="3"]');
// получить следующий элемент
console.log(data3.nextSibling); // #text, потому что после </li> пустая строка
console.log(data3.nextElementSibling); // <li>
console.log(document.body.firstElementChild); // <div class="wrapper">

console.log(' -- cycle -- ');

// перебираем коллекцию элементов и исключаем текстовые ноды и комментарии
for (let node of document.body.childNodes) {
  if(node.nodeName === '#text' || node.nodeName==="#comment") {
     continue;
  }
  console.log(node); // отобразятся только html-элементы
}

