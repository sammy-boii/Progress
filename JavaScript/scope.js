/*

Global scope: variables will be accessible by all files connected to the html file

Module Scope: if the file is module type then only the exported variables will be accessible in the file that imported. 

<script src="1.js" type="module"> </script>
<script src="2.js" type="module"> </script>
<script src="3.js"> </script>

1.js

const a = 5;
export const b = 5;

2.js

import {b} from "./1.js"

console.log(a);    Error
console.log(b);    5

and for 3.js 'a' won't be available even though its a global variable

*/

if (true)
{
    var a = 'hi';
}
console.log(a); // hi


if (true)
{
    let b = 'hi';
}
console.log(b); // Reference Error

if (true)
{
    const c = 'hi';
}
console.log(c); // Reference Error

// var is function scope and there's no function so it's globally scoped
// but let and const are block scope so no acess outside the block

function test()
{
    const x1 = 5;
    if (true)
    {
        const x2 = 1;
    }
    console.log(x1,x2)
}

// Here x2 is block scoped so Reference Error but if it was inside if statement then it'd work

function test()
{
    const x1 = 5;
    if (true)
    {
        var x2 = 1;
    }
    console.log(x1,x2)
}

// and var is always function scoped so this works.


function test()
{
    const x = 5;
    if (true)
    {
        const x = 1;
        console.log(x);  // 1
    }
    console.log(x);   // 5
}
test();

/*

inside that block a new instance of the variable x is created and they don't overwrite eachother. same with loops. each iteration a new instace of that variable is created. but if var x = 1 was used it would be error cuz its would extend outside the block into the function and redeclaration of const would take place

*/