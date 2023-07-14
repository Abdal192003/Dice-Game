// Author - Abdal Ahmad Khan
// Date - 14/07/2023
// Program Name - Dice Game

// Random guess image code for First-image
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1 * 6) + 1;
var randomImg1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);


// Random guess image code for Second-image
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2 * 6) + 1;
var randomImg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

// Decision making code 
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent="PLAYER 1 WINS";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").textContent="DRAWS";
}
// Ending Code

