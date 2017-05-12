var d = 90;     //Diametro de los circulos
var numX = 8;   //Cantidad de circulos en el eje horizontal
var numY = 5;   //Cantidad de circulos en el eje vertical
var red;        //Variable asociada al color rojo
var green;      //Variable asociada al color verde
var blue;       //Variable asociada al color azul

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
