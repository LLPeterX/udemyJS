'use strict';
// свойства класса Promise

// ф-ция test
const test = (time) => {
  return new Promise(resolve => {
    setTimeout(()=> resolve(),time);
  });
};

test(2000).then(()=> console.log('done 2000 ms')); // через 2 сек
test(1000).then(()=> console.log('done 1000 ms')); // через 1 сек
test(100).then(()=> console.log('done 100 ms')); // через 0.1 сек - будет первая!
// Promise.all(). В аргументах массив промисов
console.log('Promise.all()');
const t0 = new Date();
Promise.all([test(2000), test(1000), test(100)])
  .then(()=>console.log('All done',new Date()-t0)); // All done 2000

  //race
  Promise.race([test(2000), test(1000), test(100)])
  .then(()=>console.log('Race done',new Date()-t0)); // Race done 100