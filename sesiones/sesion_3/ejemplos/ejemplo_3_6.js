var diametro = 150;
var distancia = 0;
var colorCirculo;

function setup(){
  createCanvas(800,500);
  background(255,255,200);
}

function draw(){
  distancia = dist(mouseX,mouseY,width/2,height/2);
  if(distancia < diametro/2){
    colorCirculo = color(200,0,0);
  }
  else {
    colorCirculo = color(255,255,255);
  }

  strokeWeight(4);
  fill(colorCirculo);
  ellipse(width/2,height/2,diametro,diametro);
}
