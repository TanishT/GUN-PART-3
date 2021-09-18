var bg, bgImg
var player, playerImg
var bullets
var bulletImg;
var dist = 0

function preload(){
bgImg = loadImage("assets/Background.png")

playerImg = loadImage("./assets/C2.png")
bulletImg = loadImage("./assets/Glenos-G_160_bullet.png");
}

function setup(){
createCanvas(1400, 700);
//background image
bg = createSprite(100,100,1,1);
bg.addImage(bgImg);
bg.scale = 2.0
bg.x =bg.width/2;
      
player = createSprite(200, 343, 10, 10);
player.addImage(playerImg)
player.scale = 0.2;
bulletGroup = new Group();
}

function draw() {
  
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
background(bgImg);   
drawSprites();
if(keyDown("UP_ARROW")&&(player.y > 55)){
  player.velocityY=-12;
}
if(player.y < 343){
  player.velocityY = player.velocityY + 1;
}
if(player.y > 343){
  player.y = 343;
} 
bg.velocityX = -4;

if(keyWentDown('SPACE')){
  bullet = createSprite(player.x, player.y,20,7.5);
  bullet.velocityX = 80
  bullet.addImage(bulletImg);
  bullet.scale = 0.05
  bulletGroup.add(bullet)
  player.depth = bullet.depth
  player.depth = player.depth+2
        
}
}
