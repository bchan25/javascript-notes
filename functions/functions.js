/*
  Functions - Reusable block of code that performs a Action
*/

// Function Declaration
function doSomething() {
  console.log("Doing something");
  console.log("Finished....");
}

// Calling a function
doSomething();


// Arguments - Taking a input
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Ben");

// Mutiple arguments
function area(length, width) {
  console.log(length * width);
}

area(9, 2);

// Return - send back a output value. Also stop execution of a function.
function square(x) {
  return x * x;
}

var value = square(4);
console.log(value);

// Function Expression - Can change if you redefine the varible.
var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var nameCapital = capitalize("ben");

// No longer a function
capitalize = "HELLO";


/* 
  Higher Order Functions 
  
  Pass functions into other functions
*/

function sing() {
  console.log("twinkle twinkle...");
  console.log("how i wonder...");
}

// Function calling another function. 
// No () because we want setInterval() to execute it
setInterval(sing, 1000);

// Anonymous Function
setInterval(function () {
  console.log("I am an anonymous function");
  console.log("This is awesome!");
}, 2000);