'use strict';
const div = document.querySelector('.date');
const now = new Date();
console.log(now); // Fri Jul 03 2020 14:54:03 GMT+0300 (Москва, стандартное время)
console.log(now.getDay()); //5 - пятница
const date1 = new Date('2020-07-02');
console.log(date1); // Thu Jul 02 2020 03:00:00 GMT+0300 - время 03:00 т.к. по гринвичу
const date2 = new Date(2020,6,2,20);
console.log(date2); // Sun Aug 02 2020 14:00:05 - месяцы с нуля!!!. Время по гринвичу
console.log(date2.toLocaleDateString()); // 02.07.2020
const date0 = new Date(0);
//console.log(date0); // Thu Jan 01 1970 03:00:00 GMT+0300
//div.innerHTML = date0;
// ниже не работает в консоли VSCode
const date3 = new Date(Date.parse('03.07.2020'));
console.log('new date:',date3); // Fri Jul 03 2020 14:00:00 GMT+0300

// замерение времени работы части скрипта:
let timeStart = new Date();
// какой-то сложный код
for(let i=1; i<600000; i++) {
  //Math.sqrt(i);
  let some = i ** 3;
}
let  timeEnd=new Date();
console.log(`difference: ${timeEnd-timeStart}`);