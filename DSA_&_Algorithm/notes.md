## Introduction: 

The amount of bits reserved for datatypes depend on the language. For some its 32 bits for some its something else. 

So int a = 1, a can be stored as 000000....001

Smallest addressable memory is usually 1 byte long (8 bits)

So storing an integer can take up 4 consecutive memory addresses (8 x 4 = 32bits)

In most languages, simple data types like numbers, booleans, character are directly stored in the memory but complex data types like arrays, objects store the pointer to that value in the memory. 

For simple data types, the size is pre-determined so it knows when to stop reading.

But usually for arrays and strings, a null terminator '\0' denotes the end of array.

For objects, a block of memory is reserved. The size of the block depends on the type and number of data inside it. The simple data types are directly stored and complex data types store the pointer. 

If the simple data types exceeds the opted value, then it either throwns an overflow error or the language relocates to accomodate for the change in size.

In high level dynamic languages like Python and JS these all problems are handled by the compiler so no need to worry about it.

&nbsp;

## Recursion

It's a function calling itself until the base case is met.

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

- ## Linear Time O(n) => big O of n | O of n
  
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

- ## Constant Time O(1) => big O of 1 | O of 1
  
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

&nbsp;

- ## Quadatric Time O($n^2$) => big O of $n^2$ | O of $n^2$
  
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

  There are several more like cubic time, logarithmic time, linearithmetic (quasi-linear) time, exponential time, etc... 

  <img src = 'https://miro.medium.com/v2/resize:fit:1400/1*xq73u1N7ZsTE2MJ9jsj0CA.png' width = 650 height = 400>

&nbsp;

## Calculating Time Complexity: 

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
  for (const rows in arr) { -> n
    for (const cols in rows) { -> n
      console.log(arr[cols]) -> O(n)
    }
  }
}
```

T = n² * O(1) <br>
T = n² * c <br>
T = O(n²) <br>

If there was another nested loop then, 

T = n² * O(1) +  n² * O(1)  
T = n² * c₁ +  n² * c₂  
T = n² (c₁ + c₂)  
T = O(n²)  

same for any number of loops  

> A good example that shows why having same time complexity doesn't necessarily make the execution time similar. 

&nbsp;


&nbsp;

## Data structures:

A data structure is a way of organizing and storing data.

> Associative arrays, hash table, objects and maps can be used interchangably.

## Array:

It is a data structure used to store collection of values each identified with a unique index.

<img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162247/Array-data-structure.png' width = 600 height = 300>  
  
&nbsp;

```js
const arr1 = [1,2,3,4,5]
const arr2 = ['a','b','c','d','e']

arr[1]
arr[0] + arr[1]
```

You can also use strings for indexing: 

```js
const arr = [1, 2, 3, 4, 5]

arr["a"] = 6
console.log(arr)  // [ 1, 2, 3, 4, 5, a: 6 ]

```
&nbsp;
## Stack

A stack is a LIFO (Last In First Out) data structure. The items are stacked in a vertical manner and push() and pop() method are used to store and remove items from the stack.

<img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726165552/Stack-Data-Structure.png' width = 600 height = 300>

&nbsp;

```js
class Stack {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop(item) {
    if (this.isEmpty()) {
      return "Underflow"
    }
    this.items.pop(item)
  }

