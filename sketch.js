
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var paper;

function preload()
{
}

function setup() {
	createCanvas(1200, 200);

	engine = Engine.create();
  world = engine.world;

  paper = new Paper(200,170,70);

	ground = new Ground(600,180,1200,10);

	dustbin = new Dustbin(1000,165,200,15);


	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  dustbin.display()
  paper.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW)
    Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-190});
}


