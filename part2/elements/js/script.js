'use strict';

// поиск:
const box = document.getElementById("box"); // по ID
const buttons = document.getElementsByTagName("button");
const circles = document.querySelectorAll(".circle");
const hearts = document.querySelectorAll(".heart");
//console.dir(box);

box.style.backgroundColor = 'pink';
buttons[1].style.borderRadius="100%";
const w=100, h=100;
circles[1].style.cssText=`background-color: pink; width: ${w}px; height: ${h}px;`;
//console.log(circles[1].style.cssText);

// замена свойств нескольких элементов
//alert("Press to continue");

circles.forEach(circle => circle.style.cssText="width:100px;height:100px"); // старый background-color затирается.
//console.log(circles[1].style.cssText);
circles.forEach(circle => circle.style.backgroundColor='yellow'); 

// create new element

const text = document.createTextNode("Какой-то текст");
const div = document.createElement("div");
div.classList.add('box');
document.body.prepend(div);
div.innerHTML = "<p>Привет</p>"; // модицикация содержимого элемента
let e = document.querySelector("#box");
e.insertAdjacentHTML('afterend',"<h1>Hello</h1>");
// получение элементов, находящихся внутри другого элемента-обёртки
const wrapper = document.querySelector(".wrapper");
let allHearts = wrapper.querySelectorAll(".heart");
console.log(allHearts.length); // 3