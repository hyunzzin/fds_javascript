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

class Person {
  constructor(name) {
    this.name = name;
    const $button = document.querySelector('.btn');
    $button.onclick = this.getName;

    getName = () => {
      // 화살표 함수 내의 this는 상위 객체 즉, Person을 가리킨다.
      // => 화살표 함수는 this가 없기 때문에
      console.dir(this);
      console.log(this.name);
    }
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log('ㅎㅎㅎ');
  }
}
// 부모가 this를 만들어서 자식에게 전달해야 한다.
class Student extends Human {
  constructor(name, grade) {
    // 부모의 name과 자신의 grade 두가지를 가지고 태어남
    super(name);
    this.grade = grade;
  }
}

const student = new Student('Leee', 1);
console.log(student);
console.log(student.speak());