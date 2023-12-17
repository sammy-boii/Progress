// Classes are blueprint for creating objects

class Car {
  drive() {
    console.log("Car is moving");
  }
  brake() {
    console.log("Car is not moving");
  }
}
let car1 = new Car(); // 'new' keyword is used to create objects from a class
let car2 = new Car();
car1.drive();
car2.brake();

// drive() brake() are methods of the class Car and car1 and car2 are instance of the class Car.

// In ES6 and later, methods for classes and objects do not require 'function' keyword.

// also the methods are not explicitely stored in the object but they are accesssed from the prototype chain unlike attributes.

class House {
  constructor(color, size) {
    this.color = color; // house1.color = 'red'
    this.size = size; // house1.size = 'big'
  }
  getFurniture() {
    return "sofa";
  }
}
const house1 = new House("red", "big");
const house2 = new House("blue", "small");

console.log(house1.color);
console.log(house1.size);
console.log(house1.getFurniture());

console.log(house2.color);
console.log(house2.size);
console.log(house2.getFurniture());

// constructors are functions that are used for initializing objects. They take parameters from the instances of class and are invoked by the "new" keyword.

var me = {
  name: "Sina",
  talk: function () {
    return "Hello";
  },
};

console.log(me.talk());

var me = {
  name: "Sina",
  talk() {
    return "Hello";
  },
};

//same

console.log(me.talk());

const me = {
  name: "Sina",
  talk() {
    return `Hello I'm ${this.name}`;
  },
};
console.log(me.talk());

/*

'this' refers to the object on which the method is being called

if u omitted 'this' then it would look for a variable called 'name' rather than a property.

*/

function talk() {
  return `I like ${this.name}`;
}
var person1 = {
  name: "Bob",
  talk: talk,
};
const person2 = {
  name: "Simon",
  talk, // same thing as talk: talk
};

console.log(person1.talk());
console.log(person2.talk());

// we can't do talk: talk() cuz that would invoke the function

var obj = {
  name: "Sam",
  age: 12,
};

obj.name = 123;
obj.age = -5;
console.log(obj.name, obj.age);

// Acessing and modifiying them directly is ok but this isn't very encapsulated and customizable and so:

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      console.error("Name is not a string");
    } else {
      this._name = newName;
    }
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      console.error("Age cannot be negative");
    } else {
      this._age = newAge;
    }
  }
}

var person1 = new Person("Sam", 20);

console.log(person1); // {_name: "Sam", _age = "20"}

// *   _ is a way of representing private properties cuz js doesn't support public, private keywords

// getter => access properties
// setter => change / mutate properties

// * when we do person1.name, it's calling the getter function 'name' and modifies the _name property which is only accessible inside the object.

// * same with the setter. It takes a parameter and can perform operations on it and can modify the private property.

// * so person.age, person.name = 'Sam' is calling the correspoding getter and setter function and performing task on the private properties.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

var person1 = new Person("John", 25);
person1.sayHello();

// * This is an older way of doing stuff where 'Person' is a constructor function and since we cannot append methods directly onto it we use .prototype.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("John", 25);
person1.sayHello();

// Factory function is a supposed replacement for the constructor functions.

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function () {
      console.log("Hello, my name is " + this.name);
    },
  };
}

var person1 = createPerson("John", 25);
person1.sayHello();

// It just returns the object with the initialization like a normal function
