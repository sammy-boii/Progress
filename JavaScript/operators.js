8**2;
// That is equivalent to 8^2

// + - / % * are Arithmetic Operators

// Following are Assignment Operators

let x;
x+=5;
x=x+5;

x-=5;
x=x-5;

x/=5;
x=x/5;

x*=5;
x=x*5;

x++;
x=x+1;

x--;
x=x-1;

x=10;
y='10';

x==y;
x===y;

// first returns true as value is same but second returns false cuz even though datatype is different

x===Number(y);

// now this is true

x!=y;

// this is false cuz datatype don't matter

x!==y;

// now this is true cuz datatype matters

// so !== and === sees datatype and value where == and != only sees value

const myObj1={
    property1: 20,
  property2: 'random'
  }; 
  
  const myObj2={
    property1: 20,
  property2: 'random'
  }; 
  
  myObj1==myObj2;
  myObj1===myObj2;
  
  // both give false and only when u compare the object with itself it gives true. same for arrays

  
!(20==20)

// false

// Ternary Operator

const res = 20 === 20 ? 'values match' : 'values do not match';

/*

true basically if statement

 * Spread Operator: '...' is used in objects and array.

*/

function sum (a,b,c,d,e)
{
  let total = a+b+c+d+e;
  return total;
}
let nums = [1,2,3,4,5];
const total = sum(...nums);   
console.log(total);

// one use is u can pass individual array elements

const originalObject = { x: 1, y: 2 };
const clonedObject = { ...originalObject };

// other is u can create a shallow copy of arrays and objects

const original = { x: 1, y: 2 };
const clone = original; 
clone.x = 'hi';  // both's x value will be 'hi'

// if u do it like this they share the same memory and change clone will change original too. same with arrays

const originalArray = [1,2,3,4,5];
const clonedArray = [...originalArray];

const array1 = [1,2,3,4];
const array2 = array1;

array2.push(5); // both arrays will have 5

// and yea adding, removing or modifying elements doesn't violate const for array

const arrays1 = [1, 2, 3];
const arrays2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

// concatination of array 

const object1 = { x: 1, y: 2 };
const object2 = { z: 3 };
const mergedObject = { ...object1, ...object2 };  

// object merging