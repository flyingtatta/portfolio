const message = 'Hello world';

var myHeader = document.querySelector('#header')

function genColor(){
  return Math.floor(Math.random() * 255);
}

function getRGB(){
  r = genColor();
  g = genColor();
  b = genColor();
  return "rgb("+r+","+g+","+b+")";
}

function changeHeaderColor(){
  colorInput = getRGB();
  myHeader.style.color = colorInput;
}

setInterval("changeHeaderColor()", 300);
