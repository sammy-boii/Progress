var str = "My Dog Is A Bad Dog";
const newstr = str.replaceAll("Dog", "Cat");

// MyCatIs A Bad Cat

const string = "My Dog Is A Bad Dog";
const newstring = string.replaceAll(/[dD]{1}og/g, "cat");

// My cat Is A Bad cat

const mystr = "some string";
mystr.substring(5); // string
mystr.substring(5, 7); // st
mystr.substring(3, 1); // om

//capitalize first letter
const myString = "some string";
const result = myString[0].toUpperCase() + myString.substring(1); // Some string

const externalData = [
  {
    title: "Life is Good  ",
    author: " Snyder",
  },
  {
    title: " Heaven on Earth  ",
    author: " YaBoiRoshi   ",
  },
];

//remove spaces from front and end

for (let i = 0; i < externalData.length; i++) {
  const currentTitle = externalData[i].title;
  const currentAuthor = externalData[i].author;
  externalData[i].title = currentTitle.trim();
  externalData[i].author = currentAuthor.trim();
}

const regex = /[a-z]+/;
const str1 = "fasdf8wk";
regex.exec(str1); // fasdf
str.match(regex); // fasdf

var str = "A Sample String";

str[0]; //  T
str.charAt(1); //  ' '
str.charCodeAt(0); // gives correspoding ASCII value

myString = "Zach";
myString.replace("h", "k");

// Zack

myString = myString.toLowerCase();

// zack

var newString = "Hi World";

newString.toUpperCase().split(" ");

// ['HI', "WORLD"]
// it splits where there is space (cuz it was specified) and converts the variable into an array

newString.split("");

// incase of this it seperates each individual character

// ["H", "i", " " , "W", "o", "r", "l", "d"]

newString.split();

// ['Hi World']

// others don't really work

newString.indexOf("World");

// 1

var str = "samrajya";
const arr = str.split("");
const newArr = arr.reverse();
const reverse = newArr.join("");

/*

arr = ['s', 'a', 'm', 'r', 'a', 'j', 'y', 'a']
newArr = arr ko reverse
reverse = ayjarmas

 */
