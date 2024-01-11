x
 The amount of bits reserved for datatypes depend on the language. For some its 32 bits for some its something else. 

 So int a = 1, a can be stored as 000000....001

 Smallest addressable memory is usually 1 byte long (8 bits)

 So storing an integer can take up 4 consecutive memory addresses (8 x 4 = 32bits)

 In most languages, simple data types like numbers, booleans, character are directly stored in the memory but complex data types like arrays, objects store the pointer to that value in the memory. 

 For simple data types, the size is pre-determined so it knows when to stop reading.

 But usually for arrays and strings, a null terminator '\0' denotes the end of array.

 For objects, a block of memory is reserved. The size of the block depends on the type and number of data inside it. The simple data types are directly stored and complex data types store the pointer. 

 If the simple data types exceeds the opted value, then it either throwns an overflow error or the language relocates to accomodate for the change in size.

 In high level languages like Python and JS these all problems are handled by the compiler so no need to worry about it.

 ## Linked List

 It is a data structure that consits of elements (nodes) which point to the next element in the sequence. The last node usually points to null. 

 It is usually uni-directional but doubly linked list is bi-directional.

 It's called a 'list' but technically its a bunch of objects nested inside one another pointing to the subsequent object. 

 The basic boilerplate is as follows:

 - An object called linkedList is created which has one property 'head'. It denotes the starting element/node of the list.
  
 - 'head' will contain an object element which will have property 'data' and 'next'. This is the starting element/node of the list. 
  
 - 'data' is the actual data stored and 'next' will also have an object which is the subsequent element in the list.


```js
linkedList {
    head: obj1 {
        data: 1
        next: obj2 {
            data: 2
            next: obj3 {
                data: 3
                next: null
            }
        }
    }
}
```

The 'head' property belongs to the linkedList object itself and the 'data' and 'next' belong to the respective objects.

So first and foremost, we create a linkedList with a 'head' property and keep it null

```js
class LinkedList {
    constructor() {
        this.head = null
    }
}

const linkedList = new LinkedList()
```
Now to append elements in the list, we can use a method and have it create a new element with the given data and 'next' value. this in LinkedList belongs to 'linkedList' and this in Node belongs to 'newNode'

```js
class Node {
    constructor () {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data)
    }
}

const linkedList = new LinkedList()
linkedList.append(1)
```

Now we'll check if the list is empty and if so, the appended element will be the first element aka it'll be the 'head' property.

```js
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(data) {
    const newNode = new Node(data)

    if (this.head == null) {
      this.head = newNode
      return
    }
  }
}

const linkedList = new LinkedList()
linkedList.append(1)
```

- The first element is assigned to head and returned.
- Now for rest, we always start from the head. 
- We assign the currentNode as this.head
- this is referring to the entire list.
- Now we loop while currentNode.next / linkedList.head.next is not null. But it is so we skip it and directly assign's the currentNode.next as the new node (second element)
- Now when we append another element, the 'next' of the first element is the second element, so it'll go through the loop and change the 'currentNode' to the element after it 'currentNode.next' which is the second element.
- But again the second's element's next is null so it skips the loop and assigns the third element as its' next value

```js
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(data) {
    const newNode = new Node(data)

    if (this.head == null) {
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode.next != null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
}

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)

console.log(linkedList)

```

## Recursion

It's a function calling itself until the base case is met blah blah blah.

Formula of factorial is: n! = n (n-1) (n-2) (n-3) ... 3.2.1

Or we can write it as: n! = n(n-1)!

This works for every positive numbers except 0 as: 

0! = 0.(0-1)!
   = 0.(-1)!

And negative numbers do not have factorial. So we return 1 directly as we know 0! = 1. 

```js
function fact(n) {
  if (n == 0) {
    return 1  // base case
  }
  return n * fact(n - 1)  // recursive case
}

console.log(fact(5))
```

- fact(5) => 5 * fact(4)
- fact(4) => 4 * fact(3)
- fact(3) => 3 * fact(2)
- fact(2) => 2 * fact(1)
- fact(1) => 1 * fact(0) 
- fact(0) => 1

so on returning, 

- fact(1) => 1 * 1 => 1
- fact(2) => 2 * 1 => 2
- fact(3) => 3 * 2 => 6
- fact(4) => 4 * 6 => 24
- fact(5) => 5 * 24 => 120

<br>

Fibonacci is also very similar : Fₙ = Fₙ₋₁ + Fₙ₋₂ 

It basically says that nᵗʰ number will be the sum of the (n-1)ᵗʰ and (n-2)ᵗʰ number where n is the position not value.

So as expected, it doesn't work well with 2 and 1 as:

F₂ = F₁ + F₀ <br>
F₁ = F₀ + F₋₁

F₀ and F₋₁ doesn't exist.

&nbsp;

Without recursion...

