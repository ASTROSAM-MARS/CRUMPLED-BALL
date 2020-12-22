class ball{
    constructor(){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(50,300,20, options);
        this.radius = 40;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("red");
      //  console.log(this.body.position.x);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}