class PlayArea {
    constructor(x,y,breadth,length){
        var property1={isStatic:true}
        this.ground= Phisics3.rectangle(x,y,breadth,length,property1);
        this.width=breadth
        this.height=length
        Phisics2.add(world,this.ground);
    }
    groundCreator(){
        var pos=this.ground.position
        fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}