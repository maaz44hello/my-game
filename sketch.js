var PLAY=1;
var END=0;
var gameState=1;
var restart

var bg;
var allPlayers
var character
var spaces
var laserGroup;
var laserImg
var spaceship11
var restarticon
var gameover
var destroyingsound
var gameoversound
var lshot
var buttonpressed


function preload() {
  bg = loadImage("space.png");
  character = loadImage("spaceship2.png");
  spaces = loadImage("spaceship.png")
  laserImg = loadImage("laser1234.png")
  restarticon = loadImage("re.png")
gameover= loadImage("gameover.png")
destroyingsound=loadSound("LaserBlastQuick PE1095107.mp3")
gameoversound=loadSound("mixkit-arcade-retro-game-over-213 (2).wav")
lshot=loadSound("SpaceLaserShot PE1095407.mp3")
buttonpressed=loadSound("el_interface_button_22_hpx.mp3")

}

function setup() {
  createCanvas( displayWidth, displayHeight)
  win = createSprite( displayWidth/2, displayHeight/1.2, 10, 80);
  win.addImage(character)
  win.scale = 0.5
  
  ground= createSprite( displayWidth/2, displayHeight/1,  displayWidth, 20);
  ground.visible=true;
  
  restartbutton= createSprite( displayWidth/2, displayHeight/2, 10, 10);
  restartbutton.addImage(restarticon)
  restartbutton.scale= 0.2
  restartbutton.visible=false;
  
gameoverimg=createSprite( displayWidth/2, displayHeight/2.5, 10, 10)
gameoverimg.addImage(gameover)
gameoverimg.scale=1.5
gameoverimg.visible=false;
  score=0;
  
  laserGroup = new Group();
  spaceship11 = new Group();
}
function draw() {
  background(bg,);
  
  drawSprites();
    if(spaceship11.isTouching(laserGroup)){
    
      laserGroup.destroyEach();
    spaceship11.destroyEach();
   score=score+1
   destroyingsound.play()
    }
    stroke("yellow");
    fill("yellow");
    textSize(30);
  text("Score : "+ score, displayWidth/2.1, displayHeight/10);
  
  
  
   if (keyIsDown(RIGHT_ARROW)) {
    win.velocityX = +4
  }
  else {
    win.velocityX = 0
  }

  if (keyIsDown(LEFT_ARROW)) {
    win.velocityX = -4
  }


  if (keyDown("space")) {
    createLaser();
    lshot.play()
  }


  
   
  if(gameState===PLAY){
    

  
  if (frameCount % 340 === 0) {
    createspaceships()
  }
 
  
}
  
    if(spaceship11.isTouching(ground)){
      gameState=END
      restartbutton.visible=true;
  
      gameoversound.play()
   // text("Game Over",  displayWidth/2, displayHeight/2)
      spaceship11.setVelocityYEach(0);
      gameoverimg.visible=true;
      win.velocityX = 0
    
  
   
 }
  
    if(spaceship11.isTouching(win)){
      gameState=END
      restartbutton.visible=true;
  
      gameoversound.play()
      spaceship11.setVelocityYEach(0);
      gameoverimg.visible=true;
      win.velocityX = 0
   
  
   
 }
  
   if(mousePressedOver(restartbutton)){
     restart()
     buttonpressed.play()
   }
  
  }
  
  

 function createspaceships() {

    spaceship = createSprite(random(50, displayWidth-20), 100, 400,900);
    spaceship.addImage(spaces);
    spaceship.scale = 0.3;
    spaceship.velocityY = 2;
    spaceship.lifetime = 950;
    spaceship11.add(spaceship);
 }


function createLaser() {
  var laser = createSprite(100, 100, 60, 10);
  laser.scale = 0.1
  laser.addImage(laserImg);
  laser.x = win.x
  laser.y = win.y;
  laser.velocityY = -4;
  laser.lifetime = 200;
  laser.scale = 0.3;
  laserGroup.add(laser);

}


function restart(){
    spaceship11.setVelocityYEach(0);
  gameState=1
  laserGroup.destroyEach();
    spaceship11.destroyEach();
      score=0
      restartbutton.visible=false
      gameoverimg.visible=false;
}

//function play(){
 // B28LJAU-laser-blast.mp3.play
//}

