// Prototype is kinda like a parent object that other object inherit properties, methods from

const car = {
  name: "Ferrari",
  start() {
    return "Starting"
  }
}

// * here everything (name, start() and car too) will have a property called __proto__

console.log(car.__proto__)
console.log(car.name.__proto__)

// * It is a reference to another object from where its inheriting stuff. Like 'name' is a string and it's __proto__ would be a 'String' object where it would inherit .length, .charAt(), .toUpperCase(), etc from. Same with start() and obj.

const vehicle = {
  stop: () => "Stopping"
}

Object.setPrototypeOf(car, vehicle)

//or

car.__proto__ = vehicle

console.log(car.stop())

// * Now 'vehicle' object is a prototype of the 'car' object and can access it properties and methods.

console.log(car.brake()) // undefined

// * It first checks in itself, if not then it's prototype. If still not found then it's prototype's prototype and the chain goes on. This is called prototype chaining.

// ? .prototype is the property of the constructor function that contains all the stuff to be inherited by its instance.

// ? So they are very similar except __proto__ can be access from the instance within any property or method or wtv and .prototype can be accessed by the constructor function.
