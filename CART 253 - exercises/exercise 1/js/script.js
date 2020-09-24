/**************************************************
Exercise 01: I like to move it move it!
Shandon Fleming

Brief: Create a program full of shapes that move, change size and color,
and anything else you want to experiment with.
**************************************************/
//  Created variables for background (bg) and circles 1-3
let bg = {
  r: 70,
  b: 217,
  g: 224
};
let circle1 = {
  x:100,
  y:500,
  size:15,
  fill:250,
};
let circle2 = {
  x:300,
  y:500,
  size:15,
  fill:250
};
let circle3 = {
  x:500,
  y:500,
  size:15,
  fill:250
};
// setup()
//
// Created the canvas
function setup() {
  createCanvas(600,600);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bg.r,bg.g,bg.b);

//circle1
  circle1.y = mouseY
  circle1.x = mouseX
  circle1.size = circle1.y;
  circle1.size = constrain(circle1.size,0,100);
  circle1.y = constrain(circle1.y,10,590);
  circle1.x = constrain(circle1.x,90,110);
  fill(circle1.fill);
  ellipse(circle1.x,circle1.y,circle1.size);

//circle2
  fill(circle2.fill);
  circle2.y = mouseY
  circle2.x = mouseX
  circle2.size = circle2.y - 200;
  circle2.size = constrain(circle2.size,0,200);
  circle2.y = constrain(circle2.y,10,590);
  circle2.x = constrain(circle2.x,290,310);
  ellipse(circle2.x,circle2.y,circle2.size);

//circle3
  circle3.y = mouseY
  circle3.x = mouseX
  circle3.y = constrain(circle3.y,10,590);
  circle3.x = constrain(circle3.x,490,510);
  fill(circle3.fill);
  ellipse(circle3.x,circle3.y,circle3.size);
}
