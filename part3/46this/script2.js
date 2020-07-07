'use strict';

const btn1 = document.querySelector("#button1"),
  btn2 = document.querySelector("#button2"),
  btn3 = document.querySelector("#button3"),
  res = document.querySelector('.res'),
  box = document.querySelector('.box');

// при обработчике в виде function() this = элемент, вызвавший событий
btn1.addEventListener('click', function () {
  console.log(this); // <button>
});

btn2.addEventListener('click', () => {
  console.log(this); // Window !!!
});


const obj = {
  num: 5,
  sayNum: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};
obj.sayNum(); // 5


// модификация div по кнопке button3
function changeColor() {
  if (this.style.backgroundColor === 'blue') {
    this.style.backgroundColor = 'white';
  } else {
    this.style.backgroundColor = 'blue';
  }
}
btn3.addEventListener('click', changeColor.bind(box));

