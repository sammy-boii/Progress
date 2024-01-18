// * Remember how BHS, every was done using new Object, new String, etc...

// * Literal is the simple representation of those fixed values like below:

var num = 42 // Numeric / Integer Literal

var str = "Hi" // String Literal

var obj = { a: 1 } // Object Literal

var arr = [1, 2] // Array Literal

var bool = true // Boolean Literal

let a = -5
typeof a

// number

let b = "hi"
typeof b

// string

let c = false
typeof c

// boolean

let d = 12.21
typeof d

// number

// there's no float in js

// default value is undefined

console.log(message) // Output: undefined
var message = "Hello, hoisting!"

/*

!  variable declaration are hoisted up but not the assignment
!  normal function's declaration and definition both are hoisted but arrow function's declaration is only hoisted


* Truthy values: true, non empty arrays, non null objects, non zero numbers, non empty strings....
* Falsey values: false, 0, null, undefined, "", NaN...


! TYPES OF ERROR

?   1. Reference Error: using an undeclared variable
?   2. Syntax Error: Invalid Javascript
?   3. Type Error: When the variable is not of valid type like using toUpperCase in a number | obj.prop1()

TODO: Note: if u do Number('hello') then u will get NaN instead of TypeError

! ERROR HANDLING

* when a user tries to post something in their social media and the intrenet goes out 'please try again when internet is available' is proper error handling else the whole app crashes


*/

try {
  var num = 20
  num.toUpperCase()
} catch (error) {
  console.log(error instanceof TypeError) // true if the error is an instance of TypeError class
  console.log(error.message) //  num.toUpperCase() is not a function
}

/*

?   Synchronous Program: you must complete the current task before moving on to the next
?   Asynchronours Program: doesn't wait for task to complete like SetTimeout, promise, etc


TODO:    Interpreter interprets the code line by line. IDLE, the web console (kinda) , etc...
TODO:    Compiler compiles the whole code at once creates a seperate executable file. 


! Tokens are like the smallest unit that make up the syntax of a programming language.

*/
total = 10 + 5
/*

! It can be broken down into the following tokens:

*  total = identifier
*  '='   = operator
*  10    = literal
*  5     = literal

! Identifiers are the name given to user-defined entities like variables, functions, classes, etc.

?  Parsing refers to the process of analyzing the code and to break it down and produce something meaningful for the computer to understand.

?  Before parsing, the code is passed to a lexer where lexical analysis occurs which finds the tokens in the code.

? After that the parser takes the stream of tokens and analyzes their arrangement according to the grammatical rule of the programming language and produces a meaningful syntactical relationship.

? It can also perform error handling 

? After all this an AST (Abstract Syntax Tree) is produced which represents the hierarchical syntax strucuture of the program. It serves as an intermediate for compilers and interpreters to convert the code into machine code.

? When HTML is being parsed it'll download the images, etc asynchronously while parsing but when it reaches the script tag the parsing will stop, javascript will be downloaded and run and finally continue parsing

? This can cause the long load time for large files to be long so..

<script defer src = "script.js"> </script>
<script async src = "script.js"> </script>

? Async will download javascript asynchronously but when javascript runs it'll stop the parsing. The script which is downloaded the fastest will run first so it can mess up the order

? Defer will also download asynchronously but javascript will only run when the parsing is complete. So most useful

?  usually code is parsed in the order: html -> css -> javascript. But if they are all in the same file then it's sequentially.

? primitive datatypes are passed by values so a copy of the variable is passed into a function causing the value of the variable not be changed unless returned unlike non-primitive datatypes where their reference is passed so modifying it in the function will directly affect the original value too.

*/

function myAge(age) {
  age += 1
}
const age = 10
myAge(age)

// ? age will still be 10 but

function MyAge(me) {
  me.age += 1
}
const me = { age: 10 }
MyAge(me)

//? age will be 11

string = "Hi"
obj = { name: "Harry", age: 12 }

let ask = confirm("Are you sure")
console.log(ask)

// displays msg like alert in yes / no format and returns true / false

// ? Strict mode removes unwanted or unusual behaviours of the language. Sometimes it's better than normal mode.
;("use strict")

// It's already opt-in

