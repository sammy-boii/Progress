var arr = [1, 2, 3, 4, 5, 6];

arr.push(5, 6) // adds 5 and 6 to the end
arr.pop() // remove last element
arr.unshift(0) // adds 0 to the beginning

arr.slice() // copies the whole array
arr.slice(2) // copies from second index i.e [3,4,5,6]
arr.slice(2,4) // [3,4]

const array = [1, 2, 3, 4, 'haha', 5, 6];
array.splice(4, 1, 3.5); // [1,2,3,3.5,4,5,6] 

// 0 is add and 1 is replace

// replace index 4 with 3.5

array.splice(4, 0, 'haha')  // [1, 2, 3, 3.5, 'haha', 4, 5, 6] 

// add haha to index 4

array.indexOf(3.5) // 3

array[array.indexOf(3.5)] // 3.5



const ComplexArr = [
    {
        firstname: 'John',
        lastname: 'Smith'
    },
    {
        firstname: 'Cena',
        lastname: 'Smith'
    },
    {
        firstname: 'Picollo',
        lastname: 'YaBoiRoshi'
    }
];

console.log(ComplexArr.findIndex((arrItem) => arrItem.lastname !== 'Smith'));

// arrItem represents each item in the array that is being iterated over. You could use this keyword but it doesn't work with arrow functions.

// returns 2

// map creates a new modified array provided callback function


const newArray = [
    {
        firstname: 'John',
        lastname: 'Smith'
    },
    {
        firstname: 'Cena',
        lastname: 'Smith'
    },
    {
        firstname: 'Picollo',
        lastname: 'YaBoiRoshi'
    }
];

// if we wanted to modify lastnames of all:

newArray[0].lastname = 'Chad';

// but better option to do all at once

modifiedArray = newArray.map(arrItem => {
    arrItem.lastname = 'Chad';
});

// returns the modified array

// forEach iterates over each element in an array and does wtv the callback function says

var arr = [1, 2, 3, 4, 5];
arr.forEach(arrItem => {
    console.log(arrItem);
})

// u can keep parantheses between arrItem


arr.forEach((arrItem, index) => {
    console.log(index);
    console.log(arrItem);
})

//check if orange exists

var arr = ['blue', 'green', 'yellow', 'orange'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'orange') {
        console.log('it exists');
    }
}

// 'simpler' way

let orangeExist = false;
arr.forEach(color => {
    if (color === 'orange') {
        orangeExist = true;
    }
});

// orangeExist 0 assign garda ni hunxa tara unexpected behaviour might occur

// 'even simpler' way

arr.includes('orange'); // true

// more yay

if (arr.indexOf('orange') !== -1)
{
    return 'it exists';
}

// returns -1 if element is not found


//filter method filters out different results based on provided callback function


const orders = [
    {
        productName: 'Book',
        isDigital: true,
        isOpen: true
    },
    {
        productName: 'Camera',
        isDigital: false,
        isOpen: true

    },
    {
        productName: 'E-Mag',
        isDigital: false,
        isOpen: true
    }
];

var digitalOrders = orders.filter(arrItem => {
    return arrItem.isDigital;
})

// it returns true values and creates a new array. its kinda like a if statement without a condition

var digitalOrders = orders.filter(arrItem => {
    return arrItem.isDigital && isOpen;
})

// returns both true bhako 

// reduce does stuff on array and returns a single w/ help of an accumulator

const arr=[10, 20, 30, 25, 14]; 

const sum = arr.reduce((sum, arrItem) => sum + arrItem, 0); 

  const avg = (arr.reduce((sum, arrItem) => {
    return sum + arrItem;
  }, 0))/arr.length; 

  // wtv value we get from the reduce method we divide by the length to get the average

  // 0 is the starting value of the accumulator/sum
   



