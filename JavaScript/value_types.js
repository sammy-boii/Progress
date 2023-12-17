// * Primitive values / Immutable values store the value directly in the variable

// TODO: Strings, Numbers, Booleans, Undefined, Null, Symbol

// * Non Primitive / Mutable values store a reference to the value in the memory

// TODO: Objects, Arrays, Function, RegExp, Set, Map

// so when copying primitive values, don't worry about other stuff
// but for non primitive...

var arr1 = [1, 2, 3, [4, 5], { a: 1 }];
var arr2 = arr1;

// * Here you are directly copying the reference of arr1 to arr2. So both the arrays are pointing to the same address. In a nutshell, no matter what you change in what array, it'll get reflected in both the arrays no matter the nesting

var arr1 = [1, 2, 3, [4, 5], { a: 1 }];
var arr2 = [...arr1];

// * The spread operator creates a shallow copy meaning the top level is copied and doesn't contain any form of reference to the original array

arr2[0] = "hi";
arr1[3] = null;

// * So here since element [0] and [3] are top level elements, changing them won't reflect anything to the other array. But..

arr1[3][1] = "yellow";
arr1[4].a = "blue";

// * The array and the object are nested and contain a reference to the original nested array and object rather than an independent copy. So there this change would reflect to both

// * If you wanna avoid all dis, just individually copy them using .map() and stuff or use do deep copy

function primitive(num) {
  num++;
}

let number = 100;
primitive(number);

// here modifying the primitive value doesn't affect the original value as a function always recieves a copy of a primitive value. So the num inside the function becomes 101 but outside it's still 100

let profile = {
  name: "Sam",
};

function non_primitive(obj) {
  obj.name = "Harry";
}

non_primitive(profile);

// here the change reflects on both inside and outisde the function as a reference of the object is passed rather than a copy. So create a copy inside the function if u wanna avoid changing the original.
