var iss, spacecraft, bg, hasDocked = false;
var issImage, scImage1, scImage2, scImage3, scImage4;

function setup() {
  createCanvas(600,400);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(scImage1);
  spacecraft.scale = 0.15;
  iss = createSprite(330, 130);
  iss.addImage(issImage);
  iss.scale = 0.25;
}

function preload(){
  issImage = loadImage("iss.png");
 scImage1 = loadImage("spacecraft1.png")
 scImage2 = loadImage("spacecraft2.png")
 scImage3 = loadImage("spacecraft3.png")
 scImage4 = loadImage("spacecraft4.png")
 bg = loadImage("spacebg.jpg");
}

function draw() {
  background(bg);  
  spacecraft.addImage(scImage1);
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1, 1);

   if(keyDown(UP_ARROW)){
     spacecraft.y = spacecraft.y-2
   }

   if(keyDown(LEFT_ARROW)){
     spacecraft.addImage(scImage4)
     spacecraft.x = spacecraft.x-1;
   }

   
   if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(scImage3)
    spacecraft.x = spacecraft.x+1;
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(scImage2)
  }
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDocked=true;
  textSize(25);
  fill("white");
  text("Docking successfull", 200, 300);
  }
  drawSprites();
}