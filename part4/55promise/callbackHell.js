'use strict';
console.log('Запрос данных...');
// Как будто отсылаем запрос на сервер
setTimeout(()=> {
  console.log('Подготовка...');
  // как будто получили с сервера product (через  2 сек)
  const product = {
    name: 'TV',
    price: 19000
  };
  // какая-то асинхронная операция с сервером - 1 сек.
  setTimeout(() => {
    product.status='ordered';
    console.log(product); // { name: 'TV', price: 19000, status: 'ordered' } через 3 сек.
  },1000);

},2000);
