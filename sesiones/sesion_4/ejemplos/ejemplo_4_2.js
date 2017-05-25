//Arreglos
var x = [];
var y = [];
var diam = [];
var numEstrellas = 100;

function setup(){
  createCanvas(800,500);
  background(30);
  for (var i = 0; i < numEstrellas; i++) {
    x[i] = random(0,width);
    y[i] = random(0,height);
    diam[i] = random(1,7);
  }

}

function draw(){
  for (var i = 0; i < numEstrellas; i++) {
    noStroke();
    fill(240);
    ellipse(x[i],y[i],diam[i],diam[i]);
  }
}
