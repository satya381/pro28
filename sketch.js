
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1100,350);
	ground = new Ground(width/2,600,1300,20);
	stone = new Stone(200,100,30)
	mango1 = new Mango(1000,190,50)
	mango2 = new Mango(1100,190,50)
	mango3 = new Mango(1140,190,50)
	mango4 = new Mango(1250,250,50)
	mango5 = new Mango(1030,270,50)
	mango6 = new Mango(950,300,50)
	mango7 = new Mango(910,230,50)
	mango8 = new Mango(1080,220,50)
	mango9 = new Mango(1040,130,50)
	mango10 = new Mango(1180,270,50)
	slingshot = new Slingshot(stone.body,{x:235,y:420})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  slingshot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);

  drawSprites();
 
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=imango.body.position
	stoneBodyPosition=istone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		matter.Body.setStatic(lmango.r,flase);
	}
}



