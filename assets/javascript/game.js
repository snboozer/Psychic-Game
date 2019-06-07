



var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var wins = 0;
var losses = 0;
var guesses = 10;
var userGuess = []

var userGuessElement = document.getElementById("user-guesses");
var computerGuessElement = document.getElementById("Computer-guess");
console.log(userGuessElement)
var WinsElement = document.getElementById("wins")
var LossesElement = document.getElementById("losses")


document.onkeypress = function(event) {
    var userGuess = event.key;
    console.log(userGuess)
    userGuessElement.innerText=userGuess

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

    if(userGuess === computerChoice){
        wins++;
    document.getElementById("wins").innerText=wins
        console.log(wins)
    }
    
    else {
        losses++;
        console.log(losses)
        document.getElementById("losses").innerText=losses
    }
}

