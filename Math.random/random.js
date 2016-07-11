/*
This is a small random number game is javaScipt.  It is used to show the use of Math.random
and the Math.floor functions. The Math.floor() function returns
the largest integer less than or equal to a given number. The Math.ceil() function returns the
smallest integer greater than or equal to a given number.
*/


var rightGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var iThink = prompt('I am thinking of a number betwen 1 and 9. What is it?');
if (parseInt(iThink) === randomNumber) {
	rightGuess = true;
} else if (parseInt(iThink) < randomNumber) {
	var thinkAgain = prompt('Try again. The number I am thinking of is more than ' + iThink);
  if (parseInt(iThink) === randomNumber) {
	  	rightGuess = true;
	}
} else if (parseInt(iThink) > randomNumber) {
	var wrongGuess = prompt('Try again. The number I am thinking of is less than ' + iThink);
  if (parseInt(wrongGuess) === randomNumber) {
  	rightGuess = true;
  }		
}
if (rightGuess) {
	document.write('<p>You guessed the number!</p>');
} else {
	alert('Start over and get a clue');
}