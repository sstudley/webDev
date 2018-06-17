var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
p1Score = 0;
p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1display.classList.add("winner");
      gameOver = true;
    }
    p1display.textContent = p1Score;
  }
});
p2button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2display.classList.add("winner");
      gameOver = true;
    }
    p2display.textContent = p2Score;
  }
});

function resetter() {
  gameOver = false;
  p1Score = p2Score = 0;
  p2display.textContent = p2Score;
  p1display.textContent = p1Score;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
}

reset.addEventListener("click", function () {
  resetter();
})

numInput.addEventListener("change", function () {
  winningScore = Number(this.value);
  winningScoreDisplay.textContent = Number(this.value);
  resetter();
})

