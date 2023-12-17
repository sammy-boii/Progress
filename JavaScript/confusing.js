
// Example 1: Using a callback function

function square(num, callback) {
    const result = num * num;
    callback(result);
  }
  
  function displayResult(result) {
    console.log("The result is: " + result);
  }
  
  square(5, displayResult); // Output: The result is: 25

  // first 'square' invoke garxa ra two parameters pass garxa, one is an integer and other is a function/ callback function. now num=5 and callback=displayResult (same name rakhda pani hunxa). num gets squared and 'callback' is invoked passing the squared number which simple prints the result.
  
  
  // Example 2: Using an anonymous function


  function cube(num, callback) {
    const result = num * num * num;
    callback(result);
  }
  
  cube(3, function(result) {
    console.log("The result is: " + result);
  }); 
  
  // Output: The result is: 27
  
  //yesma rather than defining a function seperately and passing, it is defined during passing process which makes it possible for it to be nameless/ anonyomous. 
  
  
  // Example 3: Using callback and anonymous function together


  function calculate(num, operation, callback) {
    const result = operation(num);
    callback(result);
  }
  
  function double(num) {
    return num * 2;
  }
  
  calculate(6, double, function(result) {
    console.log("The result is: " + result);
  });
  
  // Output: The result is: 12
  