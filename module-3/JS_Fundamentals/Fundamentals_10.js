function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  Person.prototype.canDrive = function () {
    return this.age >= 18;
  };
}
//Exercise A
let john = new Person("John", 23);

// Exercise B
let jane = new Person("Jane", 22);

// Exercise C
console.log("John:", john);
console.log("Can John drive?", john.canDrive());
console.log("Jane:", jane);
console.log("Can Jane drive?", jane.canDrive());

// Exercise D
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  // Exercise E
  canDrive() {
    return this.age >= 18;
  }
}

let alice = new PersonClass("Alice", 17);

console.log("Alice:", alice);
console.log("Can Alice drive?", alice.canDrive());
