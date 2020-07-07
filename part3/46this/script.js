'use strict';

// Разбираем контекст this

// 1) Обычная функция
function showThis() {
  console.log('showThis this:',this); // jshint ignore:line
}
showThis(); // с 'use strict' - undefined, а без 'use strict' - объект Window

// function showSumBad(a,b) {
//   console.log('showSum this:',this); // undefined
//   function sum() {
//     console.log('sum this:',this); // undefined
//     return this.a+this.b; // error
//   }
//   console.log('sum res=',sum()); // undefined
// }
// showSumBad(2,3); // ошибка

// правильное использование: убрать this и использовать замыкание
// sum() ищет переменные a и b внутри себя, а когда не находит,
// обращается к родительской функции
function showSum(a,b) {
  function sum() {
    return a+b; // убрали this
  }
  console.log('sum res=',sum()); // 5
}
showSum(2,3); // в консоли 5

//2) Вызов функции в качестве метода объекта
const obj = {
  a: 10, b: 20,
  sum: function() {
    console.log('obj sum:',this.a+this.b); // this ссылается на "этот" объект
  }
};
obj.sum(); // "obj sum: 30"

//3) Функции-конструкторы
function FC(a,b) {
  this.a=a;
  this.b=b;
  this.sum = function() {
    console.log(this.a+this.b);
  };
}
const someVar = new FC(4,4);
someVar.sum(); // 8. this ссылается на объект someVar

// 4) Внешняя функция, которая должна получить свойства объекта
// Это внешняя функция, this пока undefined
function showName() {
  console.log(this); // jshint ignore:line
  console.log(this.name); // jshint ignore:line
}

const user = {
  name: "Вася"
};

showName.call(user); // теперь this в showName() ссылается на user
// вывод: "Вася"
showName.apply(user); // то же самое

// 5) bind() - создает новую функцию, привязанную к указанному контексту,
// а не привязывает контекст к существующей функции

// функция умножения чего-то на num
function multiply(num) {
  return this*num; // jshint ignore:line
}
// создаем новую функцию умножения на 2 - double()
const double = multiply.bind(2);
console.log(double(10)); // 20
console.log(double(13)); // 26

 