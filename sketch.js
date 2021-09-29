var box1



function setup() {

  createCanvas(400,400);
  box1=createSprite(100,200,50,40)
} 

 

function draw() 
{ 
  background(30);
 if (keyDown("left")) {
  box1.velocityX=-2
 }
 if (keyDown("right")) {
  box1.velocityX=2
 }
  drawSprites()
}




