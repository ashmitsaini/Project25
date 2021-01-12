
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin;

function setup() {
	createCanvas(800, 500);
	background(255);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 490);
	paper = new Paper(200, 200, 140);
	dustbin = new Dustbin(700, 440);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:40, y:-80});
	}
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}