  isEmpty() {
    return this.items.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return "No items in the stack"
    }
    return this.items[this.items.length - 1] // returns top element
  }

  print() {
    console.log(this.items.join())
  }

  size() {
    return this.items.length
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

console.log(stack)
stack.print()

console.log(stack.peek())

console.log(stack.size())

console.log(stack.isEmpty())

```

This data structure might seem useless (and kinda is) but there are some intersting use cases:

- Undo / Redo features 
- Go back and forth in browser history
- Keep track of function calls and local variables (Call Stack)
- Back-tracking alogorithms
  
&nbsp;

## Queue: 

A queue is a FIFO (First In First Out) data structure. They are aligned in a veritcal manner and push() and shift() method are used to queue and dequeue items from the queue.

<img src ='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png' width = 600 height = 300>  

&nbsp;

```js
class Queue {
  constructor() {
    this.items = []
  }

  queue(item) {
    this.items.push(item)
  }

  dequeue(item) {
    if (this.isEmpty()) {
      return "Underflow"
    }
    this.items.shift(item)
  }

  isEmpty() {
    return this.items.length === 0
  }

  front() {
    if (this.isEmpty()) {
      return "No items in the queue"
    }
    return this.items[0] // returns first element element
  }

  print() {
    console.log(this.items.join())
  }

  size() {
    return this.items.length
  }
}

const queue = new Queue()

queue.queue(1)
queue.queue(2)
queue.queue(3)

queue.dequeue()

console.log(queue.front())

console.log(queue.isEmpty())

queue.print()

console.log(queue.size())

```


> Priority queue is a type of queue that dequeues on the basis of priority rather than the order they were queued in. Don't worry about the code :D (trust me ... 😢)


Use cases: 

- BFS algorithms
- Task scheduling
- Messaging System
- Asynchronous Programming (Callback queue and Microtask queue)
- Keyboard buffer

&nbsp;

 ## Linked List

 It is a data structure that consits of elements (nodes) which point to the next element in the sequence. The last node usually points to null. 

<img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162542/Linked-List-Data-Structure.png' width = 600 height = 300>

 It is usually uni-directional but doubly linked list is bi-directional.

 <img src = 'https://www.boardinfinity.com/blog/content/images/2022/11/Untitled-design--16-.jpg' width = 600 height = 300>

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
&nbsp;

## Tree

A tree is a hierarchical data structure that consists of nodes connected by edges. 


<img src = 'https://cdn.programiz.com/sites/tutorial2program/files/tree_0.png' width = 250 height = 300>

The topmost node without any parent is the root.  

The node without any children is called a leaf node. 

The node with descendants are called internal node.  

Level is the distance of the node from the root. Root is at level 0.  

<img src = 'https://media.geeksforgeeks.org/wp-content/uploads/20230626160718/Tree-Data-Structure--nEW.png' width = 790 height = 420>

&nbsp;

Criterias of a Tree: 

- There should no loops or cycles. 
- There can be only one root.  
- Each children must have only one parent. 
- Each node must be connected and we should be able to reach any node from the root. 
- It must be uni-directional else its a graph. 

> Linked List is also technically a tree. 

&nbsp;

## Binary Tree

A binary tree is a tree data structure in which each node can have zero, one, or at most two children which are referred to as the left child and the right child.

<img src = 'https://cdn.programiz.com/sites/tutorial2program/files/perfect-binary-tree_0.png' width = 320 height = 250>

&nbsp;

## Binary Search Tree (BST)

A binary search tree is a specific type of binary tree where the value of each node in the tree is greater than or equal to all the values in its left subtree and less than or equal to all the values in its right subtree.

So the parent must be the middle value between its descendants where it should be greater than the left descendant and less than the right descendant. 

<img src = 'https://courses.engr.illinois.edu/cs225/sp2019/assets/notes/bst/bsttreetraversal.png' width = 500 height = 320> 

&nbsp;

```js
class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const root = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)

root.left = node2
root.right = node3

node2.left = node4
node2.right = node5

node3.left = node6
node3.right = node7

console.log(root)
```

```js
function sum(root) {
  if (root == null) { -> O(1)
    return 0 -> O(1)
  }
  return root.data + sum(root.left) + sum(root.right)
}

console.log(sum(root)) // 28
```
Everything takes constant amount of time except the functions recursively being called twice, so:  

T = O(2n)  
T = O(n)

&nbsp;

## Algorithms: 

An algorithm is a step-by-step procedure or set of rules designed to solve a specific problem. It is a sequence of well-defined instructions that, when followed, lead to the desired outcome. 

- Sorting Algorithms: Organizing an array of items into a specific order (e.g., bubble sort, quicksort, merge sort).

- Searching Algorithms: Finding a specific item or value in a collection (e.g., binary search, linear search).

- Graph Algorithms: Analyzing and traversing graphs (e.g., depth-first search, breadth-first search).

- Numerical Algorithms: Performing mathematical computations (e.g., algorithms for matrix multiplication, numerical integration).

- Machine Learning Algorithms: Training models and making predictions based on data (e.g., linear regression, decision trees, neural networks).

- Encryption Algorithms: Securing information by encoding it in a way that is difficult to decipher without the proper key (e.g., RSA algorithm).

&nbsp; 

## Linear Search:

It is the simplest of searching algorithm where we iterate through each item one at a time. The data doesn't need to be sorted and it is good for medium and small data set. Its' time complexity is O(n).

```js
function linear_search(arr, target) {
  for (const i in arr) {
    if (arr[i] == target) {
      return i
    }
  }
  return -1
}

console.log(linear_search(arr, target))
```
&nbsp;

## Binary Search: 

It is a a searching algorithm that gets the middle number and repeatedly divides the array in half until the element is found. It uses left and right pointers to continously narrow down the array. Its' time complexity is O(logn) cuz log is kinda like the inverse of exponent and binary search repeatedly halves the array.

> Note: works only in sorted arrays

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const target = 8
```
```js
function binary_search(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor(left + (right-left) / 2) // Math.round() and Math.ceil() works too

    if (arr[mid] === target) {
      return mid
    } else if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}
console.log(binary_search(arr, target))
```

> The reason for not using (left+right) / 2 is because if left and right are very large numbers, then it could cause integer overflow.

&nbsp;

## Interpolation Search: 

It is a searching algorithm that works best with sorted and uniformly distributed array (having equal gaps between all elements). Its' time complexity is O(log(logn)). Worst case: O(n) when input increases rapidly. It makes a calculated probe guess of where the target might be.  

Probe is the attempted examined value to see if its the target. In binary search, middle value is the probe. 

&nbsp;

$$ \text{probe} = \text{left} + \left\lfloor \frac{(\text{target} - \text{arr[left]}) \cdot (\text{right} - \text{left})}{\text{arr[right]} - \text{arr[left]}} \right\rfloor $$

