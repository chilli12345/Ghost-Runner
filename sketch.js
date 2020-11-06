var towerImage, tower;
var ghost, ghostImage;
var edges;
var windows,windowsImage,windowsGroup;
var climber,climberImage;
var invisibleWall;

function preload(){
  towerImage=loadImage("tower.png");
  ghostImage=loadAnimation("ghost-jumping.png","ghost-standing.png");
  windowsImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
}

function setup(){
  
  createCanvas(600,600);
  edges=createEdgeSprites(); 
  tower=createSprite(300,300,20,20);
  tower.addImage(towerImage);
  tower.scale=1;
  tower.y=300;
  tower.velocityY=2;
  console.log(tower.y);
  
  ghost=createSprite(200,200,20,20);
  ghost.addAnimation("climbing",ghostImage);
  ghost.scale=0.2;
  windowsGroup = new Group();
  invisibleGroup = new Group();
}

function draw(){
     background(180);
  if (tower.y>=400){
    tower.y=100;
  }
  
  if(keyDown("right")){
    ghost.velocityX=4;
  }
  if(keyDown("left")){
    ghost.velocityX=-4;
  }
  if(keyDown("space")){
    ghost.velocityY=-4;
  }
  if(ghost.isTouching(windowsGroup)){
    ghost.velocityY=0;
  }
  ghost.bounceOff(edges[1]);
  ghost.bounceOff(edges[0]);
  ghost.velocityY=ghost.velocityY+0.8;
  

  spawnWindows();
  drawSprites();
    if(invisibleGroup.isTouching(ghost)){
    fill("red");
    textSize(20);
    text("GAMEOVER",300,300);
    
  }
}

function spawnWindows(){
 if(frameCount%120===0) {
  windows=createSprite(200,-51,20,20);
  climber=createSprite(200,10,20,8);
  climber.addImage(climberImage);
  climber.scale=1;
  invisibleWall=createSprite(200,15,20,2);
  windows.addImage(windowsImage);
  windows.scale=1;
  rand=Math.round(random(90,480));
  windows.x=rand;
  climber.x=rand;
  invisibleWall.x=rand;
   windows.velocityY=2;
   climber.velocityY=2;
   invisibleWall.velocityY=2;
   climber.lifetime=250;
   windows.lifetime=250;
   invisibleWall.lifetime=250;
  invisibleWall.visible=false;
   windowsGroup.add(climber);
   invisibleGroup.add(invisibleWall);
   
 }
}
  