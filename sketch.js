
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var middleBody,middleBodyImg;
var world;
var paper;

function preload(){
	middleBodyImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,680,width,20);
	dustbinObj=new dustbin(1200,650);

	paper = new Paper (400,400,70);
	
    middleBody = createSprite(1200,650 - 115)
	middleBody.addImage(middleBodyImg);
	middleBody.scale = 0.85
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  middleBody.display();
  dustbinObj.display();
  paper.display();

  

}

function keyPressed() { 
	if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-990});
	 } 
	}
