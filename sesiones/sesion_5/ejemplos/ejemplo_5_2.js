//Ejemplo 5.2 Objetos
//Coded Escuela - 2017

//Circulo
var circulo;

function setup(){
  createCanvas(800,500);
  circulo = new Circulo(width/2,height/2,30,color(random(0,255), random(0,255), random(0,255), 180),2);
}

function draw(){
  frameRate(45);
  background(220,220,255);

  circulo.update();
  circulo.mover();

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
