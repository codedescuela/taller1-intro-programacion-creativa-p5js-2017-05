var d = 90;
var numX = 8;
var numY = 5;
var red;
var green;
var blue;

function setup(){
  createCanvas(800,500);
}

function draw(){
  frameRate(7);
  background(100);
  for (var i = 0; i <= numX; i++) {
    for (var j = 0; j <= numY; j++) {
      red = random(0,255);
      green = random(0,255);
      blue = random(0,255);

      fill(red, green, blue, 150);
      ellipse(i*width/numX, j*height/numY, d, d);
    }
  }

}
