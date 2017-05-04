var y;
var d;

function setup(){
  y = 100;
  d = 130;
  createCanvas(480,120);
}

function draw(){
  background(204);
  rect(150,150,90,90);
  ellipse(75, y, d, d);
  ellipse(175, y, d, d);
  ellipse(275, y, d, d);
}
