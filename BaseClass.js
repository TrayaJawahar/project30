class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':5,
            'density':0.3,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
        rotate(angle);
        pop();
      }
}
