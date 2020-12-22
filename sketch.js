
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1;
var wall1, wall2, wall3;
var ball1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground();
	wall1 = new dustbin(680,580,150,10);
	wall2 = new dustbin(755,525,10,120);
	wall3 = new dustbin(605,525,10,120);
	ball1 = new ball();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
Engine.update(engine);
  background(0);
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball1.display();
  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log(ball1);
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x : 15, y : -15});
	}
}
