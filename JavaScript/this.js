
// this keyword references the object that is executing the function

let video = {
    title: "Garbage",
    play() {
        console.log(this) // here "this" references the object itself so it logs the object
    }
}

// if a function is part of an object then it is called method

video.stop = function () {
    console.log(this) // just adding another method called stop inside "video" object
}

video.play();
video.stop();

// for regular function "this" references global object which is the window object in browsers

function playBack() {
    console.log(this); // Window {...}
}
playBack();


// In JavaScript, inner functions have access to variables of their outer enclosing functions. This concept is known as lexical scoping or closure. When inner is defined inside outer, it forms a closure. A closure allows the inner function to access variables, parameters, and functions of its outer enclosing function, even after the outer function has finished executing.




const obj = {
    name: 'John',
    regularFunction: function () {
        setTimeout(function () {
            console.log(this.name); // Output: undefined
        }, 100);
    },
    arrowFunction: function () {
        setTimeout(() => {
            console.log(this.name); // Output: John
        }, 100);
    }
};

obj.regularFunction(); 
obj.arrowFunction(); 


// arrow function inherits 'this' value from it's surrounding scope i.e 'obj'

// but regular function inherits from the setTimeout which doesn't have any knowledge of it's surrounding scope "this" value gets set to global and there is no name property in global scope so undefined


const objs = {
    name: 'John',
    regularFunction: function() {
      console.log(this.name); // Output: John
    },
    arrowFunction: () => {
      console.log(this.name); // Output: undefined
    }
  };
  
  obj.regularFunction(); 
  obj.arrowFunction(); 

  
  // regular function is called as a method of the object "objs" so "this" value will be John

  // arrow function's outer scope is 'objs' which is defined globally ig...? so undefined

  // in short arrow function use lexical scoping so its different


  // this gets binds to the object calling the function in a normal function but in an arrow function this gets bind to the window object. So don't use this and arrow function together.

  // if u call a function with 'this' keyword or just use it in a global scope then its value will be window object but in strict mode it'll be undefined