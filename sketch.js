const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
createCanvas(1150,700)
background("aqua")
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    
    d=new striker(600,600,43,43)
    dr=new rope(d.body,{x:400,y:600})
    p1=new platform(1000,665,500,20)
    b1 = new box(280+600,275,30,40);  
    b2 = new box(310+600,275,30,40);
    b3 = new box(340+600,275,30,40);
    b4 = new box(370+600,275,30,40);
    b5 = new box(400+600,275,30,40);
    b6 = new box(430+600,275,30,40);
    b7 = new box(460+600,275,30,40);
    b8 = new box(490+600,275,30,40);
    //level two
    b9 = new box(310+600,235,30,40);
    b10 = new box(340+600,235,30,40);
    b11= new box(370+600,235,30,40);
    b12 = new box(400+600,235,30,40);
    b13 = new box(430+600,235,30,40);
    b14 = new box(460+600,235,30,40);
    //level three
    b15 = new box(340+600,195,30,40);
    b16 = new box(370+600,195,30,40);
    b17 = new box(400+600,195,30,40);
    b18 = new box(430+600,195,30,40);
    //level four
    b19 = new box(370+600,155,30,40);
    b20 = new box(400+600,155,30,40);
    //level five
    b21 = new box(385+600,115,30,40);
    
    //r1=new box(1300,600,50,50)
    //r2=new box(1200,500,50,50)
    //r3=new box(1200,600,50,50)
    //r4=new box(1150,600,50,50)
    //r5=new box(1110,600,50,50)
    //r6=new box(1050,600,50,50)
    //r7=new box(1000,600,50,50)
    //bro=new box(1100,500,50,50)
    //bro1=new box(1150,500,50,50)
    //bro2=new box(1050,500,50,50)
    //bro3=new box(1100,460,50,50)

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
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
textSize(30)
text("Drag the striker and release to shoot",200,50)
//line(p1x,p1y,p2x,p2y)
}

function mouseDragged(){
Matter.Body.setPosition(d.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
dr.fly();
}


