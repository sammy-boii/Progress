// * Arithmetic Operators:

a + b
a - b
a * b
a / b
a ** b
a % b
a ^ b // bitwise XOR operation

// * Assignment Operators

let x
x += 5
x = x + 5

x -= 5
x = x - 5

x /= 5
x = x / 5

x *= 5
x = x * 5

x++
x = x + 1

x--
x = x - 1

x = 10
y = "10"

// * Logical Operator:

x == y
x === y

x != y
x !== y

console.log(undefined || 0 || 2 || 1) // returns the first truthy value : 2

console.log(undefined && 0 && 2 && 1) // returns the first falsey value : undefined

console.log(1 && "yellow") // if first value is truthy then it'll return whatever is the next value

// yellow

if ((a > b && b < a) || (b > a && b < a)) console.log("yellow")

console.log(!(20 === 20)) // false

// * Membership Operator:

// Checks if a property exists in an object or an index exists in an array

const obj = { key1: 1 }
const arr = ["a", "b", "c"]

console.log("key1" in obj) // true

console.log(1 in arr) // true
console.log(3 in arr) // false

// to check for the actual value:

console.log(arr.includes("a")) // true

// * Difference between == and ===

// For primitive,

a = 5
b = "5"

a == b // true cuz values are equal
a === b // false cuz datatypes are different

// For non primitive,

const obj1 = { a: 1 }
const obj2 = { a: 1 }

obj1 == obj2 // false cuz different reference
obj1 === obj2 // false cuz different reference

obj3 = obj1

obj3 == obj1 // true cuz same reference
obj3 === obj1 // true cuz same reference

// Ternary Operator

const res = 20 === 20 ? "values match" : "values do not match"

/*

true basically if statement

 * Spread Operator: '...' is used in objects and array.

*/

function sum(a, b, c) {
  return a + b + c
}
var nums = [1, 2, 3]
console.log(sum(...nums))

// or

function sum([a, b, c]) {
  return a + b + c
}
var nums = [1, 2, 3]
console.log(sum(nums))

// one use is u can pass individual array elements

const originalObject = { x: 1, y: 2 }
const clonedObject = { ...originalObject }

// other is u can create a shallow copy of arrays and objects

// more about it on value_types.js

const originalArray = [1, 2, 3, 4, 5]
const clonedArray = [...originalArray]

const array1 = [1, 2, 3, 4]
const array2 = array1

array2.push(5) // both arrays will have 5

const arrays1 = [1, 2, 3]
const arrays2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

// concatination of array

const object1 = { x: 1, y: 2 }
const object2 = { z: 3 }
const mergedObject = { ...object1, ...object2 }

// object merging
