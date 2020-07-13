'use strict';
// на основе promise.js
console.log('Запрос данных...');
// создаем "обещание"
const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Подготовка...');
    const product = {
      name: 'TV',
      price: 19000
    };
    // второй тамаут вынесем в resolve, т.к. он должен выполниться после первого
    resolve(product);
  }, 2000);

});

// используем промисы - с аргументами
 req.then((p) => { // p - это аргумент product в resolve(product)
  setTimeout(() => {
    p.status = 'ordered';
    console.log(p); // { name: 'TV', price: 19000, status: 'ordered' } через 3 сек.
  }, 1000);

});
// Output:
//Запрос данных...
//Подготовка...
//{ name: 'TV', price: 19000, status: 'ordered' }