const person = {
  name: "Rahul",
  class: 12
}
let idk = `thank you`
console.log(
  `My name is ${person.name} and I am in class ${person.class} ${idk}`
)

// This format is called Templete Literals and they use back ticks

// back ticks are also used for multi line strings

var multilineString = `
This is a
multiline
string.
`

var multilineString = "This is a\n" + "multiline\n" + "string."

try {
  var num = 20
  num.toUpperCase()
} catch (error) {
  console.log(error instanceof TypeError)
  console.log(error.message)
}

// ? Destructuring happens with objects and arrays:

const arr = [1, 2, 3]

const [first, second, third, fourth] = arr

console.log(first) //  1
console.log(second) //  2
console.log(third) //  3
console.log(fourth) // undefined

const obj = {
  name: "Alice",
  Age: 25,
  address: {
    city: "Wonderland",
    country: "Neverland"
  }
}

const {
  name,
  Age,
  AGE,
  address: { city, country }
} = obj

console.log(name) // Alice

console.log(Age) // 25

console.log(city) // Wonderland

console.log(country) // Neverland

console.log(address) // ReferenceError

console.log(AGE) // undefined

const numbers = [1, 2, 3, 4, 5]

const [x, ...y] = numbers

console.log(x) // 1
console.log(y) // [2, 3, 4, 5]

// * Set is unique collections of data like strings and arrays.

const set = new Set([1, 2, 3, 4, 4, 5, 5, 1])

// Set(5) [1,2,3,4,5]

set.has(1) // true
set.add("h")
arr.delete(4)
set.clear() // deletes everything

const arr = Array.from(set) // converting back to array

//* Symbols are primitive datatype that are guaranteed to be unique. Usually used as keys

const symKey = Symbol("uniqueKey")

// Symbols are created using factory function rather than a constructor function so no need to use 'new' keyword.

// Reminder: Factory function returns an object itself rather than creating a new instance of a class.

const mySymbol = Symbol("mySymbol")

// Using the Symbol as a property key
const myObject = {
  a: 1,
  [mySymbol]: "value1"
}

console.log(myObject[mySymbol])

const sym1 = Symbol("hi")
const sym2 = Symbol("hi")

console.log(sym1 == sym2) // false

let obj = { a: 1, b: 2, b: 3 } // {a:1,b:3}

// with symbols u can have two properties as  Symbol('b') cuz they are technicaly unique

// It is a data structure similar to objects except it can have keys and values of any datatypes including objects

// let obj = {{a:1}:1, b:1} not valid

//* Maps are similar to objects with very verstatile keys including objects

let myMap = new Map()

myMap.set("key1", "value1")
myMap.set(2, "value2")
myMap.set({ name: "John" }, "value3")

console.log(myMap.get("key1")) // u can't .get() from values
console.log(myMap.get(2))

console.log(myMap.has("key1"))

// Iterating through the Map
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`)
})

console.log(map)

const num = 10.523342
console.log(num.toFixed(2)) // 10.52
console.log(num.toFixed()) // 11

// The statement "everything is an object".

const num = new Number(10) // explicit-boxing
const num = 10 // auto-boxing

num1.text = "hi"
num2.text = "hi"

console.log(typeof num1) // number
console.log(typeof num2) // object

console.log(num1) // 10
console.log(num2) // Number {10, text: 'hi'}

console.log(num1 + num2) // 20

// the reason num1.text doesn't thrown an error because whenever we use methods or properties on primitve values, it is temporarily wrapped with the respective wrapper function Number(), Boolean(), String() etc... and starts behaving as an object.

// after the completion of the operation, its converted back to the primitive value and the applied property doesn't persist.

// that's why the type shows as number or string or boolean and not object.

// * Iterables are anything that be iterated over using loops and such. They have an iterable protocol where a [Symbol.iterator]() method is present. That method has a next() method which decides its next value to be iterated over in a loop. Strings, arrays, objects, sets, etc...

//* Enumerable properties in JavaScript are properties of an object that can be iterated through. These properties can be accessed using iteration methods such as Object.keys(obj), Object.values(obj), or by iterating over the indexes of an array (arr[i]

console.log(Object.keys(obj)) // array of keys
console.log(Object.values(obj)) // array of values
console.log(Object.entries(obj)) // nested array of keys and values
