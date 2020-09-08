const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  floor = new Division(width/2,height-5,width,15)
  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,75))
  }

  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,135))
  }

  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,185))
  }

  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,235))
  }

  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,285))
  }

  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,335))
  }

  for (var j = 40; j<=width; j=j + 50){
    plinkos.push (new Plinko(j,385))
  }
  for (var l = 10; l<=width; l=l + 50){
    plinkos.push (new Plinko(l,110))
  }

  for (var l = 10; l<=width; l=l + 50){
    plinkos.push (new Plinko(l,160))
  }

  for (var l = 10; l<=width; l=l + 50){
    plinkos.push (new Plinko(l,210))
  }

  for (var l = 10; l<=width; l=l + 50){
    plinkos.push (new Plinko(l,260))
  }

  for (var l = 10; l<=width; l=l + 50){
    plinkos.push (new Plinko(l,310))
  }

  for (var l = 10; l<=width; l=l + 50){
    plinkos.push (new Plinko(l,360))
  }
}


function draw() {
  background(0,0,0);
  for (var k = 0; k<division.length; k++) {
    division[k].display();
  };
  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for (var l = 0; l<plinkos.length; l++){
    plinkos[l].display();
  }
  if (keyCode === 32 && frameCount % 90){
    particles.push(new Particle(random(width/2-150,width/2+150),5,5));
  }
  for (var h = 0; h < particles.length; h++){
    particles[h].display();
  }
  text("500",30,500);
  text("500",110,500);
  text("100",190,500);
  text("100",270,500);
  text("200",350,500);
  text("200",430,500);
  floor.display();
}
