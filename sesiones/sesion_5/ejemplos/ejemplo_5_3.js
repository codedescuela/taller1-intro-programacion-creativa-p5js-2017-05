//Ejemplo 5.3 Objetos
//Coded Escuela - 2017

//Circulo
var circulos = [];

//Numero circulos
numCirc = 80;

function setup(){
  createCanvas(800,500);

  for (var i = 0; i < numCirc; i++) {
    circulos[i] = new Circulo(random(0,width),random(0,height),random(20,30),color(random(0,255), random(0,255), random(0,255), 180),2);
  }
}

function draw(){
  frameRate(45);
  background(220,220,255);

  for (var i = 0; i < numCirc; i++) {
    circulos[i].update();
    circulos[i].mover();
  }

}

function Circulo(x,y,radio,colorInterior,velocidad) {
  //Propiedades
  this.x = x;
  this.y = y;
  this.rad = radio;
  this.colorCirc = colorInterior;
  this.vel = velocidad;

  //Metodos
  this.update = function(){
    noStroke();
    fill(this.colorCirc);
    ellipse(this.x,this.y,2*this.rad,2*this.rad);
  }

  this.mover = function(){
    this.x += random(-this.vel, this.vel);
    this.y += random(-this.vel, this.vel);

  }

}
