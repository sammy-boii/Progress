let a = 5
typeof a;

// number

let b = 'hi';
typeof b;

// string

let c = false;
typeof c;

// boolean

let d = 12.21
typeof d;

// number there's no float in js

// default value is undefined

// === is preferred over == cuz yk why but don't really matter

console.log(message); // Output: undefined
var message = 'Hello, hoisting!';

// in this instance it doesn't say error cuz message variable is declared even though its later in the program, it gets hoisted up during compilation but assignment takes place later so it prints undefined :>

// same reason for function. function definition are hoisted to calling them before declaration is totally fine

/*

! TYPES OF ERROR

?   1. Reference Error: using an undeclared variable
?   2. Syntax Error: Invalid Javascript
?   3. Type Error: When the variable is not of valid type like using toUpperCase in a number | obj.prop1()

TODO: Note: if u do Number('hello') then u will get NaN (primitive datatype) instead of TypeError

! ERROR HANDLING

* when a user tries to post something in their social media and the intrenet goes out 'please try again when internet is available' is proper error handling else the whole app crashes


*/

try {
    var num = 20;
    num.toUpperCase();
}
catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.message);
}

/*


* try contains that error and catch catches it into a parameter
* true
* num.toUpperCase() is not a function

*/

/*

?   Synchronous Program: you must complete the current task before moving on to the next
?   Asynchronours Program: doesn't wait for task to complete like SetTimeout, promise, etc

*/




/*


TODO:    Interpreter doesn't need to translation and executes it during runtime
TODO:    Compiler creates a seperate executable file where the codes are translated so it understands it

?  Parsing refers to the process of analyzing the codes to see what tokens syntax etc are used to determine how they            should be handled, executed, etc....

?  During parsing Abstract Syntax Tree is created. AST represents the hierarchical structure of the code and captures the relationships between different elements such as keywords, variables, functions, operators, and statements.


? When HTML is being parsed it'll download the images, etc in the background while parsing but when it reaches the script tag the parsing will stop, javascript will be downloaded and run and finally continue parsing

? This can cause the load time for large files to be long so..

<script defer src = "script.js"> </script>
<script async src = "script.js"> </script>

? Async will download javascript in background but when javascript runs it'll stop the parsing. The script which is downloaded the fastest will run first so it can mess up the order

? Defer will also download in background but javascript will only run when the parsing is complete. So most useful

*/


var obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);

console.log(entries);
// Output: [ ["a", 1], ["b", 2], ["c", 3] ]


var obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);

console.log(keys);
// Output: [ "a", "b", "c" ]


// u can add, remove and modify elements in an immutable array but not objects.

const array = [...orgarr, 4, 5, 6];
array.push(5);

// valid

const object = {name: 'sam', age: 12,};
object.location = 'UK';
object.name = 'sam';

// not valid

// ?  usually code is parsed in the order: html -> css -> javascript. But if they are all in the same file then it's sequentially.

// ? primitive datatypes are passed by values so a copy of the variable is passed into a function causing the value of the variable not be changed unless returned unlike non - primitive datatypes where their reference is passed so modifying it in the function will directly affect the variable too. 

function myAge(age){
    age += 1
}
const age = 10
myAge(age)

// ? age will still be 10 but

function MyAge(me){
    me.age += 1
}
const me = {age: 10}
MyAge(me)

//? age will be 11


// object literal, string literal means simple syntax that creates object, strings instead of using class, constructors, etc.

string = 'Hi'
obj = {name: 'Harry', age: 12}


let ask = confirm("Are you sure")
console.log(ask)

// displays msg like alert in yes / no format and returns true / false

// ? Strict mode removes unwanted or unusual behaviours of the language. Sometimes it's better than normal mode. 


function print(){
    console.log(x);
    var x =10;
  }
  
  print()


  function print(){
    console.log(x);
    let x = 10;
  }
  
  print()

// we know it gets hoisted and prints undefined but for let and const it prints ReferenceError even thought it is declared. 

var x = 5;
function print(){
  console.log(x);
  var x =10;
}
print()

// here x is redeclared inside the function so it'll create it's own x which will print undefined.


// 'get' and 'set' are special keywords used to define getter and setter methods

const person = {
  firstName: 'Sam',
  lastName: 'Bam',
  fullName () {
    return `${person.firstName} + ${person.lastName}`
  }
}

console.log(person.fullName())

// the thing with this method is that it's not customizable.

person.fullName = 'John Smith' // not valid

// getters => access properties
// setters => change / mutate properties

const person = {
  firstName: 'Sam',
  lastName: 'Bam',
  get fullName () {
    return `${person.firstName} + ${person.lastName}`
  },
  set fullName (newName) {
    const arr = newName.split(' ') // splits the string where there is space into two elements
    this.firstName = arr[0]
    this.lastName = arr[1]
  }
}

person.fullName = 'John Smith'

console.log(person.fullName) // no need parathesis

// Another one: 

const user = {
  _name: '',
  
  get name() {
    return this._name 
  },
  set name(n) {
    this._name = n  //  setting name to n => 'Sam'
  }
}

user.name = 'Sam'  // setter function is called

console.log(user.name)   // getter function is called

// We initialized a private variable called '_name' because if we use 'name' then it'd call the getter and setter function is called depending on the operation.

// using _ is a convention cuz JS doesn't support keywords for private, public, etc...


obj = {
  username: 'john',
  age: 12
}

const {username} = obj  // destructuring 

// const username = 'john'