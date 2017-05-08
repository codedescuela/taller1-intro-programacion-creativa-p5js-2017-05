var x = 0;
var d = 130;

function setup(){
  createCanvas(480,200);
}

function draw(){
  background(180);
  ellipse(x, height/2, d ,d);
  x = x + 2;
}
