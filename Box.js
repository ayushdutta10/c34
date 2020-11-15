class Box{
  constructor(x,y,width,height){
     var options = {
       'friction' : 1.0,
       'restitution' : 0.8,
       'density' : 0.04


     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);

  }

  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode (CENTER);
    stroke ("green")
    strokeWeight(4);
    fill ("white");
    rect(0,0,this.width,this.height);
    pop();
  }
}