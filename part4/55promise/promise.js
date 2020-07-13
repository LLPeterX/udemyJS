'use strict';
// на основе callbackHell.js
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
    resolve();
  }, 2000);

});

// function resolve() {
//   setTimeout(() => {
//     product.status = 'ordered';
//     console.log(product); // { name: 'TV', price: 19000, status: 'ordered' } через 3 сек.
//   }, 1000);
// }

// используем промисы
 req.then(() => {
  console.log('Данные получены');
});
