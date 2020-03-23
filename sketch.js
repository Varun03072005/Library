var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50 , 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 4;

  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -4;
 

  stroke ("white");
  fill ("white");
}

function draw() {
  background("black");  

  bounceOff(fixedRect,movingRect);

  drawSprites();
}


