// асбстрактный солдат - прототип для остальных солдатов
const Soldier = {
  health: 400,
  armor: 100,
  name: null,
  sayName: function() {
    console.log(this.name); // => имя + undefined
    //console.log("Привет"); // => "Привет" + undefined
  }
};
// конкретный солдат Вася
const vasya = {
  health: 90,
  name: "Вася"
};

vasya.__proto__ = Soldier;
console.log(vasya.sayName()); // выводится две строки - "Вася" и "undefined"