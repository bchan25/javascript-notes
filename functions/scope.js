/*
  Scope - Where the variable is define
*/

function doMath() {
  // Local Scope
  var x = 40;
  console.log(x);
}

// Can't use x here Global scope

// Global Scope variable
var y = 99;

function doMoreMath() {
  // Can use here
  console.log(y);
}