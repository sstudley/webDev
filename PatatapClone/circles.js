function randomColorHex() {
  // pick random red from 0 - 255
  var r = (Math.floor(Math.random() * 256)).toString(16);
  // pick random green from 0 - 255
  var g = (Math.floor(Math.random() * 256)).toString(16);
  // pick random blue from 0 - 255
  var b = (Math.floor(Math.random() * 256)).toString(16);
  // make return string
  return r + g + b;
}