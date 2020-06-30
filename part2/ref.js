// Здесь тестируем передачу по значению/ссылке
"use strict";
// передача данных по значению
let a=5, b=a;
console.log(`a=${a} b=${b}`); // a=5, b=5
b=6;
console.log(`a=${a} b=${b}`);// a=5, b=6

// Операции с объектами - по ссылке
let obj = {
  a: 5,
  b: 5,
  c: {
    x: 100,
    y: 200
  }
};

let copy = obj; // создается ссылка на объект, а не реальная копия
copy.b=20; // меняем в копии значение
console.log(copy); // copy.b=20. Как и задумано
console.log(obj); // obj.b=20. Т.е. меняется оригинальный объкт.

// создаем копию объекта с помощью функции с циклом
// поверхностное копирование. свойства-объекты не обрабатываются
function copyObj(mainObj) {
  let objCopy = {}; // сначала пустой объект
  for (let key in mainObj) {
    objCopy[key] = mainObj[key]; // создаем новое свойство и присваиваем ему значение
  }
  return objCopy;
}
console.log(' --------- copyObj -----------');
let copy2 = copyObj(obj);
copy2.b=50;
console.log(copy2); // copy2.b=50. Как и задумано
console.log(obj); // Оригинальный объект, там b осталось 20
copy2.c.x=10500; // а теперб попробуем изменить в копии внутренний объект
console.log(obj); // а тут засада: оригинальный obj тоже поменялcя: obj.c.x=10500

// объединение объектов
console.log(' ---- Object.assign()-------');
const add = {
  d: 17,
  e: 20
}
let copy3 = Object.assign(obj,add);
copy3.c.y = 2000;
console.log(copy3); // c.y=2000
console.log(obj); // тоже c.y=2000

