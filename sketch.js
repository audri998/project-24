
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1 
var dustbin2 
var dustbin3



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;
	ground=createSprite(500,600,1000,10);
	
	dustbin1=createSprite(600,600,200,20);
   
    dustbin2=createSprite(690,550,20,100);
   
 
    dustbin3=createSprite(510,550,20,100);
   
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



