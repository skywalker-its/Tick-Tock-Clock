
function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
  background(0);
 
  fill("gold");
  textSize(24);
  text(" <<Tick Tock Clock>> ", 100,400); 

  translate(200,200)
  rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(9);
  stroke("blue");
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("red");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("pink");
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  

  push();
  rotate(end);
  stroke("yellow");
  line(0,0,100,0);
  pop();
  
  push();
  rotate(end2);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("red");
  line(0,0,60,0);
  pop();
  
  stroke("violet");
  point (0,0);

}
  
  