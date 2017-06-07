var foto;

function preload(){
  foto = loadImage("pinera.gif");
}

function setup(){
  createCanvas(800,700);
}

function draw(){
  background(204);
  image(foto,mouseX-foto.width/2,mouseY-foto.height/2);

}
