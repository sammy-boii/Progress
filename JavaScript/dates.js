
const now = new Date();

// Sat May 27 2023 21:40:31 GMT+0545 (Nepal Time)

new Date(year, month, day, hour, minute, second, millisecond);

new Date('May 27 2023');

new Date(10121312321)

// that is in milliseconds passed since 1970 Jan 1
// any format works

const myDate = new Date();

myDate.toString(); // converts to string

myDate.toISOString(); // ISO format ma display

myDate.getMonth() // starts from 0-11

// and more... kinda useful 
