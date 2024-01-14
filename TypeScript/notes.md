
##  Statically Typed Languages: 

#### In languages like C++, C#, Java, the data types of variables are determined at compile-time meaning me must explicitly define its type and cannot be changed to another data type during the execution of the program.

```c
#include <stdio.h>

int main() {
int age = 30;
return 0;
}
```

#### Here age is an integer and we cannot assign it a non integer value. </div>
&nbsp;

##  Dynamically Typed Languages: 

#### In languages like Javascript, Python and Ruby, data types of variables are determined at runtime / execution of the program so there's no need to explicitly define them. This allows great flexibility but also leads to potential risks if not handled carefully.

```python
age = 30;
age = 'thirty'  # valid
```

#### So in a nutshell Typescript is bascially a superset of Javascript that supports static type checking and other functionalities. 

#### A typescript compiler is needed to transpile the Typescript code into vanilla Javascript for browsers to understand it.

&nbsp;

##  Annotation

```js
let sales: number = 123_456_789;

let course: string= 'Typescript';

let isPublished: boolean = true;

let profit = 5000; // auto annotates to number

let level; //  annotates to any

level = 1
level = 'a' // with 'any' data type we can dynamically type which kinda looses the whole purpose of TS..

```

#### No need to explicitly annotate the data type everytime.

#### JS arrays can have both strings and integers: 

```ts
let dynamicArr: any[] = [1,2,'3']; // valid

let numArr: number[] = [1,2,3];

let strArr: string[] = ['a','b','c']

```

```ts
let arr: [number, string] = [1,'Sam'] 
```

#### Here First element must be a number and second element must be a string. And only 2 elements.
However if you .push() an element it won't show an error cuz TS ain't perfect.

#### <divhen no information is explicitly annotation then the compiler "infers" (deduces) the types of variables
</div>  

##  Enums

#### Enumeration data type is used to represent associated constants. Convention of PascalCase.

```ts
enum Size { Small = 's', Medium = 12, Large }  // by default first is 0, 1, 2, ...

let mySize : Size = Size.Large;

console.log(Size);  // prints the thing as it is
console.log(mySize) // 13
```
tsc will increment Large by 1 if there is a number before it.
```ts
enum Size { Small = 'a', Medium = 'b', Large }
```
#### In theory here Large's value should be 'c' but it'll ask to initialize it anyway.

```ts
const enum ...
```
#### If you add const then the transpiled JS will be much more optimized / easier to read. 

#### By default JS function returns undefined.

```ts
function calculateTax(income: number): void {
    return undefined

function calculateTax(income: number): number { 
    if (income > 500000) 
        return income;
    return income * 1.2;
}
}
```
&nbsp;

In 'Type Checking' of the config file: 

1. "noUnusedParameters": true  </span> : raises an error for unused params  
2. "noImplicitReturns": true</span> : raises an error if you forget to return a value  
3. "noUnusedLocals: true</span> :  raises an error if local variable isn't used

#### And inside the config file: 

```ts
  "include": [
    "src"
  ]

// add this if you don't want ts files outside src to get auto compiled into js files cuz tsc -w auto compiles every ts files into js files
```

&nbsp;
```ts
function calculateTax(income: number, year?: number): number {

    if ((year || 2022) > 2023) return income
    return income * 1.2;
}

calculateTax(50_000)
```

#### ? means optional in parameter. Here 'year' would be undefined so we used || to avoid error. You can do assign it a default value: 

```ts
function calculateTax(income: number, year = 2022): number {

    if ((year) > 2023) return income
    return income * 1.2;
}

calculateTax(50_000)
```

#### If you do pass a value then it'll overwrite the default value.

```ts
let person = {id: name}
person.name = 'Sam';   // not valid unlike JS
```

```ts
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} ={id: 1,
     name: 'Sam',
    retire: (date: Date) => {
        console.log(date)
    }
}
```

#### Here employee is an object with a retire method. While defining a method we need to write the number and type of parameter along with it's return type. Adding readonly makes the id immutable.

