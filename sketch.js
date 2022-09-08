
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow, background, redB, darkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage,blue_balloonImage, dark_balloonImage, backgroundImage;

var score =0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  dark_balloonImage = loadImage("dark_balloon0.png");

}



function setup() {
  createCanvas(600, 400);
  
  //crie o fundo
  scene = createSprite(300,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha

  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  redB= new Group();
  //Crie um grupo para greenBalloon (balão verde)
  greenB = new Group();
 //Crie um grupo para blueBalloon (balão azul)
 blueB = new Group();
 //Crie um grupo para pinkBalloon (balão rosa)
 pinkB = new Group();

 darkB = new Group();
  
  arrowGroup= new Group();
 
  
}

function draw() {
 background(0);
 if(gameState === PLAY){

  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 100){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:darkBalloon();
      break;
      case 4:greenBalloon();
      break;

      default:break;
    }
  }



  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
}

if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();

  score = score+3; 
}

if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();

  score = score+2; 
}

if (arrowGroup.isTouching(darkB)) {
  darkB.destroyEach();
  arrowGroup.destroyEach();

  score = score-1; 
}


 
if(score>10){
  gameState=END;
}




  if (gameState === END) {
  bow.destroy();
  scene.velocityX = 0;
}

 



 }
  
  drawSprites();
  text("Pontuação = "+ score, 400,30);
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 300;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 300;
  blue.scale = 0.1;
 //Adicione o grupo
 blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 300;
  green.scale = 0.1;
  //Adicione o grupo
  greenB.add(green);
}

function darkBalloon() {
  var dark = createSprite(0,Math.round(random(20, 370)), 10, 10);
  dark.addImage(dark_balloonImage);
  dark.velocityX = 3;
  dark.lifetime = 300;
  dark.scale = 0.4;
 //Adicione o grupo
 darkB.add(dark);
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 560;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 200;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
