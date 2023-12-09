function myFunction(para1, para2) {
    console.log(para1 + para2);
}
myFunction(5, 2);






//arrow function is like a improved version

const myFunction = (para1, para2) => {
    console.log(para1 + para2);
}
myFunction(5, 2);

const myFunction = () => {
    const a = 20;
    return a < 10;
}
const result = myFunction();
console.log(result) // true


let sum = (a,b) => a + b  // returns a+b





//Anonymous function ko name hudaina

const show=function(){
    console.log('kill me');
}

setTimeout (show,3000);

// setTimeout ma show() hudaina natra 3000 ms wait nagirikana directly invoke garthiyo
// for normally invoking show();

setTimeout(function(){
    console.log ('kill me');
},3000);

// its the same tara memory management 101 cuz no name needed for the function










// Built in js functions TUTORIALSPOINT

a.constructor()

// it returns the function's name i.e myFunction

var namee = ("This is string");
console.log(namee.charAt(0));
console.log(namee.charAt(4));

// T & nothing

myString = 'Zach';
myString.replace('h', 'k')

// Zack

myString.toLowerCase();

// zack

newString = 'Hi World';

newString.toUpperCase().split(" ");

// ['HI', "WORLD"]
// it splits where there is space (cuz it was specified) and converts the variable into an array

newString.split("")

// incase of this it seperates each individual character

// ["H", "i", " " , "W", "o", "r", "l", "d"]

newString.split()

// ['Hi World']

// others don't really work

newString.indexOf("World")

// 1

const str = 'samrajya'; 
const arr = str.split("");
const newArr = arr.reverse();
const reverse = newArr.join("");

/*

 arr= ['s', 'a', 'm' ,'r', 'a', 'j', 'y', 'a']
 newArr= reverse u get the gist
 newArr.join("") = "ayjarmas"
 newArr.join() = "a,y,j,a,r,m,a,s" 
 so yea split rakhne bela ("") bhako thau ma split ani join ma join :>

 */

// there is not one for string so to reverse a string covert it to an array and BOOM!!

// array functions implicitely return everything after => so no need to right return unless you explicitely write {} after => 

