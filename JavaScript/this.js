// this keyword references the object that is executing the function

// by default this references the window object

function talk() {
  return this;
}

// returns Window object

let video = {
  title: "Garbage",
  play() {
    console.log(this); // here "this" references the object itself so it logs the object
  },
};

// if a function is part of an object then it is called method

video.stop = function () {
  console.log(this); // adding another method called stop inside "video" object
};

video.play();
video.stop();

// In JavaScript, inner functions have access to variables of their outer enclosing functions. This concept is known as lexical scoping or closure. When inner is defined inside outer, it forms a closure. A closure allows the inner function to access variables, parameters, and functions of its outer enclosing function, even after the outer function has finished executing.

const obj = {
  name: "John",
  regularFunction: function () {
    setTimeout(function () {
      console.log(this.name); // Output: undefined
    }, 100);
  },
  arrowFunction: function () {
    setTimeout(() => {
      console.log(this.name); // Output: John
    }, 100);
  },
};

obj.regularFunction();
obj.arrowFunction();

// arrow function inherits 'this' value from it's surrounding / lexical scope i.e arrowFunction. IDK just go with it

// but regular function gets its 'this' value based on how the function is called. Here it's called by setTimeout() so 'this' value is set to the global object / Window. and window doesn't have a name prop so undefined.

const objs = {
  name: "John",
  regularFunction: function () {
    console.log(this.name); // Output: John
  },
  arrowFunction: () => {
    console.log(this.name); // Output: undefined
  },
};

obj.regularFunction();
obj.arrowFunction();

// regular function is called as a method of the object "objs" so "this" value will be John

// arrow function's outer scope is obj but it doesn't technically get binded to it cuz its not a function so it gets binded to the Window object...

// In a nutshell, don't use 'this' and arrow function together.

function talk() {
  return `${this.name} is talking`;
}

obj = { name: "Qoli" };

talk.bind(obj);

// .bind() binds the 'this' value of a function to the paramter and returns the newly binded function

// so the 'talk' function's 'this' value is binded to 'obj'

const meTalk = talk.bind(obj);

meTalk(); // "Qoli is talking"

talk.call(obj); // immediately invokes it rather than returning the function

talk.bind(obj)(); // IIF

function shout(isLoud, source) {
  if (isLoud) return `${this.name} is shouting with a ${source}`;
}

shout.bind(obj, true, "speaker")();
shout.bind(obj, true, "speaker");
