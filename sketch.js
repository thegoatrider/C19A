var monkey,monkeyrunning,banana,obstacle,bg,jungle,invisibleGround;

function preload(){
  bg=loadImage("jungle.jpg");
  monkey = loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}


function setup() {
  createCanvas(600,300);
  
  jungle=createSprite(300,200,100,100);
  jungle.addAnimation("bgc",bg);
  jungle.scale= 0.6;
  jungle.x = jungle.width/2;
  
  jungle.velocityX=-2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  monkeyrunning=createSprite(60,240,30,30);
  monkeyrunning.addAnimation("monkani",monkey);
  monkeyrunning.scale= 0.2;
  
  obstaclegroup = new Group();
  }


function draw(){
 background(255); 
  if(keyDown("space") ) {
    monkeyrunning.velocityY = -10;
  }
  monkeyrunning.collide(invisibleGround);
  monkeyrunning.velocityX = 0.1;
  
if(jungle.x<200){
  jungle.x = jungle.width/2;
}

  drawSprites();
}

function stone(){
  var stone;

}