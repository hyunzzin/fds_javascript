// const parent = {
//   a: 1
// };

// const child = Object.create(parent); // 객체를 만드는데 인수를 prototype으로 가지는 객체를 만들어라

// console.log(child);
// console.log(child.a);

// const child2 = Object.create(null);
// // 프로토타입 체인상 홀로 존재, 아무것도 상속받지 못함
// console.log(child2);


// foo가 안가질 확률이 높음
// var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");
// hasOwnProperty가 object의 prototype 메소드이니까 this가 호출한 Object.prototype을 가리킴 , this => foo가 Object.prototype이니까 Object.prototype가 foo로 바뀐다.
// 호출은 됨


// const foo = function(){
//   console.log(x);
// }

// Object.prototype.x = 1;

// foo();

// let todos = [{ id: 1, content: 'HTML', completed: true },
// { id: 2, content: 'CSS', completed: true },
// { id: 3, content: 'Javascript', completed: false }
// ];

// todos = todos.map(function (item) {
//   return { ...item, completed: false };
// });

// console.log(todos);

function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

const arr = [1, 2, 3];

foo.apply(null, arr);
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// const arr = [1, 2, 3];

// ...[1, 2, 3] = [1, 2, 3] → 1, 2, 3
foo(...arr);