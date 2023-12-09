

// Modules allows us to break apart the js code into various files 

// say there is a file named 'user.js' and its' content are:

export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
    console.log(`User's age is ${user.age}`);
}

/*

 or 

 export default User;
 export { printName, printAge };
 only 1 default export is possible

*/

 <script src = 'main.js' type = 'module'></script>  // do this in html file to use import

// now this is 'main.js'


import Users, {printName, printAge as printage} from '/user.js'

// we can rename them as well User -> Users and printAge -> printage

const user = new Users ('Bob', 12);

printName(user);
printage(user);

