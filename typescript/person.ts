// person.ts
// export class Person {
//   protected name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHello() {
//     return "Hello, " + this.name;
//   }
// }

// person.js
class Person {
  name: string;
  constructor(name) {
    // 클래스 프로퍼티의 선언과 초기화
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}