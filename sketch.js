const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine , world, object ;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 =new Box(430,100,50,50)
  box2 = new Box(400,200,50,50)
  ground = new Ground()
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display()
  box2.display()
  ground.display()
  
}