// асбстрактный солдат - прототип для остальных солдатов
const Soldier = {
  health: 400,
  armor: 100,
  name: "солдат",
  sayName: function() {
    console.log(this.name); // => имя + undefined WTF?
    //console.log("Привет"); // => "Привет" + undefined - WTF?
  }
};
// конкретный солдат Вася
// вариант 1 - через setPrortotypeOf

const vasya = {
  health: 90,
  name: "Вася"
};
Object.setPrototypeOf(vasya, Soldier);
vasya.sayName(); // выводится две строки - "Вася" и "undefined"

let igor = Object.create(Soldier);

// igor.health=260;
// igor.name="Игорь";
// igor.armor = 150;
igor = {igor, ...{health: 10500, armor: 200500, name: "Игорь"}};
igor.sayName = function() { console.log(`Все нахуй! Я ${this.name} здоровье ${this.health}`);};
igor.sayName();
console.dir(igor);

