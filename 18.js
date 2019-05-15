function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  }
}


function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Lee');
const you = new Person('Kim');