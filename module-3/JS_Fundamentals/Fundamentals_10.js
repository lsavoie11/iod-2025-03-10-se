function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  Person.prototype.canDrive = function () {
    return this.age >= 18; // Returns true if age is 18 or older
  };
}

let john = new Person("John", 23); // First person
let jane = new Person("Jane", 22); // Second person

// c) Print out the properties of each person object
console.log("John:", john);
console.log("Can John drive?", john.canDrive());
console.log("Jane:", jane);
console.log("Can Jane drive?", jane.canDrive());

// d) Rewrite the constructor function as a class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  // e) Add a canDrive method to the class
  canDrive() {
    return this.age >= 18;
  }
}

let alice = new PersonClass("Alice", 17);

console.log("Alice:", alice);
console.log("Can Alice drive?", alice.canDrive());
