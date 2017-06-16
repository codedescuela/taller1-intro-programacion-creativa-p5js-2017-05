//Ejemplo 5.1 Objetos
//Coded Escuela - 2017

var x;
var y;
var rad;
var colorCirc;
var vel;

function setup(){
  createCanvas(800,500);

  x = width/2;
  y = height/2;
  rad = 30;
  vel = 2;

  colorCirc = color(random(0,255), random(0,255), random(0,255), 180);
}

function draw(){
  frameRate(45);
  background(220,220,255);

  update();
  mover();

}

function update(){
  noStroke();
  fill(colorCirc);
  ellipse(x,y,2*rad,2*rad);
}

function mover(){
  x += random(-vel, vel);
  y += random(-vel, vel);
}
