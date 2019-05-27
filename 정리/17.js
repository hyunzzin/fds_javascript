const obj = {
  a: 1
};

Object.getOwnPropertyDescriptor(obj, 'a'); // propertydescriptor 객체를 반환

obj.hasOwnProperty('a'); // true

console.log(obj.__proto__ === Object.prototype); // true