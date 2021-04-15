var bg,bg2,form,system,code,security;
var treasure;
var score=0;



function preload() {
  bg= loadImage("aladdin_cave.jpg");
  bg2 = loadImage("aladdin_cave2.jpg");
  treasure = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    var TREASURE = createSprite(500, 320);
    TREASURE.addImage("treasures", treasure);
    TREASURE.scale = 0.1;
  }

  drawSprites();
}