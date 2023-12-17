var arr = [1, 2, 3, 4, 5, 6];

arr.push(5, 6); // adds 5 and 6 to the end
arr.pop(); // remove last element
arr.unshift(0); // adds 0 to the beginning

arr.slice(); // copies the whole array
arr.slice(2); // copies from second index i.e [3,4,5,6]
arr.slice(2, 4); // [3,4]

const array = [1, 2, 3, 4, "haha", 5, 6];
array.splice(4, 1, 3.5); // [1,2,3,3.5,4,5,6]

// 0 is add and 1 is replace

// replace index 4 with 3.5

array.splice(4, 0, "haha"); // [1, 2, 3, 3.5, 'haha', 4, 5, 6]

// add haha to index 4

array.indexOf(3.5); // 3
array.indexOf("yellow"); // -1 meaning doesn't exist

array[array.indexOf(3.5)]; // 3.5

// indexOf returns the first instance

arr = [1, 1, 1, 1, 1];
console.log(arr.indexOf(1)); // 0

const items = [
  {
    firstname: "John",
    lastname: "Smith",
  },
  {
    firstname: "Cena",
    lastname: "Smith",
  },
  {
    firstname: "Picollo",
    lastname: "YaBoiRoshi",
  },
];

console.log(items.findIndex((item) => item.lastname !== "Smith")); // 2

// takes a callback function as a parameter

// map creates a new modified array as per the callback

const arr = [1, 2, 3, 4, 5];

console.log(arr.map((arr) => (arr = 1))); // [1,1,1,1,1]

const personList = [
  {
    firstname: "John",
    lastname: "Smith",
  },
  {
    firstname: "Cena",
    lastname: "Smith",
  },
  {
    firstname: "Picollo",
    lastname: "YaBoiRoshi",
  },
];

// to modify them...

const newPersonList = personList.map((person) => {
  return {
    ...person,
    firstname: "Cena",
    age: 30,
  };
});

// while returning an object from an arrow function, () is wrapped around the object to avoid confusion from the standard {} used to denote a block.

newPersonList = personList.map((person) => ({
  ...person,
  firstname: "Cena",
  age: 30,
}));

// both are the same

console.log(newPersonList);

// forEach iterates over each element in an array and does wtv the callback function says

var arr = [1, 2, 3, 4, 5];
arr.forEach((arrItem) => {
  console.log(arrItem);
});

// u can keep parantheses between arrItem

arr.forEach((arrItem, index) => {
  console.log(index);
  console.log(arrItem);
});

//check if orange exists

var arr = ["blue", "green", "yellow", "orange"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "orange") {
    console.log("it exists");
  }
}

// simpler way

arr.forEach((color) => {
  if (color === "orange") console.log("It exists");
});

// even simpler way

arr.includes("orange"); // true

// more yay

if (arr.indexOf("orange") !== -1) {
  console.log("it exists");
}

// returns -1 if element is not found

// key difference between forEach and map is that map expects u to return a value and use it for something but forEach is a general purpose thing.

// both methods accept (currentItem, index, array) as parameters

//filter method filters out different results based on provided callback function

const orders = [
  {
    productName: "Book",
    isDigital: true,
    isOpen: true,
  },
  {
    productName: "Camera",
    isDigital: false,
    isOpen: true,
  },
  {
    productName: "E-Mag",
    isDigital: false,
    isOpen: true,
  },
];

var digitalOrders = orders.filter((arrItem) => {
  return arrItem.isDigital;
});

// it returns true values and creates a new array

var digitalOrders = orders.filter(
  (arrItem) => arrItem.isDigital && arrItem.isOpen
);

// returns both true bhako

// reduce does stuff on array and returns a single w/ help of an accumulator

const arr = [10, 20, 30, 25, 14];

const sum = arr.reduce((sum, arrItem) => sum + arrItem, 0);

const avg =
  arr.reduce((sum, arrItem) => {
    return sum + arrItem;
  }, 0) / arr.length;

// sum += arrItem also works

// that 0 is the starting value of the accumulator/sum
