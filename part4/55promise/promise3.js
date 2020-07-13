'use strict';
// Промис внутри другого промаиса
console.log('Запрос данных...');
// создаем "обещание"
const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Подготовка...');
    const product = {
      name: 'TV',
      price: 19000
    };
    resolve(product);
  }, 2000);

});

// Промис внутри другого промиса
 req.then((p) => { // p - это аргумент product в resolve(product)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        p.status = 'ordered'; // { name: 'TV', price: 19000, status: 'ordered' }
        console.log(p);
        resolve(p);
      }, 1000);
    });
}).then(data => {
  data.status='processed';
  console.log(data); // { name: 'TV', price: 19000, status: 'processed' }
  return data;
}).then((newData) => {
  newData.status='received';
  console.log(newData); // { name: 'TV', price: 19000, status: 'received' }
});
// Output:
//Запрос данных...
//Подготовка...
//{ name: 'TV', price: 19000, status: 'ordered' }