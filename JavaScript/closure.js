/*

Lexical scoping / Static scoping refers to the ability of a function scope to access variables from the parent scope. 

It is a property intrinsic only to function scopes. A simple example is if a variable is declared / assignned outside the function in the global aspect it searches for it in its parent scope i.e global scope. This is a bad example cuz it works for block scope as well. >_<

*/

function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log("OuterVar" + outerVar);
    console.log("InnerVar" + innerVar);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

/*

aight here line 20 calls the outerFunction passing 'outside' as the argument. and it returns function called 'innerFunction' which is stored in 'newFunction'. then the newFunction / innerFunction is called passing inside as the argument and prints the respective values. The reason outerVar is logged is because of lexical scoping. the innerFunction searches for outerVar from its parent i.e outerFunction and uses it even if the function has already been executed and the outerVar has already been terminated. 

*/
