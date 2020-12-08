const Phisics1= Matter.Engine;
const Phisics2= Matter.World;
const Phisics3= Matter.Bodies;

var engine, world;
var ball;
var ground;
var multiBox1,multiBox2,Pig1,Log1;
var playGround;

function setup() {
  createCanvas(1200,600);
  
  engine=Phisics1.create();
  world= engine.world;

  multiBox1=new Box(750,570,70,70)
  multiBox2=new Box(950,570,70,70)
  Pig1=new Pig(850,570)
  Log1=new Log(850,530,270,PI/4)
  playGround=new PlayArea(600,590,1200,20)

  console.log(ball)
}

function draw() {
  background("cyan");
  Phisics1.update(engine)
  multiBox1.creator()
  multiBox2.creator()
  Pig1.pigCreator()
  Log1.LogCreator()
  playGround.groundCreator()
}