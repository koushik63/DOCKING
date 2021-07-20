var iss,spacecraft1;
var backimage,spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img,issimg;
var hasDocked=false



function preload(){
 backimage=loadImage("spacebg.jpg");
spacecraft1img=loadImage("spacecraft1.png");
spacecraft2img=loadImage("spacecraft2.png");
spacecraft3img=loadImage("spacecraft3.png");
spacecraft4img=loadImage("spacecraft4.png");
issimg=loadImage("iss.png")
}
function setup() {
  createCanvas(800,400);
  spacecraft1=createSprite(400, 350, 50, 50);
spacecraft1.addImage(spacecraft1img);
spacecraft1.scale=0.25
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg);
}

function draw() {
  background(backimage);  

  if(!hasDocked){
    spacecraft1.x=spacecraft1.x+random(-1,1)
    

    if(keyDown(LEFT_ARROW)){
spacecraft1.addImage(spacecraft3img)
spacecraft1.x=spacecraft1.x-1
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft1.addImage(spacecraft4img)
      spacecraft1.x=spacecraft1.x+1
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft1.addImage(spacecraft1img)
  }
  if(keyDown(UP_ARROW)){
    spacecraft1.addImage(spacecraft2img)
    spacecraft1.y=spacecraft1.y-1
}
  }
  if(spacecraft1.y<=(iss.y+100)  &&  spacecraft1.x<=(iss.x-50)){
hasDocked=true
textSize(25)
fill("yellow")
text("DOCKING SUCCESFULL",200,390)

  }
  drawSprites();
}

