/*

* Module Scope: if the file is module type then only the exported variables will be accessible in the file that imported. 

<script src="1.js" type="module"> </script>
<script src="2.js" type="module"> </script>
<script src="3.js"> </script>

1.js

const a = 5;
export const b = 5;

2.js

import {b} from "./1.js"

console.log(a);    ReferenceError
console.log(b);    5

*/

if (true) {
  var a = "hi";
}
console.log(a); // hi

if (true) {
  let b = "hi";
}
console.log(b); // Reference Error

if (true) {
  const c = "hi";
}
console.log(c); // Reference Error

// var is function scope
// let and const are block scope

function test() {
  const x1 = 5;
  if (true) {
    var x2 = 1;
  }
  console.log(x1, x2);
}

// const is scoped inside the function so console.log() can access it and var is a fucntion scope by default so no worries. But if there was let or const instead of var then ReferenceError.

function test() {
  const x = 5;
  if (true) {
    const x = 1;
    console.log(x); // 1
  }
  console.log(x); // 5
}
test();

/*

If var was written then x = 1 would overwrite the 5

*/

var str = "Yellow";
function scope() {
  for (let i = 0; i < str.length; i++) {
    i++;
  }
  console.log(i);
}

// this is an error cuz i is considered a local variable only accessible inside the loop. But on the other hand i can access 'str'

const myage = 25;
if (true) {
  const myage = 20;
  console.log(myage); // 20
}

// ! Variable shadowing means renaming a variable with the same name as another variable thats in a different scope than it is.

// ! Here myage = 20 is block scoped and it is only available inside the if block so its doesn't interfer with the global scoped myage.

// ! Its confusing so avoid it.
