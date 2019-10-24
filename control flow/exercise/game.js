// Create a secret number
var secretNumber = 4;

// ask user for a guess
var guess = prompt("Guess a number");

// check if guess is right
// Number(string) convert the type to a Number
if (Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
else if (Number(guess) > secretNumber) {
  alert("TOO HIGH");
}
else if (Number(guess) < secretNumber) {
  alert("TOO LOW");
}
