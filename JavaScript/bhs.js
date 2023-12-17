// Javascript Runtime Environment is reponsible for the running of JS in the browser and NodeJS.

// It conists of Javascript Engine (Call Stack), Callback Queue, Microtask Queue, Event Loop, Garbage collector and APIs.

// ! Note: The browser engine like V8 (Google) and SpiderMonkey are more complex and consists of Javascript Runtime Environment. UI rendering stuff, Security, DOM, etc...

// ? JS is a Just In Time Language (JIT) which is a mix of interpreter and compiler. It's heavily optimized.

/*

Callstack / JS Engine

? In Call Stack the execution of JS code takes place.

? First Step: It parses the code and creates an AST.

? The AST is recognized by the compiler and interpreter and starts doing its thing.

*  Goto plethora.js for Parsing Details.

? Call stack follows last-in first-out concept. 

*/

var GLOBAL = 1;
function func() {
  var local = 10;
  console.log(local);
}
func();
/*

? When it finishes parsing and stuff, a Global Execution Context (GEC) is created and allocates memory for each variable and function. For variables, it assigns undefined (const or let wouldn't get undefined ig) and for functions, it keeps the whole code in the memory.

? When the execution context, reaches the assingment line, it replaces the undefined with the respective values.

? For functions, when it reaches the invocation line, it creates a Local Execution Context (LEC) which also allocates memory and stuff for the function but in the local scope.

? Now this GEC is pushed into the callstack. When a function is invoked, it is also pushed into the callstack and until that function returns something, it stays in the callstack. So if u call a function inside another function, the newly called funtion gets stacked on top of the previously called function.

? Heap and Stack are two different places where data can be stored. As mentioned, a stack gets removed after execution so its logical that local variables are stored in the stack. This is the reason why we can't access them outside the function because they will have finished executing and no longer available with the exceptions of closure.

? Heaps on the other hand are used to store global data because it should be accessible anywhere at anytime and shouldn't rely on function's invocation. So in the above code, GLOBAL is stored in heap and local is stored in stack when the function is invoked.

? When u store by reference, it automatically gets stored in the heap. But lets say that reference is a local variable. When the stack is removed, the reference breaks too and is no longer needed. So that's where the garbage collector comes in play.

? The garbage collector follows the Mark and Sweep Algorithm. It goes through the heap and marks the address that are needed. Then it comes along and sweeps the unmarked address.

* short break ...

! Note: setTimeout(), DOM methods, fetch(), localStorage are APIs and not native to JS...

? The above process mainly happens in the call stack. Now lets say there is asynchronous stuff happening.

* The asynchronous callback is kept in the callback queue which is constantly checked by the EVENT LOOP. 

* If the callstack is empty, then the EVENT LOOP pushes the ready callback into the call stack.

* For Promises and DOM Mutations, they are pushed to MicroTasks queue and have higher priority than callback queue.

* If there is a case where there is a huge amount for microtasks and the callback takes a long time to be pushed, then its called Starvation of Callback Queue.

! EVENT LOOP

Its like the main intermediate between most of the things that happen in the browser. Besides, pushing microtasks and callbacks into the call stack, it also handles rendering time, CSS changes and JS itself.

Layout looks something like this: JS  ->  requestAnimationFrame()  ->  Layout   ->   Styling   ->   Rendering

So when one JS task is done, it goes around. If requestAnimationFrame() is called or the layout changes or styling is different then only it does a full roundabout else it'd be uncessarily re-rendering each cycle. It'll take a shortcut, skipping all them and go back to JS task list.

*/

while (true) {}

setTimeout(func, 0);

/*

? When the event loop tries and execute the while loop, it gets stuck trying to finish it. So when re rendering needs to happen, it can't because the event loop is occupied looping infintely. 

? On the other hand, setTimeout() doesn't break the cycle as the event loop executes func once and marks it as task done and completes the cycle. It again goes back executing func again and again. So it'll be able to make the cycle and re render and stuff if need be. 

? Another thing is requestAnimationFrame() gets executed in an optimzed way. So if u animated using setTimeout() or something else, then the browser would need to re-render after every interval and it can cause a difference in monitors with different Hz.

? So with requestAnimationFrame(), the event loop can perform mutiple JS tasks and execute the requestAnimationFrame() and re-render it only once in an optimzed fashion.

*/
