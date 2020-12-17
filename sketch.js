const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2;
var bird, slingShot;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    platform1= new Ground(600,300,200,20);
    platform2= new Ground(1000,200,200,20);

    bird = new Polygon(200,50);

    slingshot = new Slingshot(bird.body,{x:200, y:50});

    box1 = new Box (550,250,50,50);
    box2 = new Box (600,250,50,50);
    box3 = new Box (650,250,50,50);
    box4 = new Box (575,200,50,50);
    box5 = new Box (625,200,50,50);
    box6 = new Box (600,160,50,50);
    
    box7 = new Box (950,150,50,50);
    box8 = new Box (1000,150,50,50);
    box9 = new Box (1050,150,50,50);
    box10 = new Box (975,100,50,50);
    box11 = new Box (1025,100,50,50);
    box12 = new Box (1000,50,50,50);





}

function draw(){
    background(0, 255, 250);
    Engine.update(engine);
    strokeWeight(4);

   
    ground.display();
    platform1.display(); 
    platform2.display();
    slingshot.display(); 
    box1.display(); 
    box2.display(); 
    box3.display(); 
    box4.display(); 
    box5.display(); 
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    bird.display();
    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}
