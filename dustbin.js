class Dustbin {
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.image =  loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;



        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        
        image(this.image, pos.x, 95, 140,160);
    }
}