```js
// 1, 1, 2, 3, 5, 8, 13, 21, 34 .... 10th number

function fibonacci(n) {
  let fib = [1, 1]

  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

console.log(fibonacci(10).join(", "))


// another method 

// 1, 1, 2, 3, 5, 8, 13, 21, 34 .... 10th number

let a = 1
let b = 1

console.log(a)
console.log(b)

let count = 2 // as we've already printed the first two
let n = 10

while (count < n) {
  let c = a + b
  a = b
  b = c
  console.log(c)
  count++
}
```

With recursion, 

```js

// 1, 1, 2, 3, 5, 8, 13, 21, 34 .... 10th number

function fibonacci(n) {
  if (n >= 2) {
    return fibonacci(n - 1) + fibonacci(n - 2)
  } else {
    return 1
  }
}

for (i = 0; i < 10; i++) {
  process.stdout.write(String(fibonacci(i)) + ", ")
}

// console.log() leaves a trailing new line so process.stdout.write(), a built-in node function is used and it only accepts strings. String() or .toString() can be used.

console.log("\n\n The 4th number is ", fibonacci(4)) //  3
```

&nbsp;

## Time Complexity

It is a way of showing of how the runtime of a function increases as the number of input increases. 

It is a measure that analyzes the time taken to complete a function or some code as the size of input increases.

It is mathematically expressed with big O notation which provides the upper bound on the growth rate of the algorithm. In other words, it represents the worst case scenario of the algorithm's performance.

Obviously the rate in which the runtime and input increases isn't constant and varies so different types of time complexities are: 
<br>

- ### Linear Time O(n) => big O of n | O of n
  
  Algorithms with linear time complexity have a runtime that is directly proportional to the size of the input.
  As the input size increases, the time taken to execute the algorithm also increases linearly. 

  ```js
  function linear_time(arr){
    for (i in arr){
      console.log(arr[i])
    }
  }
  ```

  This function has linear time complexitiy as iterating through each element would be directly propotional to the size of the array. 

  Lil bit of maths... :D

  F = ax+b

  This is the linear expression. Suppose, a is the coefficient, x is input and b is y intercept. Now first find the fastest growing term, i.e ax. Now take out the coefficient. And what you're left with is the runtime. 

  T = an+b <br>
  T = an<br>
  T = O(n)<br>

  <img src = 'https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/linear-graph-1624636184.png' width = 500 height = 500>

<br>

- ### Constant Time O(1) => big O of 1 | O of 1
  
  Algorithms with constant time complexity have a fixed or constant runtime, regardless of the size of the input.
  No matter how large the input is, the execution time remains the same.

  ```js
  function constant_time(arr){
    console.log(arr[0])
  }
  ```

  Here we are logging the first element and the runtime is constant no matter the size of the input.

  ```js
  function stupid_function(arr) {
    total = 0
    return total
  }
  ```

  This works too...
  
  T=c  where c is the constant time, suppose 0.315... <br>
  T=0.315<br>

  The entire 0.315 is the fastest growing term and coefficient so we can rewrite it as, 

  T=0.315x1<br>
  T=O(1)<br>

  we could also write, <br>

  T=O(2)<br>
  T=O(0.315)<br>

  But choose the conventional way. 
  <br>
  <img src = 'https://www.theknowledgeacademy.com/_files/images/Constant_Time_Complexity.png' width = 500 height = 300>

- ### Quadatric Time O(n²) => big O of n² | O of n²
  
  Algorithms with quadratic time complexity have a runtime that is proportional to the square of the size of the input. This is common is nested iterations.

```js
  const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ]

  function quadratic_time(){
    for (const row of arr) {
      for (const element of row) {
        console.log(element)
      }
    }
  }
```

  F = ax²+bx+c <br>
  F = ax²<br>
  T = O(n²)<br>

  > This is assuming that number of rows = number of columns, else O(n*m)

  <img src = 'https://miro.medium.com/v2/resize:fit:832/1*leqL9hlJApjUuzmdwalwKA.png'>

  There are more like cubic time, logarithmic time, exponential time, etc... 

  <img src = 'https://miro.medium.com/v2/resize:fit:1400/1*xq73u1N7ZsTE2MJ9jsj0CA.png' width = 650 height = 400>

### Calculating Time Complexity: 

> Note: If two functions have time complexity of O(n) or O(1) or anything similar, it doesn't necessarily mean
they both have same execution time because common sense.


```js
function stupid_function() {

  total = 0 -> O(1)
  return total -> O(1)
}
```

So both the line takes constant time O(1), 

T = O(1) + O(1)<br>
T= c₁ + c₂ <br>
T= c₃ <br>
T = O(1)

```js
function add(arr) {

  let total = 0 -> O(1)
  for (i in arr) { -> n
    total+=arr[i] -> O(1)
  }
  return total -> O(1)
}
```
total += arr[i] is O(1) because its just a simple arithmetic operation and takes the same time to calculate no matter the input size. 

loops are regarded as just n because yes... <br>

T = O(1) + n * O(1) + O(1) <br>
T = c₁ + n*c₂ + c₃<br>
T = n * c₂<br>
T = O(n)<br>


```js
function nested_array(arr) {
  for (const rows in arr) {
    for (const cols in rows) {
      console.log(arr[cols])
    }
  }
}
```