const blogPost = [
  {
    title: "Wassup",
    author: "Zach",
    publishDate: "2022-12-01",
  },
  {
    title: "Wassup",
    author: "Zach",
    publishDate: "2022-12-01",
  },
  {
    title: "Wassup",
    author: "Zach",
    publishDate: "2022-12-01",
  },
];

for (let i = 0; i < blogPost.length; i++) {
  let postTitle = blogPost[i].title;
  let postDate = blogPost[i].publishDate;
  let postAuthor = blogPost[i].author;
}

while (true) {
  console.log("Yo mum");
}

if (false) {
  console.log("Hi");
} else {
  console.log("Bye"); // output
}

/*

so while loop will only loop for truthy value so if there was a falsey value then the loop wouldn't be executed and for if as well if will be executed for truthy value and else for falsey value.

*/

const arr = [11, 111, 1111];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ... in gives the indexes  and for ... in gives the actual values.

for (let i in arr) {
  console.log(i); // '0','1','2'
}

// Even though the indexes are a string literal but they still work...

for (let i of arr) {
  console.log(i); // 11, 111, 1111
}

var str = "abc";

for (let char of str) {
  console.log(char); // 'a' 'b' 'c'
}

for (let char in str) {
  console.log(char); // '0' '1' '2'
}

const obj = {
  prop1: 1,
  prop2: 2,
};

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ": " + obj[key]);
}

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// for ... in is used for iterables and object isn't iterable by default so u can't use it
