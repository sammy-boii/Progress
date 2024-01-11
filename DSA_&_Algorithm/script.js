const num1 = 10
const num2 = new Number(10)

num1.text = "hi"
num2.text = "hi"

console.log(typeof num1) // number
console.log(typeof num2) // object

console.log(num1) // 10
console.log(num2) // Number {10, text: 'hi'}

console.log(num1 + num2) // 20

// the reason num1.text doesn't thrown an error because whenever we use methods or properties on primitve values, it is temporarily wrapped with the respective wrapper function Number(), Boolean(), String() etc...

// and when its converted back to the primitive value after the operation, the applied property doesn't persist.

// that's why the type shows as number or string or boolean and not object.
