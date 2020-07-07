'use strict';

class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  perimeter() {
    return this.width*2 + this.height*2;
  }

  square() {
    return this.width*this.height;
  }
}

const rect = new Rectangle(3,4);
console.log(rect.perimeter()); //14
console.log(rect.square()); // 12

// наследование квадраата от прямоуольника
// мы игнорируем height и делаем его равным width
class Square extends Rectangle {
  constructor(w, text) {
    super(w,w);
    this.text = text; // собсвенное свойство
  }
  square() { // переопределение родительского метода square()
    return this.width**2;
    //return 1;
  }
}
const sq = new Square(50,"FooBar");
console.log(sq); //Square { width: 50, height: 50 }
console.log(sq.square()); // 2500
console.log(sq.perimeter()); //200 - метод родительского класса Rectangle

