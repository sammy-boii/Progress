// singleton object are the objects made from constructor not literals

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
}

const keys = Object.keys(obj)
const values = Object.values(obj)
const entries = Object.entries(obj)

Object.freeze(obj) // doesn't propagate any changes

console.log(keys) // ['prop1', 'prop2', 'prop3']
console.log(values) // ['value1', 'value2', 'value3']
console.log(entries) // [["prop1", "value1"], ["prop2", "value2"], ["prop3", "value3"]]

console.log(entries[0][0]) // 'prop1'

console.log(obj.hasOwnProperty("prop1")) // true

const key = "prop1"

console.log(obj.key) // undefined cuz it doesn't technically exist and 'key' is treated as a string rather than a property so for dynamic values:

console.log(obj[key]) // 'value1'

obj = { a: 1, b: 2 }

for (i in obj) {
  console.log(obj[i] == 1)
}

// obj.i wouldn't work because it would search for the 'i' property in obj