&nbsp;


```js
function interpolation_search(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    const probe =
      left +
      Math.floor(
        ((target - arr[left]) * (right - left)) / (arr[right] - arr[left])
      )

    if (arr[probe] === target) {
      return probe
    }

    if (arr[probe] < target) {
      left = probe + 1
    } else {
      right = probe - 1
    }
  }

  return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  // one shots this kinda array lol
const target = 7

console.log(interpolation_search(arr, target))

```


&nbsp;

## Bubble Sort: 

It is a sorting algorithm that compares two adjacent elements and swaps their places if they are not in the right order. 
So every iteration, the largest element is sorted to the right. Its' time complexity is O($n^2$)

```js
const arr = [6, 3, 2, 1, 2, 10, 9]

function bubble_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubble_sort(arr))

```

By the completion of the each outer loop i, the largest element will be in the farthest right.  
So we subtract i from the inner loop j to avoid unnecessary iterations for the sorted items.  
We also subtract 1 from i  because we need to sort 9 times at most for 10 items because when 9 items are sorted then the 10th item is already sorted.  
And finally the reason for subtracting 1 from j is so that arr [j+1] is not out of index when it reaches the final element.

&nbsp;

## Selection Sort: 

It is a sorting algorithm that stores the minimum value in a variable. After an iteration, the index of that temporary value and the current item index is swapped. So every iteration, the smallest item is sorted to the left. Its' time complexity is O($n^2$)


```js
function selection_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }

      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}

const arr = [3, 5, 7, 10, 8, 9, 2]
console.log(selection_sort(arr))
```

Same logic for i < arr.length - 1.  
j starts from i+1 as min already stores the value of i.

&nbsp;

## Insertion Sort: 

It is a sorting algorithm where we start from index 1. We store it in a temporary variable and if the value to its left is greater than the temporary value then we shift it to the its right. We do this process until a value smaller than it is encountered. Its' time complexity is O($n^2$) but is preferrable to bubble sort and selection sort as it takes less number of steps and in best case scenario it can run in O(n).

```js
function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {

    let currentValue = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentValue
  }

  return arr
}

const arr = [3, 5, 7, 10, 8, 9, 2]
console.log(insertion_sort(arr))
```

We are starting from index 1 so we can't do i < arr.length - 1.  

reason for arr [j+1] = currrentValue is because j would be pointing to the one value before it. 

&nbsp;

## Quick Sort: 

It is a sorting algorithm that uses a divide-and-conquer strategy to efficiently sort an array. The basic idea is to select a pivot element from the array and partition the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted. Its' time complexity is O(n log(n)) but if the array is already sorted in ascending or descending then its' time complexity is O($n^2$)

```js
const arr = [4, 3, 6, 7, 1, 0, 10, 4, -2]

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr // base case
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quick_sort(left), pivot, ...quick_sort(right)]
}

console.log(quick_sort(arr))
```

&nbsp;

## Merge Sort: 

It is a divide-and-conquer sorting algorithm that works by dividing the array into smaller and recursively sorting the sub-arrays and merging them back together. Its time complexity is O(n logn)

```js
function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr // base case
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(merge_sort(left), merge_sort(right))
}

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right]
}

const arr = [4, 2, 3, 10, 8, 5, 1]
console.log(merge_sort(arr))
```

- First the array is divided into two parts [4, 2, 3] and [10, 8, 5, 1]  
  
- now merge_sort() is called on the left side i.e [4, 2, 3]  
  
- the function is called again and [4, 2, 3] is again split into [4, 2] and [3] 
   
- merge_sort() is again called merge_sort (left = [4, 2], merge_sort (right = [3]))  
  
- for [4, 2] merge_sort() is again called and they are seperated individually and they go into merge() as merge (left = 4, right = 2)
  
  - 4 and 2 is compared and smaller element 2 is shifted into the new array 'arr'
  
  - the returned value is [2, [] ,4] => [2, 4]
  
- for [3], [3] itself is returned because of the base case. 
  
- the arrays now are [2, 4] and [3]. It will now be returned and merge() will be called on it. 
  
  - First 2 and 3 are compared and 2 is shifted into the new array 
  
  - Then 4 and 3 are compared and 3 is shifted into the new array
  
  - And since the right array's length is 0, it breaks out and concanetes the array and the remaning element 4
  
  - returned value = [2, 3, 4]
  
- this all happens for the left part. right part is the same too. It gets split into 2 different arrays [10, 8] and [5, 1]. [10, 8] is sorted as [8, 10] and [5, 1] as [1, 5]. They are merged and sorted as [1, 5, 8, 10]
  
- Now for the final comparison, left = [2, 3, 4] and right = [1, 5, 8, 10]
  
  - 2 and 1 is compared and 1 is shifted into the new array
  
  - 2 and 5 is compared and 2 is shifted into the new array
  
  - 3 and 5 is compared and 3 is shifted into the new array
  
  - 4 and 5 is compared and 4 is shifted into the new array
  
  - The left array is now empty and the returned value is [1, 2, 3, 4, 5, 8, 10] 

 

