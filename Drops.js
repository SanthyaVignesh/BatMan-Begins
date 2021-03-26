class Drop{
    constructor(x,y){
        var options = {
            friction : 0.001 , 
            frictionAir : 0.05,
            restitution : 0.1
        }
        this.drop = Bodies.circle(x, y, 5,options);
        this.radius = 5;
        World.add(world,this.drop);
    }

    update(){
        if(this.drop.position.y > height){
          Matter.Body.setPosition(this.drop,{x: random(20,780), y : random(0,height)});
        }
    }

    display(){
        var pos = this.drop.position;
        ellipseMode(RADIUS);
        push();
        fill("skyblue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}