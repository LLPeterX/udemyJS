"use strict";

let arr = [2,5,1,2,8,6]; // числовой массив
arr.pop();
arr[10]=11;
//arr.forEach((item) => item*2); // так не работает!
arr.forEach((item,i) => console.log(`${i} = ${item}`));
// for (let e of arr) {
//   console.log(e);
// } 
//let str="Вася, Петя, Коля";
let arr2 = "Иванов Сергей Петрович".split(" "); // => [ 'Иванов', 'Сергей', 'Петрович' ]
console.log(arr2);
arr.sort();
console.log(arr);
arr.sort((a,b) => a-b);
console.log(arr);
