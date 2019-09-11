const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ball1,ball2;
var constraint;

function setup(){
    var canvas = createCanvas(600,1200);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,20)
    //ground1 = new Ground(400,700,-400,20);
    ball1= new Particle(200,100,50);
    ball2 = new Particle(200,150,50);
    
    var options = {
     bodyA: ball1.body,
     bodyB: ball2.body,
     length: 10,
     stiffness: 0.4
    }

    constraint = Constraint.create(options);
    World.add(world,constraint);
}


function draw(){
    background(255);
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ground.display();
   
    strokeWeight(3);
    line(ball1.body.position.x,ball1.body.position.y,ball2.body.position.x,ball2.body.position.y)
}