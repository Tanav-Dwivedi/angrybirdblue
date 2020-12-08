class Log {
    constructor(x,y,bredth,angle){
        var force={restitution:0.75,friction:1,density:1}
       this.ball= Phisics3.rectangle(x,y,20,bredth,force);
       this.width=20
       this.height=bredth
       Matter.Body.setAngle(this.ball,angle)
          Phisics2.add(world,this.ball);
    }
    LogCreator(){
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