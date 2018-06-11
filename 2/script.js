var age = prompt("What is your age in years?");
var myElement = document.getElementById("intro");
myElement.innerText = age +  " years is roughly " +  (age * 365.25) + " days." ;
// alert(age +  " years is roughly " +  (age * 365.25) + " days." );
var 