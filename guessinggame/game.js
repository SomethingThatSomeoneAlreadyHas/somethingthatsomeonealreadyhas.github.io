function game() {
  let randomNumber = Math.floor(Math.random()*1000);
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      document.getElementById("paragraph").innerHTML = "\n Your last guess was: " + parseInt(userGuess);
      var userGuess = prompt("Guess Lower!");
    } else if (parseInt(userGuess) < randomNumber) {
      document.getElementById("paragraph").innerHTML = "\n Your last guess was: " + parseInt(userGuess);
      var userGuess = prompt("Guess Higher!");
    }
    document.getElementById("paragraph").innerHTML = "\n You guessed the number! Reload the page to try again!";
  }
}
