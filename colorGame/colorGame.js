var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var banner = document.getElementById("banner");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  // generat all new colors
  colors = generateRandomColors(6);
  // pick new random color
  pickedColor = pickColor();
  // change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  // change color of squares
  for (var i = 0; i < squares.length; i++) {
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];
  }
  messageDisplay.textContent = "";
  banner.style.backgroundColor = '#232323';

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  // add click eventhandlers to squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      // wins 
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = "Try Again!"
    }
  });
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (i = 0; i < num; i++) {
    arr[i] = randomColor();
    }
   
  
  return arr;
}

function randomColor(){
  // pick random red from 0 - 255
  var r = Math.floor(Math.random() * 256)
  // pick random green from 0 - 255
  var g = Math.floor(Math.random() * 256)
  // pick random blue from 0 - 255
  var b = Math.floor(Math.random() * 256)
  // make return string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  banner.style.backgroundColor = color;
}

function runRandom(num) {
  for (i = 0; i <= num; i++) {
    console.log(Math.floor(Math.random() * colors.length));
  }
}