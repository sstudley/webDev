var text = "";
for(var i = -10; i < 20; i++) {
  text += "<br>The number is " + i;  
}
document.getElementById("demo1").innerHTML = text;

var text = "";
for(var i = 10; i <= 40; i++) {
  if(i % 2 === 0) {
    text += "<br>The number is " + i;
  }
}
document.getElementById("demo2").innerHTML = text;

var text = "";
for(var i = 300; i <= 333; i++) {
  if(i % 2 !== 0) {
    text += "<br>The number is " + i;
  } 
}
document.getElementById("demo3").innerHTML = text;

var text = "";
for(var i = 5; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0 ) {
    text += "<br>The number is " + i;
  }
}
document.getElementById("demo4").innerHTML = text;