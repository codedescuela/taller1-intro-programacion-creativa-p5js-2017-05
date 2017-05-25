var foto;

function preload(){
  foto = loadImage("coded.png");
}

function setup(){
  createCanvas(500,500);
}

function draw(){
  image(foto,0,0);
}
