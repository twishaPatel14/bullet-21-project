var car,wall,thickness
var speed,weight,bullet
function setup() {
  createCanvas(1700,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83)
  bullet= createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  wall= createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

}



function draw() {
  background(0); 
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)}
if(damage>10)
{
wall.shapeColor= color(255,0,0)
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRightEdge=Lbullet.x + Lbullet.width
wallLeftEdge=Lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
 return false
}
  

  
