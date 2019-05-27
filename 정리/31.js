// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   sayHi() {
//     console.log(`Hi! ${this._name}`);
//   }
// }

// const me = new Person('Lee');
// me.sayHi();

// console.log(me instanceof Person);

class Circle {
  constructor(radius) {
    console.log(this);
    this.radius = radius;
    console.log(this);
  }

  getArea() {
    return Math.PI * (this.radius * this.radius);
  }

}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius); // 얘를 안쓰면 this를 참조할 수 없음, super가 this를 가져옴
    console.log(this);
    this.height = height;
    console.log(this);
  }
}

const cylinder = new Cylinder(5, 10);