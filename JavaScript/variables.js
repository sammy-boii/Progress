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

// yourFirstVariable -> this is camel case (HIGHLY RECOMMENDED)
 
var flag1 = new Boolean(false); 
var flag2 = false;


/*
 first is an object second is boolean so flag1 === flag2 (false) flag == flag2 (true)
 method is something like .toUpperCase it basically does stuff to data of the object
 'some string'.toUpperCase() => 'SOME STRING'
 now u might say that is a primitive string so how is a method working on a non object but behind the scenes it gets wrapped in an object like the first example so the method is able to perform its function so in a nutshell everything is an object
*/

function scope()
{
for (let i=0; i< number.length; i++)
{
    i++;
}
console.log(i);
}

// this is an error cuz i is considered a local variable inside the loop even though it's inside a function

const myage = 25;
if (true)
{
    const myage = 20;
    console.log(myage); // 20
}

//  this works.... and it's called variable shadowing. ik i hate this shi as well

const person = {
    name: "Rahul",
    class: 12
}
let idk = `thank you`;
console.log(`My name is ${person.name} and I am in class ${person.class} ${idk}`);


// Templete Literals use back ticks 

// back ticks are also used for multi line strings


var multilineString = `
This is a
multiline
string.
`;

var multilineString =
  "This is a\n" +
  "multiline\n" +
  "string.";

  try {
    var num = 20;
    num.toUpperCase();
}
catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.message);
}


console.log(A);
var A = 5             // undefined

console.log(a);
let A = 5            // Reference Error

console.log(a);
const A = 5         // Reference Error


// so the declaration gets hoisted in all cases right but for var it will be initialized as undefined and for let and const it'll be in temporal dead zone meaning Reference Error... idk... just different behavior

// and var a = 5; var a = 6 is possible / redeclarable meanwhile others ain't

// in const we can reassign the property or elements tho.. 

const Variable = {name: 'Bob'};
Variable.name = 'Sally';


// 5 == '5' (true) cuz js converts the string into an int idfk
// 5 === '5' (false)