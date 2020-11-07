
var monkey , monkey_running
var bananaImage
var ground
var obstacleImage
var bananaGroup
var score 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 200);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(300,190,1000,10);
  
  //ground.debug = true
  
  score = 0
  
}


function draw() {
  background("black");
  //score = score + 1
  
  stroke("white")
  textSize(17.5)
  fill("white")
  text("Score: "+ score, 400,50);
  
  ground.velocityX = -4
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space")&& monkey.y > 153) {
        monkey.velocityY = -12;
    }
  
  console.log(ground.x)
  
  spawnBanana();
  
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    monkey.depth = banana.depth;
    monkey.depth = banana.depth + 1;
    
   
  }
}

function spawnObstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,170,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 200;
    
    
  }
}





