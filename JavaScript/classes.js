// Classes are blueprint for creating objects

class Car {
    drive() {
        console.log("Car is moving");
    }
    brake() {
        console.log("Car is not moving");
    }
}
let car1 = new Car();  // 'new' keyword is used to create objects from a class
let car2 = new Car();
car1.drive();
car2.brake();

// no need to write function when defining a function as a method of object or class

// drive() brake() are methods of the class called Car and car1 and car2 are objects created from that class

class House {
    constructor(color, size) {
        this.color = color;     // house1.color = 'red'
        this.size = size;      // house1.size = 'big'
    }
    getFurniture() {
        return 'sofa'
    }
}
const house1 = new House('red', 'big');
const house2 = new House('blue', 'small');

console.log(house1.color);
console.log(house1.size);
console.log(house1.getFurniture());

console.log(house2.color);
console.log(house2.size);
console.log(house2.getFurniture());


// constructors are special functions that are used for initializing objects. They take parameters from the instances of class and are invoked by the "new" keyword.

var me = {
    name: 'Sina',
    talk: function () {
        return 'Hello';
    }
};

console.log(me.talk());

var me = {
    name: 'Sina',
    talk() {
        return 'Hello';
    }
};

//same

console.log(me.talk());

const me = {
    name: 'Sina',
    talk() {
      return `Hello I'm ${this.name}`;
    }
  };
  console.log(me.talk());

/*

if u just did name it'd throw an error

it's name: Sina not name = Sina so u can't access it normally without referencing its object

*/

function talk()
{
    return `I like ${this.name}`;
}
const person1={
    name: 'Bob',
    talk: talk
}
const person2={
    name: 'Simon',
    talk             // same thing as talk: talk
}

console.log(person1.talk());
console.log(person2.talk());

// we can't do talk: talk() cuz that would invoke the function and when doing so it won't be bound to any object so 'this' will be undefined so when u invoke the function, make sure it is bound to an object or 'this' ain't gonna work..... >_>