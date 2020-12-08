class AngryBird {
    constructor(x,y){
        var force={restitution:0.75,friction:1,density:1}
       this.ball= Phisics3.rectangle(x,y,30,30,force);
       this.width=30
       this.height=30
          Phisics2.add(world,this.ball);
    }
    angryBirdCreator(){
      strokeWeight(3)
      stroke("red")
      fill(71,39,11);
  var pos=this.ball.position
  var angel=this.ball.angle
  pos.x=mouseX;
  pos.y=mouseY;
  push();
  translate(pos.x,pos.y)
  rotate(angel)
  rectMode(CENTER);
  rect(0,0,this.width,this.height);
  pop()
    }
}