#### This code doesn't follow the DRY principle. (Don't Repeat Yourself) so we use Type Alias:

```ts
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void //  : void works too
}

let employee_1: Employee = {
    id: 1,
    name: 'Sam',
    retire: (date: Date) =>
        console.log(date)
    }
}

```

#### Type Alias is like a blueprint for annonating stuff mainly objects.

```ts
function kgToLbs (weight: number | string) : number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');
```

#### "|" is called Union Type that allows parameters and varaibles to have mutiple data type.
```ts
let Tuple = [string | number] = [1] /* or */ ['a']

let Tuple = [string, number] = ['A', 1]

let Tuple = (string | number) [] : ['A' , 'a']

```

So using union doesn't limit the number of elements and their order. 

&nbsp;

```ts
let re: RegExp = /\w+/g
```
&nbsp;

#### Type intersection is a way to combine mutiple types into a single type that includes all the methods and properties. It is denoted by "&".

```ts
type PrivateInfo = {
    name: string
    age: number
}

type PublicInfo = {
    id: number,
    position?: string,
    salary : () => void
}
type EmployeeInfo = PrivateInfo & PublicInfo

const employee: EmployeeInfo = {
    id: 1,
    name: "Sam",
    age: 22,
    salary: () => console.log("Confidential") 
}
```

Literal type can be used limit the assignable values and such.

```ts
let quantity:  50 = 50 // only accepts 50

let quantity: 50 | 100 = 100 // accepts 50 or 100

type Metric = 'cm' | 'm'  // Literal Type

let mesurement: Metric = 'cm'

```

###  Interfaces

They are very similar to types except they can only be used to describe shape of an object.


#### No need comma while describing shape of an object in both type and interface </div>

```ts
interface Person {  // no equals symbol
    name: string,
    age: number,
    greet() : void
}
```

#### Another major difference is that interfaces don't support union.

```ts
type Point = number | string 
const point: Point = 1
// not valid in interfaces
```
&nbsp;


```ts 

class Person {
    id: number
    name: string

    constructor (id: number, name: string) {
        this.id = id
        this.name = name
    }

    register (): void {
        console.log(`${this.name} has resgistered`)
    }
}

let person = new Person (1, 'Sam')
person.register()

// the datatype should be annotated in the constructor and inside the class as well.

// instantiating an instance of the Class will directly call the constructor so it's important to annoate the datatype inside.

// Annotating outside is necessary too for the whole Class can refer to it and also so that any code that uses it's instances can refer to it
```

&nbsp;


```ts 

class Person {
    id: number
    name: string

    constructor (id: number, name: string) {
        this.id = id
        this.name = name
    }

    register (): void {
        console.log(`${this.name} has resgistered`)
    }
}

let person = new Person (1, 'Sam')
person.register()
```

&nbsp;

```ts
interface PersonInterface {
    id: number;
    name: string;
    register(): void; 
  }
  
  class Person implements PersonInterface {
    id: number  
    name: string
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    register(): void{
      console.log(`${this.name} has registered`)

    }
  }
  
let person = new Person(1, 'Sam')
person.register()

```

#### Implementing an interface in a class does not annotate the datatype directly but it defines the contract the class must follow. TypeScript === RedundantScript
```ts
class Employee extends Person {  // inherits props and methods of Person class
    position: string

    constructor (id: number, name: string, position: string) {
        super (id, name) // calls the parent constructor and pass these arguments (you need this)
        this.position = position
    }
}

const employee = new Employee (3, 'Shawn', 'Developer')
emp.register()
```  

#### Ooo I figured something out: 

```ts
class Person { 
    constructor (public id: number, public name: string) {
    this.id = id
    this.name = name
    }
}
```  
#### Even though 'public' is default, the annotation in the constructor doesn't seem to extend to the whole class so explicitly define it public
&nbsp;


##  Data / Access Modifiers

#### They are used to define the accesibility of properties and methods of a class.

1. Public - Accessed from anywhere
2. Private - Accessed only from within the class
3. Protected - Accessed within the class and derived / sub classes

