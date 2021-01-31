var a, b;

function setup() {
  createCanvas(1200,800);
  a = createSprite(400, 100, 50, 80);
 a.shapeColor = "green";
  a.debug = true;
  b = createSprite(400, 800,80,30);
  b.shapeColor = "green";
  b.debug = true;

  b.velocityY = -5;
  a.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  Bounceoff(a,b)
  
  drawSprites();
}









