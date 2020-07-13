'use strict';
// reject
console.log('Запрос данных...');
// основной промис
const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Подготовка...');
    const product = {
      name: 'TV',
      price: 600
    };
    if(product.price<=0) {
      console.log('Bad price');
      reject();
    }
    resolve(product); 
  }, 2000);
});

// Использование промиса внутри другого промиса
 req.
 // промис #1
 then((p) => { // p - это аргумент product в resolve(product)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        p.status = 'ordered'; // { name: 'TV', price: 19000, status: 'ordered' }
        if(p.status!='ordered') {
          console.log('Order: bad status'); // работает при неверном p.status
          reject();
          return;
        }
        console.log('Ordered: ',p);
        resolve(p);
      }, 1000);
    });
})
// промис #2  
.then((data) => {
  data.status='processed';
  // if(data.status!='processed') {
  //    reject(); // откудя взять reject() ?
  //    return;
  // }
  console.log('Proc: ',data); // { name: 'TV', price: 19000, status: 'processed' }
  return data;
})
.then((newData) => { // newData = data родительского promise
  newData.status='received';
  console.log(newData); // { name: 'TV', price: 19000, status: 'received' }
})
.catch(()=> console.log('error occured'))
.finally(() => console.log('Done'));
