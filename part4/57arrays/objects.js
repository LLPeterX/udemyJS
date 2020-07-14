'use strict';

const obj = {
  ivan: 'man',
  peter: 'man',
  dog: 'animal',
  cat: 'animal'
};
// задача: создать объект, состоящий только из людей
const newArray = Object.entries(obj); // obj.entries не подходит!
//console.log(newArray); // [ ['ivan','man'],['peter','man'],['dog','animal'],['cat','animal'] ]
// Теперь этот массив можно отфильтровать:
const filteredArray = newArray.filter(prop => prop[1]==='man');
//console.log(filteredArray); // [ [ 'ivan', 'man' ], [ 'peter', 'man' ] ]
// применяем трансформацию массива в объект через map():
const men = filteredArray.map(item => item[0]);
// сокращенный вариант:
let men2 = Object.entries(obj).filter(prop => prop[1]==='man').map(item=>item[0]);
console.log(men2); // [ 'ivan', 'peter' ]

// получить объект, состоящий только из 'man'
let men3=Object.entries(obj)
  .filter(prop => prop[1]==='man')
  .reduce((acc,item) => Object.assign(acc,{[item[0]]: item[1]}),{});
console.log(men3); // { ivan: 'man', peter: 'man' }
