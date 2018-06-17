var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    })
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
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
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick new random color
  pickedColor = pickColor();
  // change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  // change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "";
  h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener("click", function () {
  reset();
});


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

function randomColor() {
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
  h1.style.backgroundColor = color;
}

function runRandom(num) {
  for (i = 0; i <= num; i++) {
    console.log(Math.floor(Math.random() * colors.length));
  }
}