"use strict";

// мы создаем 2 массива: videos и blogs
// а в переменную internet мы хотим закинуть все значения из videos и blogs
const videos = ["youtube.com", "rutube.com", "pornhub.com"],
  blogs = ["instagram", "facebook", "vk"],
  internet = [...videos, ...blogs, 'mamba', 'google'];

console.log(internet); // [ 'youtube.com','rutube.com','pornhub.com','instagram','facebook','vk','mamba','google' ]

// функция с spread-аргументами
function mySum(...args) {
  let sum = 0;
  console.log(args);
  for (let a of args) { // так не работает. Вместо in нужен of
    sum+=a;
  }
  // for (let i = 0; i < args.length; i++) {
  //   sum += args[i];
  // }
  return sum;
}

console.log(mySum(7, 8)); // => 1, а должно быть 2
console.log(mySum(1, 2, 3, 4, 5)); // => 10, а должно быть 15

// spread for object copy 
let obj1 = {
  one: 1,
  two: 2,
  s: {
    s1: 10500,
    s2: 2000
  }
};

let {one, two} = {...obj1};
console.log(two); // 2
let obj2 = {...obj1, two:4};
console.log(obj2); // { one: 1, two: 4 }
obj2.s.s1=0;
console.log(obj2);
console.log(obj1);
