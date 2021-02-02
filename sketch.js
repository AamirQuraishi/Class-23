const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b, ground, box;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,300,1600000,5);
  b = new Box(50,10,10,10);
  box = new Box(100,200,20,20);
  console.log(b.x);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  b.display();  
  box.display();
  drawSprites();
}