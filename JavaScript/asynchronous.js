function greet() {
  console.log("Hello")
}

setTimeout(greet, 1000)

// executes greet() after 1s

setTimeout(function () {
  console.log("Kilimanjaro")
}, 5000)

// If u wanna pass paramters,

function greet(name, age) {
  console.log(`Hello ${name} of age ${age}`)
}

setTimeout(greet, 1000, "Sam", 12)

// setTimeout() returns a timerId (1,2,3,4....)

const timerId = setTimeout(greet, 5000)

clearTimeout(timerId)

// The function will not be executed

// setInterval is similar but repeats infinitely

let counter = 10
const countInterval = setInterval(count, 1000)

function count() {
  console.log(counter--)
  if (counter < 0) clearInterval(countInterval)
}

// 10.. 9.. 8.. 7.. 6.. 5.. 4.. 3.. 2.. 1.. 0

//  counter < 0 ? clearInterval(countInterval) : null;

// ? function passed as a paramter is a callback

let pizza

function getPizza() {
  console.log(`Getting pizza`)
  setTimeout(() => {
    pizza = "🍕"
  }, 2000)
}

getPizza()
console.log(`Eating ${pizza}`)

// Getting pizza
// Eating undefined

// Cuz the arrow function that assigns pizza's value isn't executed until the 2s delay.

function getPizza() {
  console.log(`Getting pizza`)
  setTimeout(() => {
    pizza = "🍕"
    console.log(`Eating ${pizza}`)
  }, 2000)
}

getPizza()

// This works but is a bad practise cuz functions are meant to do one task

function getPizza(callback) {
  console.log("Getting Pizza")
  setTimeout(() => {
    pizza = "🍕"
    callback(pizza)
  })
}

function eatPizza(pizza) {
  console.log(`Eating ${pizza}`)
}

getPizza(eatPizza)

// callback hell is callbacks nested into one another. actually hell to read

function one(callback) {
  function two(callback) {
    function three(callback) {}
  }
}

function four() {}

one(four)

// * fetch() takes a request object as a paramter and returns a Response object

const request = new Request("www.api.com", { method: "GET" })
var response = fetch(request)
var response = fetch("www.url.com")

// * fetch() returns a promise which later gets resolved into a 'Response' object.

// * The response itself doesn't have the data but it has a json() method which usually contains the data .json() is an asynchronous task

fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok") // stops the execution too
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error)
  })

// * Note: .json() is only available in the "Responese" object sent by the fetch if the data is in JSON format.

// * JSON.parse() and JSON.stringify() are both synchronous and are native to JS.

// * Also .catch() and try catch only catches error if there is an error while trying to fetch the data from the API. But if there is an authentication error or sum then u have to manually check and throw new error like we did in the above code.

// reponse.status = 200 (Successful), 401 (Unauthorized), 503 (Service unavailable), 404 (Requested URL not found)

const parsedObj = JSON.parse(jsonString) // JSON -> Object
const jsonString = JSON.stringify(obj) // Object -> JSON

// async / await

async function getData() {
  try {
    const data = await fetch("www.api.com")
    const result = await data.json()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
getData()

// u need an async function to use await. await returns a promise and pauses the entire function. When the Promise gets resolved or rejected, the function unpauses.
