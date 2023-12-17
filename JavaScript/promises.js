// or

var response = fetch("www.api.com");

// Promise is used to make asynchronous programming much more readable. It's a convinient replacement for callbacks in asynchronous programming.

// fetch() returns a Promise too.

// To create our very own promise:

const p = new Promise((resolve, reject) => {
  // ...async code
});

// resolve and reject are conventions

// here an object called "Promise" would be returned with only one property "state" : "pending"

// when the async task is done, it either gets resolved (success) or rejected (failure)

const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

// The message inside the resolve is passed to .then() and reject's is passed to .catch()

// So resolve is a reference to the function inside .then() and reject is a reference to the function inside .catch()

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

//

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const data = { name: "John Doe", age: 30 };
        resolve(data);
      } else {
        reject("Error occurred while fetching data.");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// we can perform error handling on .then() itself too

fetchData().then(handleData, handleError);

// we can chain them too:

getWeather()
  .then((weather) => getIcon(weather))
  .then((icon) => getAltIcon(icon))
  .catch((err) => handleError(err));

// * If the error happens in any of them then .catch() will catch it
