// It's an object used for matching text with a pattern. eg checking if the e-mail is valid


const string = new RegExp('g');

const str1 = 'i like cheese';

string.test(str1); // false


/*

!   Quantifiers: 

!   * => O or more
!   + => 1 more more
!   ? => 0 or 1


str1 = 'i like cheese';

/cheese/.test(str1) => true

/[A-Z]/.test(str1) => false

/[A-Za-z0-9 ]/.test(str1) => true (compares all uppercase, lowercase, numbers and space, order don't matter)

/./.test(str1) => true (represents any character) (\. for actually periods)

/\d/.test(str1) => false (represents any number, equivalent to saying 0-9)

/\s/.test(str1) => true (represents space)

/\S/.test(str) => true (represents non space) same logic for others as well

/\w/.test(str1) => true (represents any alphanumeric value)

/^i/.test(str1) => true (checks the first letter) 

/k$/.test(str1) => false (checks the last letter) 

/( c | C )/.test(str1) => true (you guessed it)

/w./gimsuy (they are flags)

without global it stops at the first occurance

https://regexr.com/


Brackets

    [xyz]	match any x, y, z
    [J-Z]	match any capital letters between J & Z.

-------------------------------------------------------------------------------------------------------------------------------


in above it matches 1 and says true now quantifiers quantifies how many times to match

str1 = 'i like cheese';

/[a-z]+/.exec(str1)

+ matches one or more times
so without + it would only match at i and stop

 */

// yk what ignore all of that cuz idk wtf that means either

const regex = /hello/;
const String = 'Hello, World!';
const result = regex.test(String);
console.log(result); // Output: false

// if u use regex.exec(String) it'll give [ 'hello', index: 0, input: 'Hello, World!', groups: undefined ]

// basically returns an array with the matching substring and its index

const str= 'hello world, 2021 @ more of a string';

const Regex= /[a-z ]+,[0-9 ]+@[a-z ]+/
const ans=Regex.exec(str);

const RegEx= /.+/.exec(str);

// both works works 
