var wall, thickness;

var  bullet,speed, weight;

function setup() {
  createCanvas(1366,656);
  
 speed=random(223,321);
 weight=random(30,52); 
  
 bullet=createSprite(50, 326, 70, 15);
 bullet.velocityX = speed;
 bullet.shapeColor=color(255); 

 wall=createSprite(1200,326, thickness,height/2);
 wall.shapeColor=color(80,80,80);

 thickness = random(22,83);
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);
     
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }

  }
  
  hasCollided();
  drawSprites();
}

function hasCollided()
{

    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
}