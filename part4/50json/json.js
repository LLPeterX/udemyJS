'use strict';
// JSON

// какой-то объект
const person = {
  name: 'Вася',
  age: 44,
  isBoss: true,
  city: null
};

const json = JSON.stringify(person);
console.log(json); //{"name":"Вася","age":44,"isBoss":true,"address":{"city":"Foo","street":null}}

const vasya = JSON.parse(json); // создает объект vasya
console.log(vasya);

// тест функции replacer - пропускаем свойство city
const json2 = JSON.stringify(person,function(k,v) {
  if(k === 'city') {
    return undefined;
  } else {
    return v;
  }
});
console.log(json2); // {"name":"Вася","age":44,"isBoss":true}

// в JSON включим только свойства name и age
const json3 = JSON.stringify(person, ['name','age']);
console.log(json3); // {"name":"Вася","age":44}

// более глубокий объект
const ivan = {
  name: 'Иван',
  age: 44,
  isBoss: true,
  address: {
    index: 350000,
    city: 'Foo',
    street: null,
    house: 5,
    kv: null
  }
};

// получаем JSON без свойств в глубоком массиве index, street, house, kv
const json4 = JSON.stringify(ivan,function(k,v) {
  if(k === 'index' || k==='street' || k==='house' || k==='kv') {
    return undefined;
  } else {
    return v;
  }
});
console.log(json4); // {"name":"Иван","age":44,"isBoss":true,"address":{"city":"Foo"}}
