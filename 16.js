console.log(Object()); // {}, new를 빼면 붙여준다.
console.log(new Object()); // {}, 이게 정석

// object 생성자는 빈 객체를 만든다.

// const obj = new Object('hello');
// // obj.a = 1;
// // obj.b = 10;
// console.log(obj, typeof obj);

// string은 분명 원시값인데 string 객체가 있다?, 원시값이 있고 거기에 대응하는 객체가 있다.?
// const str = 'hey';
// 원시값을 순식간에 객체 타입으로 확 바꾼다, 기본 string형이라는 것은 바뀌지 않음

// string 객체를 만들고 싶다? -> String 생성자 함수



// refer객체 : 원시값 타입을 객체로 바꾼다.
// 문자열을 숫자열로 바꿔주는 생성자 함수
// new를 붙이면 원시값을 반환
const obj = Number('123');
// obj.a = 1;
// obj.b = 10;
console.log(obj, typeof obj);

const empty = {}; // 이걸로 만들어라!
const empty = Object(); // 쓰지 말 것!


const empty = new Object(); // 생성자 함수가 만들어낸 함수는 인스턴스라고 부른다.