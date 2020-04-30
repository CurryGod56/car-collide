var car;
var wall;
var s, w;
var deformation;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  wall = createSprite(1500,200,60,400);
  s = random(30,95);
  w = random(400,1500);
  car = new Car(w,s);
  

  wall.shapeColor=rgb(80,80,80);


}

function draw() {
  background(255,255,255);  
  car.collide(wall);
  deformation = (0.5*s*s*w)/22500;
  if(deformation<100){
    car.shapeColor=rgb(0,255,0);
  }
  if(deformation>100 && deformation<180){
    car.shapeColor=rgb(230,230,0);
  }
  if(deformation>180){
    car.shapeColor=rgb(255,0,0);
  }
  drawSprites();
}