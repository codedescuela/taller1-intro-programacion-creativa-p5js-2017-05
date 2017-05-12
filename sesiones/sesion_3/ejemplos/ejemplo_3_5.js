var x;
var offset = 10;

function setup(){
  createCanvas(800,500);
  x = width/2
}

function draw(){
  background(204);
  if (mouseX > x) {
    x += 2;
    offset = -10;
  }
  if (mouseX < x) {
    x -= 2;
    offset = 10;
  }
  //Dibujar una flecha hacia la izquierda o derecha dependiendo del offset
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset * 3, mouseY);
}