In the above example Employee is a subclass of Person class.

```ts
class Animal {
    private name: string;
    protected age: number;
    public readonly species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public introduce(): string {
        return `Hi`;
    }
}

class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    public getInfo(): string {
        return `Hi`;
    }

    public changeAge(newAge: number): void {
        this.age = newAge;
    }
}

let myAnimal = new Animal("Generic Animal", 5, "Mammal");

console.log(myAnimal.species);   // Output: "Mammal"
console.log(myAnimal.name);  // Error
console.log(myAnimal.age);  // Error

let myDog = new Dog("Buddy", 3, "Canine", "Labrador");

console.log(myDog.species);     // Output: "Canine"
console.log(myDog.name);     // Error
console.log(myDog.age);     // Error

console.log(myDog.getInfo()); // Output: "Hi"
myDog.changeAge(4);
console.log(myDog.getInfo()); // Output: "Hi"

```

&nbsp;


##   Type Assertion </div>

#### It is a way of explicitly informing the compiler that we know more about the data type than it.

```ts
const addOrConcat = (a: number, b: number, operation:'add' | 'concat') : number | string => {
    if (operation === 'add') return a + b
    return a + b + '' 
}

let myVal: string = addOrConcat (2,2, 'concat') 

// here we know that passing 'concat' will definitely return a string but the compiler says it can be a number too u stoopid so we say: 

let myVal: string = addOrConcat (2, 2, 'concat') as string
//or
let myVal = <string> addOrConcat (2, 2, 'concat')

let nextVal: number = addOrConcat (2, 2, 'concat') as number


```

#### Anglular brackets syntax cannot be used in tsx files 

#### If you're wondering where this would be useful: 

```ts
const img = document.querySelector('img')

// Here the img can be null |  HTMLImageElement

img.src = 'hackish.gif'

// This raises an error as image can be null so we humble the compiler

// So you can either use non-null assertion '!'

const img = document.querySelector('img')!

//or 

const img = document.querySelector('img') as HTMLImageElement

// HTMLElement or Element works too but other elements like paragraph don't have src property so try and be specific

const ele = document.getElementById('#item-1')

// Here as well 'ele' is it's HTMLElement | null


```    

```ts
interface Transaction {
    Pizza: number
    Books: number
}
const transactionObj: Transaction = {
    Pizza: 10,
    Books: -5
}

console.log (transactionObj.Pizza) // 10

console.log (transactionObj['Pizza']) // 10

// for this to be dynamic: 

let key: string = 'Pizza'
console.log (transactionObj[key])
```

#### This raises an error because in the interface we said that the keys can only be Pizza or Books and the compiler takes it quite literally and infers 'key' as a 'string' which we have not explicitly annotated. Idoesn't consider the fact that dynamic code could be provided so index signature is used:   

```ts

interface Transaction { 
    [key: string]: number | string
}

// annotating key as string and its value as union of number and string

const transactionObj: Transaction = {
    Pizza: 10,
    Books: -5
}

for (let key in transactionObj) {
    console.log(transactionObj[key])
}

console.log(transactionObj['Pizza'])

// However with this TS will be unable to detect keys that don't exist in the objects: 

console.log(transactionObj['Momo']) // undefined


```  

```ts
interface Student { 
    name: string,
    GPA: number,
    classes?: number[]
}

const student : Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

// This is an alterative way where key is asserted as a key of the Student interface. So under the hood: 

key: "name" | "GPA" | "classes"

```  

```ts
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

// If we haven't explicitly defined the interface or type we can basically say typeof object and it'll just infer it.

```
&nbsp;
##  Generic

#### Generic  allows to create 'type variables' which is used to make functions, classes, etc flexible. <T> is a convention

