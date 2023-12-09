
const Objects = {
  prop1: 5,
  prop2: 'i like cheese',
  prop3: [10, 20, 30]
};

console.log(Objects.prop3[2]);
console.log(Objects['prop1']);


const myyArray = [1, 2, 3, 4, 'hi', [1, 2]];
console.log(myyArray[0]);
console.log(myyArray[5][1]);


const a = 0;
a++;
a++;
a++;
console.log(a);


// Mini Challenge


const stationary = {
  pen: {
    price: 100,
    quantity: 1
  },
  book: {
    price: 200,
    quantity: 1
  }
};

console.log(stationary.pen.price);

const myArray = [stationary.pen, stationary.book];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity);




function primitive(num)
{
  num++; 
  console.log(num);   // 101
}

let number = 100;
primitive(number);


// btw even if instead of "number" there was "num" the original value wouldn't change cuz another variable with the name num will be created inside the function of local scope 


let profile = {
  Name: "Sam",
  Age: 12
}

function non_primitive(obj)
{
  obj.Age++;
  console.log(obj);  // Name: "Sam" Age: 12
}

non_primitive(profile);


// in this snippet object is passed which is a non-primitive datatype meaning it is passed as a reference so initial value will be changed 