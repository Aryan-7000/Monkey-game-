
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(50,240,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(600,276,1200,10);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup(); 
  monkey.setCollider("rectangle",-10,0,monkey.width,monkey.height);
  //monkey.debug = true;
  
}


function draw() {
  
  background("white");
  //console.log(monkey.y);
  textSize(20);
  stroke("blue");
  text("Survival Time:"+survivalTime,300,50);
  ground.velocityX = -5;
  
  if(ground.x<0){
     ground.x = ground.width/2;
  }  
  //if (obstacleGroup.isTouching(monkey)){
    //obstacleGroup.setLifetimeEach(-1);
    //FoodGroup.setLifetimeEach(-1);
    //obstacleGroup.setVelocityXEach(0);
    //FoodGroup.setVelocityXEach(0);
    //ground.velocityX = 0;
    //survivalTime = 0;
    
    
  //}
    
  survivalTime = survivalTime+                           Math.round(getFrameRate()/60);                                                       
  if(keyDown("space")&&monkey.y>=240){
    monkey.velocityY = -10.5;
  }
  
  monkey.velocityY = monkey.velocityY+0.5;
  monkey.collide(ground);
  obstacles();
  foods();
  drawSprites();  
}

function obstacles(){
  if(frameCount%80===0){
  obstacle = createSprite(600,240,20,20);
  obstacle.addImage("rock",obstacleImage);
  obstacle.scale = 0.17;
  obstacle.velocityX = -5;
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
} 
}

function foods(){
  if(frameCount%100===0){
  banana = createSprite(600,170,10,10);
  banana.addImage("food", bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.y = Math.round(random(150,185));
  banana.lifetime = 130;
  FoodGroup.add(banana);
  }
}
    