```ts
function genericFunction <T> (arg: T): T {
    return arg
}
const param1: string =  genericFunction ("Hello")  // 'T' is replaced by string
const param2: number =  genericFunction (42)    // 'T' is replaced by number

```    
```ts
function reverseArray <T> (arr: T[]): T[] {
  return arr.reverse();
}

const numbers: number[] = [1, 2, 3, 4, 5];
const reversedNumbers: number[] = reverseArray(numbers); // '<T>' is replaced by number[] 
console.log(reversedNumbers); 

const fruits: string[] = ['apple', 'banana', 'orange'];
const reversedFruits: string[] = reverseArray(fruits);  // '<T>' is replaced by string[] 
console.log(reversedFruits); 
```  

```ts
interface HasID { 
    id: number
}

const processUser = <T extends HasID> (user:T): T => user

console.log (processUser({name: 'Dave', id: 1}))

// In a nutshell, type parameter that gets passed must have implement the contract of HasID interface i.e must have a prop called id.
``` 

&nbsp;

```ts
// Cryptic syntax in bound

const usersArray = [   // An array of objects / JSON
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ]

interface HasID { 
    id: number
}

const getUserProperty = <T extends HasID, K extends keyof T> (users: T[], key: K): T[K] [] => {
    return users.map(user => user[key])
}

console.log (getUserProperty(usersArray, "email"))  // ['Sincere@april.biz', 'Shanna@melissa.tv' ]
```

#### The generic function accepts two type arguments: T and K. T is the array of objects T[] and K is the keys of the objects like "name", "phone"...
#### It returns an array of the values of keys of the objects. T[K] is the value of the keys and T[K] [] is array of those values.

&nbsp;

##  Utility Types  </div>

#### Utility types are tools used for transforming and manipulating types and interfaces. 

```ts
interface Assignment { 
  studentID: string,
  title: string,
  grade: number,
  verified?: boolean
}
const updateAssignment =  (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate}
}

const assignment-1: Assignment = {
  studentID: 'XD123',
  title: "Final Project",
  grade: 0
}

const newAssign = updateAssignment (assignment-1, {grade: 95}))
```

#### Partial<Type> constructs a new type with all the properties of 'Type' set to optional.

#### So here we were able to pass just the grade without any issues cause the partial utility type set all the other properties to optional.

```ts
const newerAssign = (assign: Required <Assignment>): Assignment => {
    return assign
}

// creates a new type where all the properties of Assignment will be required

const newestAssign = (assign: Readonly<Assignment>): Assignment =>{
    return assign
})

// creates a new type where the properties are read-only

newestAssign.grade = 100 // invalid

```  d<string, string> = {
    red: "#FF0000",
    blue: "00FF00",
    green "#0000FF"
}
```
#### Record <T, K> where T is type and K is key creates a new type with those assigned type values. Kinda like a shortcut for: 
[key: string]: strinlorMap }
```  

```ts
type Students = 'Sara' | 'Kelly'
type Grades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record <Students, Grades> = {
    Sara: "B",
    Kelly: "U"
}
```  

```ts
interface Grades { 
    assign-1: number,
    assign-2: number,
}

const gradeData: Record <Students, Grade> = {
    Sara: {assign-1: 85, assign-2: 93},
    Kelly: {assign-1: 60, assign-2: 12},
}
```  

```ts
type AssignResult = Pick<Assingment, 'studentID' | 'grade'> 

const score: AssignResult = {
    studentID: "KX12",
    grade: 85
}
```

#### Pick <T, K> creates a subset type / interface picking properties "K" from "T"
#### Here studentID and grade are picked.

```ts
type AssignPreview = Omit <Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentID: 'KEW23',
    title: "Final Project"
}
```  

#### Does the opposite of Pick and creates a new type by ommiting the selected properties.  

```ts
type Grades = 'A' | 'B' | 'C' | 'D' | 'U'

type adjustedGrade = Exclude <Grades, "U">

type highGrades = Extract <Grades, "A" | B>

```

#### They are the same as Pick and Omit but they work with string literal union types instead of interfaces and types.

#### Extract creates a new type by extracting the seleceted string literal and Exclude excludes them.
  
```ts
type nameList = "Dave" | "Sam" | null | undefined

type validNames = NonNullable <nameList>

// removes undefined and null from the type
```  
