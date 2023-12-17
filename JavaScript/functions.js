function myFunction(para1, para2) {
  console.log(para1 + para2);
}
myFunction(5, 2);

//arrow function is shorter (and better)

const myFunction = (para1, para2) => {
  console.log(para1 + para2);
};
myFunction(5, 2);

const myFunction = () => {
  const a = 20;
  return a < 10;
};
const result = myFunction();
console.log(result); // true

let sum = (a, b) => a + b; // returns a+b

//Anonymous function ko name hudaina

const show = function () {
  console.log("kill me");
};

setTimeout(show, 3000);

// setTimeout ma show() hudaina natra 3000 ms wait nagirikana directly invoke garthiyo

setTimeout(function () {
  console.log("kill me");
}, 3000);

// its the same tara memory management 101 cuz no name needed for the function
