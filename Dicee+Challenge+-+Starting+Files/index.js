var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceGenerator = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceGenerator);

var randomDiceGenerator2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceGenerator2);

//Header update
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if 
(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player One Wins!";
} else if 
(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player Two Wins!🚩";
}