"use strict";

// строки
console.log(String(null)); // "null"
console.log(5+"21"); // "521"

const fontSize = 26+'px'; // "26px"
//Numbers

console.log(Number(null)); // 0
console.log(Number('Строка')); // NaN
console.log(+null); // 0

console.log(parseInt('12.67')); // 12
console.log(parseInt('FF',16)); // 255
console.log(parseInt('16px',10)); // 16

console.log(Boolean(0)); // false
console.log(Boolean(5)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("0")); // true
console.log(Boolean({})); // true
console.log('Неявное преобразование');
console.log(!!'4'); // true
console.log(!!0); // false
console.log(!!!0); // true
