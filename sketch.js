const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var mom;
var picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10;

function preload() {
  sound = loadSound("MomMusic.mp3");
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  if (keyCode === 0) {
    sound.play();
  }

  mom = new Mom(275, 150);
  picture1 = new PictureClass(30, 50);
  picture2 = new pictureclass(100, 50);
  picture3 = new PictureClass(220, 50);
  picture4 = new pictureclass(300, 50);
  picture5 = new PictureClass(420, 50);
  picture6 = new pictureclass(500, 50);
  picture7 = new PictureClass(620, 50);
  picture8 = new pictureclass(700, 50);
  picture9 = new PictureClass(820, 50);
  picture10 = new pictureclass(900, 50);
}

function draw() {
  background(160, 160, 160);

  mom.display();
  picture1.display();
  picture2.display();
  picture3.display();
  picture4.display();
  picture5.display();
  picture6.display();
  picture7.display();
  picture8.display();
  picture9.display();
  picture10.display();

  stroke("Black");
  strokeWeight(5);
  fill("Green");
  textFont("Comic Sans MS");
  textSize(40);
  text("Happy Mother's day!", 275, 585);
}