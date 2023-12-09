   
// Prototype is kinda like a parent object that other object inherit properties, methods from

let car = {
    run: () => 'Running'
};

let honda = {
    name: 'Honda',
    price: 15000
};

Object.setPrototypeOf(honda, car);

//or

honda.__proto__ = car;

console.log(honda.run());

// honda is a an object that has car as its prototype.