var d = 90;
var numX = 8;
var numY = 5;

function setup(){
  createCanvas(800,500);
}

function draw(){
  background(204);
  for (var i = 0; i <= numX; i++) {
    for (var j = 0; j <= numY; j++) {
        ellipse(i*width/numX, j*height/numY, d, d);
    }
  }
}
