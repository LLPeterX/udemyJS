'use strict';

const names = ['Вася','Миша','Николай','Анатолий','АНЯ']; 

// filter(): отобрать "корткие" имена - т.е. те, у которых длина <5
const shortNames = names.filter((name)=> {
    return name.length<5;
});
console.log(shortNames); // [ 'Вася', 'Миша', 'АНЯ' ]

// map(): преобразуем все в нижний регистр
const lowers = names.map(name => name.toLowerCase());
console.log('map()',lowers); // [ 'вася', 'миша', 'николай', 'анатолий', 'аня' ]

// some(): проверить, есть ли в массиве элементе длинее 6 символов
const isLong = names.some(name => name.length>6);
console.log('some():',isLong); // true

// every(): проверить, что все первые буквы lowers строчные
let isAllLowers = lowers.every(name => name.charAt(0)>='а' && name.charAt(0)<='я');
console.log('every():',isAllLowers); // true
//lowers.push('Женя'); // добавляем элемент с прописной буквой
//isAllLowers = lowers.every(name => name.charAt(0)>='а' && name.charAt(0)<='я');
//console.log(isAllLowers); // false

// reduce(). Просуммировать длины строк
const res = names.reduce((sum, elem) => {
  return sum + elem.length;
},0);
console.log('Sum:',res); // 26
// Использование reduce() для склейки массива:
const merged = names.reduce((accum, elem)=> `${accum},${elem}`);
console.log(merged); // Вася,Миша,Николай,Анатолий,АНЯ
