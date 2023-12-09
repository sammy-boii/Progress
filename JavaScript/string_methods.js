
const str = 'My Dog Is A Bad Dog';
const newstr = str.replaceAll('Dog', 'Cat');


// MyCatIs A Bad Cat


const string = 'My Dog Is A Bad Dog';
const newstring = string.replaceAll(/[dD]{1}og/g, 'cat');


// My cat Is A Bad cat


const mystr = 'some string';
mystr.substring(5); // string
mystr.substring(5, 7); // st
mystr.substring(3, 1); // om


//capitalize first letter
const myString = 'some string';
const result = myString[0].toUpperCase() + myString.substring(1); // Some string


const externalData = [
    {
        title: 'Life is Good  ',
        author: ' Snyder'
    },
    {
        title: ' Heaven on Earth  ',
        author: ' YaBoiRoshi   '
    }
];

//remove spaces from front and end

for (let i = 0; i < externalData.length; i++) 
{
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;
    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();
}


const regex= /[a-z]+/;
const str1= 'fasdf8wk' 
regex.exec(str1); // fasdf
str.match(regex); // fasdf

