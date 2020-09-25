class Paper{
    constructor(){
        var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
        this.body = Bodies.circle(10, 450 ,20,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
        
    }
       
    
    display(){
        fill("white");

        var pos=this.body.position
         this.width=60;
         this.height=60;
    ellipse(pos.x, pos.y , 20 , 20); 
    push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop();
    }
}
    