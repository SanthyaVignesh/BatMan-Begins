const Engine = Matter.Engine ;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var rain = [];
var maxDrops = 100;
var thunder,thunder1,thunder2,thunder3,thunder4;
var thunderFrameCount;
var umbrella;
var walkingAnimation;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

    walkingAnimation = loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_8.png");
}

function setup(){

   createCanvas(800,windowHeight);

   engine = Engine.create();
   world = engine.world;

   //rain = new Drop(200,0);
   umbrella = new Umbrella(400,600);

   for(var count = 0; count < maxDrops; count++){
       var droplet = new Drop(random(20,780),random(0,height));
       rain.push(droplet);
       console.log(rain[count]);
   }

  
    
}

function draw(){

    background("black");

    Engine.update(engine);
    
    //rain.display();
    //rain.update();
    //umbrella.man.addAnimation()
    
    for(var count =0 ; count<maxDrops; count++){
        rain[count].display();
        rain[count].update();
    }

    if(frameCount%80 === 0){
        createThunder();
        thunderFrameCount = frameCount;
    }
    
    if(thunderFrameCount+10 === frameCount){
        destroyThunder();
    }

    drawSprites();
}   

function createThunder(){
    var rand = Math.round(random(1,4));
    thunder = createSprite(random(50,770),random(10,150),10,10);
    switch(rand){
        case 1:
            thunder.addImage(thunder1);
            break;
        case 2:
            thunder.addImage(thunder2);
            break;
        case 3:
            thunder.addImage(thunder3);
            break;
        case 4:
            thunder.addImage(thunder4);
            break;
    }
    thunder.scale = random(0.3,0.6);
}

function destroyThunder(){
    thunder.destroy();
}