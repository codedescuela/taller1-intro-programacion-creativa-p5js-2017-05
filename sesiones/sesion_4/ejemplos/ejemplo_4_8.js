var camara;

function setup(){
  createCanvas(800,500);
  camara = createCapture(VIDEO);
  camara.hide();
}

function draw(){
  image(camara,0,0);
}
