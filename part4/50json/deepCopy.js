'use strict';
const ivan = {
  name: 'Иван',
  age: 44,
  isBoss: true,
  showName: function() {
    console.log(this.name);
  },
  address: {
    index: 350000,
    city: 'Foo',
    street: null,
    house: 5,
    kv: null
  }
};
const vasya = JSON.parse(JSON.stringify(ivan)); // так норм
const petya = Object.assign({},ivan); // поверхностная копия! petya.address.xxx = ivan.adddress.xxx

vasya.name='Вася';
vasya.address.street="Переулок";

petya.name="Петя"; 
petya.address.street='ул. Улица'; // меняет улицу в  оригинальном объекте ivan!

console.log('Ivan:',ivan); // ОК, но newIvan.address.street меняет улицу в адресе
console.log('Copy of Ivan:',vasya); // ОК. уже Вася с Переулком
console.log('New Ivan:',petya); // name Петя, улица OK. 

