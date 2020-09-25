
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1600/2, 700);
    //console.log("test")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();
	ground = new Ground(400,height,800,20);
	
	log2 = new logDust(600,550,200,300);
	

	//Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
  ball.display();
 ground.display();
 
 log2.display();
 
 
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("hi");
		Matter.Body.applyForce(ball.body,ball.body.position,{x:79,y:-79})
	   
	 }
   }


