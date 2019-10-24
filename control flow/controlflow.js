// Boolean Logic - True or False
/*
  Comparison Operators

  > Greater than
  >= Greater than or equal to
  < Less than
  <= Less than or equal to

  == Equal to
  != Not equal to
  === Equal value and Type (Use this)
  !== Not equal to and Type (Use this)
*/

/*
  Logical Operators (Chaining more than 1 condition)

  && AND
  || OR
  ! NOT

  var x = 10;
  var y = "a";

  y === "b" || x >= 10
*/

/* 
  Conditionals - Decisions with code

  If / Else If / Else
*/

var age = 18;

if (age < 18) {
  console.log("Sorry, you are to young to get in.");
}
else if (age < 21) {
  console.log("Your to young to drink");
}
else {
  console.log("Come on in. You can drink");
}

// Exercise Answer
if (age < 0) {
  console.log("You can't be a minus number");
}
else if (age === 21) {
  console.log("Happy 21st bithday");
}
else if (age % 2 !== 0) {
  console.log("Your age is odd!");
}
else if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

/* 
  Looping

  DRY Code - Don't Repeat Yourself

  WARNING INFINITE LOOP WOULD CRASH YOUR BROWSER OR PROGRAM

  while(condition) {}

  for(var count = 0; count < 6; count++) {}
*/

var count = 1;
while (count < 6) {
  console.log("Count is: " + count);
  count++; // Remember to increase the count
}

for (var i = 0; i < 6; i++) {
  console.log(i);
}
