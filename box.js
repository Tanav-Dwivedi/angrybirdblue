class Box {
  constructor(x,y,length,bredth){
      var force={restitution:0.75,friction:1,density:1}
     this.ball= Phisics3.rectangle(x,y,length,bredth,force);
     this.width=length
     this.height=bredth
        Phisics2.add(world,this.ball);
  }
  creator(){
    strokeWeight(3)
    stroke("red")
    fill(71,39,11);
var pos=this.ball.position
var angel=this.ball.angle
push();
translate(pos.x,pos.y)
rotate(angel)
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop()
  }
}

