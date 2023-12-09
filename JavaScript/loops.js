const blogPost = [
    {
    title: 'Wassup',
    author: 'Zach',
    publishDate: '2022-12-01'
},
{
    title: 'Wassup',
    author: 'Zach',
    publishDate: '2022-12-01'
},
{
    title: 'Wassup',
    author: 'Zach',
    publishDate: '2022-12-01'
}
]

for (let i=0;i<blogPost.length; i++)
{
    let postTitle=blogPost[i].title;
    let postDate=blogPost[i].publishDate;
    let postAuthor=blogPost[i].author;
}


while (true)
{
 console.log("Yo mum");
}

if (false)
{
    console.log("Hi");
}
else
{
    console.log("Bye");  // output
}


/*

so while loop will only loop for truthy value so if there was a falsey value then the loop wouldn't be executed and for if as well if will be executed for truthy value and else for falsey value.

*/

let obj = {
    firstname: "Ram",
    age: 15,
    location: "Yo Mama House"
  };
  

  let keys = Object.keys(obj);  // creates an array containing all keys ["firstname","age","location"]

  for (let i = 0; i < keys.length; i++)   // .length is used for arrays so obj.length is a no no
  {
    let key = keys[i];  
    console.log(key + ": " + obj[key]); // firstname: "Ram" ....
  }

// you might be wondering if i can do obj.firstname why can't i do obj.key, it's cuz firstname is a property but assigning that property to the 'key' variable turns it into a string so we can't access it conventionally.

  for (const key in obj)   // for (variable in object) 
    {
      console.log(obj[key]);
    }

// here as well the 'key' will store one of the key for each loop


// for in statement gives properties of object and index of arrays and strings
// for of statement gives value of iterable objects like arrays, strings, etc... objects are not iterable by default

var str = "Hello";

for (let index in str) {
  console.log(index); // Outputs: 0, 1, 2, 3, 4
}



var str = "Hello";

for (let char of str) {
  console.log(char); // Outputs: H, e, l, l, o
}



const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);     // 1, 2, 3, 4, 5
}



for (let num of numbers) {
    console.log(num);     // 0, 1, 2, 3, 4
  }
  

  