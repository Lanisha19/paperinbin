
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftRect, rightRect, bottomRect;

function setup() {
	createCanvas(1000, 400);

  ball = new Ball(200,355,30);

	ground = createSprite(500,390,1000,20);
	ground.shapeColor="yellow";
	
	leftRect = new Rect(680,331,20,100);
	rightRect = new Rect(880,331,20,100);
  bottomRect = new Rect(780,370,200,20);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  ball.display();
  ground.display();
  leftRect.display();
  rightRect.display();
  bottomRect.display();
}

function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
   }
    

}
