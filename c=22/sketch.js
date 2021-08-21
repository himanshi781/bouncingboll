const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
 var engine, world; 
 var ground ;
var boll



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
   world = engine.world;
var groundOption={
  isStatic:true
}
var bollOption={
restitution:0.5
}
   ground = Bodies.rectangle(200,390,400,20,groundOption);
    World.add(world,ground)
boll=Bodies.circle(200,50,20,bollOption)
World.add(world,boll)
}

function draw() {
  background(0);  
  Engine.update(engine);
   rectMode(CENTER); 
   fill("brown")
    rect(ground.position.x, ground.position.y,400,20);
    fill("yellow")
    ellipseMode(RADIUS)
ellipse(boll.position.x,boll.position.y,20)
}