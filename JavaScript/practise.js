// 1. Check input or output

const even_odd = (a) => {
    return a % 2 === 0 ? 'even' : 'false';
}

console.log(even_odd(5));

// without ternary operator

const odd_even = (a) => {
    if (a % 2 === 0) {
        return 'even';
    } else {
        return 'false';
    }
}

console.log(odd_even(5));

// and no you can't do a%2==0 ? return 'even' : return 'odd'

// 2. Return number of vowels of a given string.

function vowels(str) {
    let c = 0;

    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                c++
                break;
        }
    }
    return c;
}
vowels('pokemon go');

// 3. Return negative value of the number. The argument can be negative as well

function makeNegative(num) {
    return -Math.abs(num);
}

// you guessed it it gives absolute value and - makes it negative
// or just do if (num<0)

//4. Find smallest integer from [34,15,88,2]

function smallest(arr) {
    let small = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
    return small;
}
let arr = [34, 15, 88, 2];
console.log(smallest(arr));

//5. Rock Paper Scissors

function rockPaperScissors(player1, player2) {
    /*
        const choices = ["rock", "paper", "scissors"];
    
        if (!choices.includes(player1) || !choices.includes(player2)) {
            return "Invalid choices. Please choose between 'rock', 'paper', or 'scissors'.";
        }
    */
    if (player1 === player2) {
        return "It's a tie!";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

rockPaperScissors("rock", "paper");

// 6. Remove first and last character of a string

const myFunction = (string) => {
    return string.substring(1, string.length - 1);
}

// substr() [depricated method] and substring are different btw

// 7. Function that does 4 basic mathematical operations

function operation(operator, value1, value2) {
    let result = value1 + operator + value2;
    return eval(result);
}

// 8. Remove spaces from both sides

function noSpace(str) {
    return str.split(" ").join("");
}

// 9. Add 2 arrays

function addArrays(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }

    return result;
}

// push adds an element to the end of that empty array

// but if sum of all elements of 2 arrays then

const addArrays = (arr1, arr2) => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = arr1[i] + arr2[i];
        sum = sum + result;
    }
    return sum;
}

// Intermediate kinda

// 10. Create a function that takes list of non negative integers and string and filter it out


const array = [1, 2, 3, -5, 'hi', '3242df', -32];
function filter_list(arrItem) {
    return arrItem.filter(arrItem => {
        return arrItem >= 0 && typeof arrItem === 'number'
    });
}

filter = filter_list(array);
console.log(filter);

//  [1,2,3]

// 11. Write a function that takes positive parameters and returns its mutiplicative persistence

// 39 => 3*9 = 27 => 2*7 = 14 => 1*4 => 4

// so 39 was needed to be mutiplied 3 times to reach a single digit so it should return 3

function persistence(num) {
    let count = 0;

    while (num >= 10) {
        let newNum = num.toString();
        num = multiply(newNum);
        count++;
    }

    return count;
}

function multiply(number) {
    let result = 1;

    for (let i = 0; i < number.length; i++) {
        result *= parseInt(number[i]); // no need parseInt
    }

    return result;
}

console.log(persistence(500));

// gambare gambare


// 12. ATM machines accepts only 4 or 6 digit PIN code. return true or false

function validatePIN(pin) {
    pin = pin.toString(); // converts to string cuz regex is for string 
    if ((pin).match(/^[0-9]{4}$|^[0-9]{6}$/) !== null) {
        return true;
    }
    else {
        return false;
    }
}

/*

or : /^\d{4}$|^\d{6}$/

returns null if regex doesn't match
.test and .exec ko syntax ultaxa

*/

(/^[0-9]{4}$|^[0-9]{6}$/).exec('1234');

(/^[0-9]{4}$|^[0-9]{6}$/).test('1234');

// test gives true or false exec gives same as match
// difference is that global, case insensetive, etc flags are only for exec


// 13. Count number of lowercase letters in a string & return 0 if none exists

function lowercaseCount(str) {
    let count = str.match(/[a-z]/g);
    if (count !== null) // if (count)
    {
        return count.length;
    } else {
        return 0;
    }
}

// count.length !== null nagareko cuz 0 != null and array ko value null return garxa not length

//using ternary operator

function lowercaseCount(str) {
    const result = str.match(/[a-z]/g);
    return result ? result.length : 0;
}

// 14. Return a boolean to check if the date is today or not

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}

// 15. Caplitalize odd and even indexes of string but seperately

// capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

function capitalize(s) {
    let even = '';
    let odd = '';
    const arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even += arr[i].toUpperCase();
            odd += arr[i];
        }
        else {
            even += arr[i];
            odd += arr[i].toUpperCase();
        }
    }
    return [even, odd];
}