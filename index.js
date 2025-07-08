// Dice name map
function rollDice() {
var diceNames = ["one", "two", "three", "four", "five", "six"];

// Player 1
var randomNumber1 = Math.floor(Math.random() * 6);
var randomDiceImage1 = "image/dice-six-faces-" + diceNames[randomNumber1] + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6);
var randomDiceImage2 = "image/dice-six-faces-" + diceNames[randomNumber2] + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Decide winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "🚩 Player 2 Wins! ";
} else {
    document.querySelector("h1").textContent = "It's a Draw!";
}
}
