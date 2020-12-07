class box{
constructor(x,y,width,height){
var options={
    density:1,
    restitution:0,
    friction:0.00001
}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
}
display(){
    var angle=this.body.angle
    push();
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    rotate(angle)
    fill(255,0,0)
    rect(0,0,this.width,this.height)
    pop();
}
}