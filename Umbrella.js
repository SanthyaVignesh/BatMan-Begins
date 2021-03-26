class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        World.add(world,this.umbrella);

        
        this.man = createSprite(x, y+ 70,10,10);
        this.man.addAnimation("Image",walkingAnimation);
        this.man.scale = 0.35;
    }
   
}