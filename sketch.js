var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1
var box2
var box3

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    box1Sprite=createSprite(280,566,20,200, {isStatic:true})
	box1Sprite.shapeColor=color("red")
	

    box2Sprite=createSprite(490,566,20,200,{isStatic:true})
	box2Sprite.shapeColor=color("red")
	

	box3Sprite=createSprite(380,660,200,10, {isStatic:true})
	box3Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
  if (keyCode === LEFT_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x = helicopterSprite.x - 20;
	translation = {x:-20, y:0}
	matter.Body.translate(packageBody, translation);
	
  }
  if (keyCode === RIGHT_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x = helicopterSprite.x + 20;
	translation = {x:20, y:0}
	matter.Body.translate(packageBody, translation);

  }
  
}




