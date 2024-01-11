const num1 = 10
const num2 = new Number(10)

num1.text = "hi"
num1.text = "hi"

console.log(typeof num1) // number
console.log(typeof num2) // object

console.log(num1) // 10
console.log(num2) // Number {10, text: 'hi'}

console.log(num1 + num2) // 20
