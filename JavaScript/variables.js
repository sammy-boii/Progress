// var is oldschool and can be redeclarable so avoid it

var myVariable1 = "hello world";
var myVariable2 = 123;

// let is reassignable

let a = "hello world";
let b = 123;

b += 1;
b++;

const c = 3.1415;

// c=c+1 not possible

console.log(A);
var A = 5; // undefined

console.log(a);
let A = 5; // Reference Error

console.log(a);
const A = 5; // Reference Error

// * for var, A will get hoisted to the top of its scope and be initialized with undefined. So the declaration gets hoisted as well as the default assingment (undefined)

// * but for let and const, the declaration gets hoisted but it doesn't get the default assignment of 'undefined'. So in a nutshell ReferenceError.

// * normal function gets hoisted but arrow functions don't

func();

function func() {
  console.log(`Ye`);
}

// valid

func();

const func = () => {
  console.log(`Ye`);
};

// error

// ? camelCasing: => myVariable

// ? PascalCasing => MyVariable

// ? snake_casing => my_variable

// ? kebab-casing / hypen-casing => my-variable
