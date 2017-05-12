var d = 130;

function setup(){
  createCanvas(480,240);
}

function draw(){
  background(204);
  for (var i = 0; i < 7; i++) {
    ellipse(65*(1+i), height/2, d, d);
  }
}
