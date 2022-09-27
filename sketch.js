function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#eab503');
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  
  strokeWeight(7);
  stroke(40);
  
  let hight = windowHeight - 120
  let width = 550
  let startingx = windowWidth/3
  let startingy = 50

  let framecolor = 'rgb(229,214,185)'
  let redcolor = "rgb(186, 49, 43)"
  let bluecolor = "#0265b6"
  let yellowcolor = "#eab503"
 
  
  // Draw rotating rectangle
  push(); 
  strokeWeight(2);
  noFill()
  
  translate(800 , 450)
  if (frameCount ==255){// To keep changing the color between red and white
    frameCount = 0;
  }
  
  let mycolor = lerpColor(color("red"), color("white"), frameCount /120);
  stroke(mycolor)

  let angle = frameCount * 3
  rotate(angle);

  rect(100, 100, 400, 400);
  pop(); 
  

  // Draw frame
  fill(framecolor);
  rect(startingx, startingy, width, hight);

  // rectangle 1
  rect(startingx, startingy, 300, 300);

  // rectangle 2
  rect(startingx + 300, 250, 150 , 150);

  // rectangle 3
  fill(redcolor);
  rect(startingx + 300, startingy, 150 , 150);

  // rectangle 4
  fill(bluecolor);
  rect(startingx + 450, 250, 100 , 150);
  
  // rectangle 5
  fill(yellowcolor);
  rect(startingx + 450, 180, 100 , 70);

  //Draw lines
  line(startingx + 240, 350, startingx + 240, hight +startingy);
  line(startingx + 100, 350, startingx + 100, 450);
  line(startingx + 200, 400, startingx + 200, hight +startingy);

  // rectangle 6
  fill(yellowcolor);
  rect(startingx, windowHeight -240, 160 , 170);

  // rectangle 7
  fill(framecolor);
  rect(startingx + 240, 400, 150 , 140);

  // rectangle 8
  fill(bluecolor);
  rect(startingx , 400, 240 , 50);

  // rectangle 9
  fill(redcolor);
  rect(startingx + 390, 430, 160 , 200);

  // Drawing small yellow circles
  noStroke()
  fill(yellowcolor);
  let x = startingx + 520
  circle(x, 460, 20);
  circle(x, 490, 20);
  circle(x, 520, 20);
  circle(x, 550, 20);

  //Drawing blue circles
  stroke(bluecolor)
  noFill()
  strokeWeight(3);
  x = startingx + 100
  let y = startingy + 100
  circle(x, y, 130);
  circle(x, y, 100);
  circle(x, y, 70);
  circle(x, y, 40);
  circle(x, y, 10);
  
  // Drawing red traingles
  stroke(redcolor)
  noFill()
  x = startingx + 350
  y = startingy + 550
  triangle(x, y, x - 30, y -40 , x -60, y);
  triangle(x, y+20, x - 30, y -20 , x -60, y+20);
  triangle(x, y+40, x - 30, y  , x -60, y+40);

  // Drawing small blue lines
  stroke(bluecolor)
  noFill()
  x = startingx + 80
  y = startingy + 410
  line(x, y, x+20, y);
  line(x -20 , y+10, x+20, y+10);
  line(x -40 , y+20, x+20, y+20);
  line(x, y+40, x+20, y+40);
  line(x -20 , y+30, x+20, y+30);
 
}
