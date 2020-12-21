
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob4;
var rope1,rope2,rope3,rope4;
var roof1;

function setup() {
	createCanvas(800,500);

	engine = Engine.create();
	world = engine.world;

	roof1=new roof(200,50,200,20);
	bob1=new bob (400,150,40);
	rope1=new rope(bob1.body,{x:400,y:100});

	bob2=new bob (400-40,150,40);
	rope2=new rope(bob2.body,{x:400-40,y:100});

	bob3=new bob (400-80,150,40);
	rope3=new rope(bob3.body,{x:400-80,y:100});

	bob4=new bob (400+40,150,40);
	rope4=new rope(bob4.body,{x:400+40,y:100});

	bob5=new bob (400+80,150,40);
	rope5=new rope(bob5.body,{x:400+80,y:100});

	Engine.run(engine);
  
}


function draw() {
  background(225);

  roof1.display();
  
  rope1.display();
  bob1.display();

  
  rope2.display();
  bob2.display();

  
  rope3.display();
  bob3.display();

  
  rope4.display();
  bob4.display();

  
  rope5.display();
  bob5.display();
}

function keyPressed()
    {
        if(keyCode === UP_ARROW)
        {
	        Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-25,y:25});
        }
    }

