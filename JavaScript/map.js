// It is a data structure similar to objects except it can have keys and values of any datatypes including objects

// let obj = {{a:1}:1, b:1} not valid

let myMap = new Map()

myMap.set("key1", "value1")
myMap.set(2, "value2")
myMap.set({ name: "John" }, "value3")

console.log(myMap.get("key1"))
console.log(myMap.get(2))

console.log(myMap.has("key1"))

// Iterating through the Map
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`)
})

console.log(map)

// Symbols are primitive datatype that are guaranteed to be unique. Usually used as keys

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
