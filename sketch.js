var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairyImage1.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
     fairy = createSprite(150,550)
	 fairy.addImage(fairyImg);
	 fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 


  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true)
  }

  if (fairy.collide(star)){

	star.velocityY = 0
	fairy.velocityX = 0
	

  }

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

  keyPressed();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyCode === RIGHT_ARROW){

		fairy.velocityX = 4
	}

	if (keyCode === LEFT_ARROW){

		fairy.velocityX = -4
	}
}


