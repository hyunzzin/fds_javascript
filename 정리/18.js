// function Person(name) {
//   this.name = name;
//   this.getName = function () {
//     return this.name;
//   }
// }

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return this.name;
};

const me = new Person("Lee");
me.__proto__.setName = function() {
  return "set " + this.name;
};
const you = new Person("Kim");

console.log(me.getName());
console.log(you.__proto__.setName());
