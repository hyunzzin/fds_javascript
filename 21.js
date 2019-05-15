// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
//   return 2 * this.radius;
// };

// const circle = new Circle(5);
// console.log(circle.getDiameter());

// this 호출 위치
// console.log(this);

// function square(number) {
//   console.log(this);
//   return number * number;
// }
// square(2);

// const person = {
//   name: 'Lee',
//   getName() {
//     console.log(this);
//     return this.name;
//   }
// };
// console.log(person.getName());

// function Person(name) {
//   console.log(this);
//   this.name = name;
// }
// const me = new Person('Lee');

// const foo = function () {
//   console.dir(this);
// }
// const instance = new foo();

// function foo() {
//   'use strict';
//   console.log("foo's this: ", this);

//   function bar() {
//     console.log("bar's this: ", this);
//   }
//   bar();
// }
// foo();

// var value = 1;
// // console.log(global.value);

// const obj = {
//   value: 100,
//   foo() {
//     console.log("foo's this: ", this);
//     console.log("foo's this.value: ", this.value);

//     function bar() {
//       console.log("bar's this: ", this);
//       console.log("bar's this.value: ", this.value);
//     }
//     bar();
//   }

// };
// obj.foo();

// var value = 1;

// 일반 함수 호출에서 전역객체를 this로 갖는 경우를 node.js 환경에서 실행할 때는 왜 undefined가 나오는가?
// const obj = {
//   value: 100,
//   foo() {
//     console.log("foo's this: ", this);

//     setTimeout(function () {
//       console.log("callback's this: ", this);
//       console.log("callback's this.value: ", this.value);
//     }, 100);
//   }
// };

// obj.foo();

// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     const that = this;

//     setTimeout(function () {
//       that.value = 10;
//       console.log(obj.value);
//     }, 100);
//   }
// };
// obj.foo();
// console.log(obj.value);

// const person = { // 런타임 이전에 생성됨, 프로토타입도 같이 생성
//   name : 'Lee',
//   sayHi(){ // 메소드 축약 표현을 써야 함
//     console.log('Hello! ${person.name}.');
//   } 
// };

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return console.log('Hello! ${this.name}.');
}

const me = new Person('Lee');