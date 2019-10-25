/*
  Arrays - Data Structure
  A list of data that is group together
*/

// Array - Zero index [0] [1] [2] [3]
var friends = ["Charlie", "Liz", "David", "Helen"];

// Hello Liz
console.log("Hello " + friends[1]);

// Update a value
friends[0] = "Chris";

// Add new data (Index not used yet)
friends[4] = "Kate"

/*
  Array Methods
*/

var colours = ["red", "orange", "yellow"];

// Add new data to end
colours.push("blue");

// Remove last element of Array
colours.pop();

// Add new data to front of Array
colours.unshift("green");

// Remove first element of array
colours.shift();

// Find the index of an item (first instance)
colours.indexOf("red");

// Slice to copy parts of an array [orange, yellow]
// Inclusive means not including the last number (index)
var newColours = colours.slice(1, 3);
