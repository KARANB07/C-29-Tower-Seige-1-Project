const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
createCanvas(1500,800)
background("aqua")
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    
    d=new striker(200,600,43,43)
    dr=new rope(d.body,{x:200,y:600})
    p1=new platform(1200,665,500,20)
    b11=new box(1300,250,50,50)
    b2=new box(1250,250,50,50)
    b3=new box(1200,250,50,50)
    b4=new box(1150,250,50,50)
    b5=new box(1110,250,50,50)
    b6=new box(1050,250,50,50)
    b1=new box(1000,250,50,50)
    
    r1=new box(1300,300,50,50)
    r2=new box(1250,300,50,50)
    r3=new box(1200,300,50,50)
    r4=new box(1150,300,50,50)
    r5=new box(1110,300,50,50)
    r6=new box(1050,300,50,50)
    r7=new box(1000,300,50,50)

}


function draw(){
background("aqua")
Engine.update(engine);
d.display();
dr.display();
p1.display();
//b1.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b11.display();



r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
r6.display();
r7.display();
textSize(30)
text("Drag the yellow pentagon and release to shoot",200,50)
//line(p1x,p1y,p2x,p2y)
}

function mouseDragged(){
Matter.Body.setPosition(d.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
dr.fly();
}


