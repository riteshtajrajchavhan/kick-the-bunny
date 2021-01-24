var engine,world; 
var ball,backImg;
var gameState = "serve";
var play = 1;
var end = 0;
var song;

function preload(){
backImg=loadImage("img1.png")
startImage=loadImage("start.png");
back2Img=loadImage("img2.png")
AimImg=loadImage("Aim.png");
bomImg=loadAnimation("bomb.png","ritesh.png");
blast=loadImage("blast.png");
bunnyImg=loadImage("bunny.png");
gameOver=loadImage("gameover.png")
restartImage=loadImage("restart.png");
}


function setup() {
 createCanvas(1350,650);
  
 start =createSprite(660,614)
    start.addImage(startImage)
    start.scale=0.5

    bunny2 =createSprite(660,314,40,40);
    bunny2.addImage(bunnyImg);
    bunny2.scale=0.4;
    
    bunny2.velocityY=7;
     bunny2.velocityX=7;
  

    Aim =createSprite(660,314);
    Aim.addImage(AimImg);
   Aim.scale=0.2;

  
 ground1 = createSprite(660,0,1369,10);
 ground1.visible=false;
 
 ground2  = createSprite(660,650,1369,10);
 ground2.visible=false;
 
 ground3  = createSprite(-3,325,10,634);
 ground3.visible=false;
 
 ground4 = createSprite(1352,325,10,634);
 ground4.visible=false;
 
 
  health = createSprite(1282,25,100,20);
  health.shapeColor="lightgreen"



   bomGroup = new Group();
   blastGroup = new Group();

  
 
 
 




}

function draw() {
 
  bunny2.bounceOff(ground2);
     bunny2.bounceOff(ground1);
    bunny2.bounceOff(ground3);
     bunny2.bounceOff(ground4);

     bomGroup.bounceOff(ground2);
     bomGroup.bounceOff(ground1);
    bomGroup.bounceOff(ground3);
     bomGroup.bounceOff(ground4);

     

  if (gameState === "serve") {
    background(backImg);
    
   bunny2.visible=false;

   health.visible=false;
   
  
    
   start.visible=true;
    Aim.visible=false;
   
    if (mousePressedOver(start) && gameState==="serve"){
      gameState=play
    }

    

  }else if (gameState === play) {
    background(back2Img);
    
    health.visible=true;
 
    bunny2.visible=true;
    
   

   
if(bomGroup.isTouching(bunny2)){
bomGroup.destroyEach();
bomb5();
 health.width=health.width-5

}

  if(health.width===5){
    health.visible=false;
gameState=end
  }


start.visible=false;
    Aim.visible=true;
   
    Aim.x=mouseX;
    Aim.y=mouseY;

   
   }else if (gameState === end) {
background(0);

    bunny2.addImage(gameOver)
    bunny2.x=650;
    bunny2.y=300
  bunny2.scale=1.6
  
  
 

blastGroup.visible=false;
Aim.visible=false;

}
   



  
 


  drawSprites();
}




function mouseDragged() {
 // Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}


function keyPressed(){
  if(keyCode === 32 && gameState===play){
  
    bomb();
   
  
  }
}




function bomb(){
  bom =createSprite(660,314)
  bom.addAnimation("moving",bomImg)
  bom.scale=0.2
  bom.velocityY=5
 // bom.velocityX=5


bom.x=Aim.x;
bom.y=Aim.y;

//bom.lifetime=50

bomGroup.add(bom);



}

function bomb5(){
  bom =createSprite(660,314)
  bom.addImage(blast);
  bom.scale=2.1
 
bom.x=bunny2.x;
bom.y=bunny2.y;



bom.lifetime=15


blastGroup.add(bom)


}

