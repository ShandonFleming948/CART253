"use strict";

/**************************************************
Shandon Fleming
CART 253 - Project 2 "Prototype"
**************************************************/
//circle color
let circleColor = fill(51,51,51);

//created the canvas
function setup() {
  createCanvas(1250, 600);

}

function draw() {
  background(220);

//supposed to be an example of a wall that the user's circle would come into contact with
  push();
  line(0, 250, 1250, 250);
  strokeWeight(5);
  pop();

//the user's circle
  fill(51);
  circle(mouseX,mouseY,30);

//supposed to be the moving wall :|
  line(700,300,700,500);
}

//supposed to be a "working" if statement that changes the color of the user's circle when it touches the wall
if (circle.y = 250) {
  circleColor === fill(250,0,0);
}
