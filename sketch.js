const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var funEngine,funWorld,ground,ball;

function setup() {
  createCanvas(800,400);
  funEngine = Engine.create();
  funWorld = funEngine.world;
  
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  ground = new Ground(400,390,800,20);

 console.log(box2);
}

function draw() {
  background(0);  
  Engine.update(funEngine);
  
  box1.display();
  box2.display();
  ground.display();
}