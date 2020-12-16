const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var boy = boyImage("boy.png");
	var mango = mangoImage("mango.png");
	var stone = stoneImage("mango.png");
	var tree = treeImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango;
	mango2 = new Mango;
	mango3 = new Mango;
	mango4 = new Mango;
	mango5 = new Mango;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectcollison(stoneObj,mango1);
  detectcollison(stoneObj,mango2);
  detectcollison(stoneObj,mango3);
  detectcollison(stoneObj,mango4);
  detectcollison(stoneObj,mango5);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}

function mouseDragged(){}

function mouseReleased(){}

function detectCollision(Lstone, Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y,)
	if(distance<=lmango.r+lstone.r){
		matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		matter.body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attatch(stoneObj.body);
	}
}