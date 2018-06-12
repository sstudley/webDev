var text = "";
var i = -10;
while (i < 20) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

var text = "";
var i = 10;
while (i <= 40) {
  if(i % 2 === 0){
    text += "<br>The number is " + i;
  }
  i++;
}
document.getElementById("demo2").innerHTML = text;

var text = "";
var i = 300;
while (i <= 333) {
  if(i % 2 !== 0) {
    text += "<br>The number is " + i;
  }
  i++;
}
document.getElementById("demo3").innerHTML = text;
var text = "";
var i = 5;
while (i <= 50) {
  if (i % 3 === 0 && i % 5 === 0 ) {
    text += "<br>The number is " + i;
  }
  i++;
}
document.getElementById("demo4").innerHTML = text;