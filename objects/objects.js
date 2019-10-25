/*
  Objects - List with Key/Value.

  Can hold numbers, strings, boolean, arrays, objects,  functions

  Other Lanuage call objects a dictionary
*/

var person = {
  name: "Ben",
  age: 31,
  city: "Flint",
  sayHi: function () {
    console.log("Hi");
  }
};

// Retrieving data (bracket notation or dot notation)
console.log(person["name"]);
console.log(person.age);
person.sayHi();

// Update Data
person.age += 1;
console.log(person.age);

/*
  Creating Objects

  var person = {}

  or

  var person = new Object();

  or like the one above
*/

// Common Array with Nested Objects
var posts = [
  {
    title: "Hello World",
    author: "Ben"
  },
  {
    title: "Random Title",
    author: "Ben"
  }
]

// This Keyword (Which data you refer to) https://www.w3schools.com/js/js_this.asp 