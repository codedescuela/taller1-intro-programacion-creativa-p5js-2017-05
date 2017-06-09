var alto = 130;
var ancho = 200;
var colorRect;

function setup(){
  createCanvas(800,500);
  background(255,150,0,200);
}

function draw(){
  checkInside();
  updateRect();
}

function checkInside(){ //Revisa si el cursor está dentro o fuera del rectángulo
  if(mouseX > width/2 - ancho/2 && mouseX < width/2 + ancho/2 && mouseY < height/2 + alto/2 &&  mouseY > height/2 - alto/2 ){
    colorRect = color(0);
  }
  else {
    colorRect = color(100,100,180);
  }
}

function updateRect(){ //Actualiza el rectángulo en cada ciclo
  noStroke();
  fill(colorRect);
  rectMode(CENTER);
  rect(width/2,height/2,ancho,alto);
}
