var d = 130;

function setup(){
  createCanvas(800,500);
}

function draw(){
  background(230,230,255);
  strokeWeight(6);
  stroke(130,0,0);
  fill(210,0,0);
  ellipse(mouseX, mouseY, d ,d);
}
