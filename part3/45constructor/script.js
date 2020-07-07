'use strict';

function User(id, name) {
  // this={}; // неявно создается пустой объект this
  this.id = id;
  this.name = name;
  this.isHuman = true;
  this.hello = function() {
    console.log(`Привет, ${this.name}`);
  };
  // return this; // неявно возвращается объект this
}

const vasya = new User(1,"Вася");
const petya = new User(2,"Петя");
console.log(petya); // User { id: 2, name: 'Петя', isHuman: true }
console.log(petya.name); // "Петя"
petya.hello(); // "Привет, Петя";
vasya.hello(); // "Привет, Вася"
//vasya.bye(); // Uncaught TypeError: vasya.bye is not a function - как и должно быть
// добавление свойства или метода
User.prototype.bye = function() {
  console.log(`Гуляй, ${this.name}!`);
};
vasya.bye(); // "Гуляй, Вася". Верно, хотя vasya создан ДО создания User.bye()

