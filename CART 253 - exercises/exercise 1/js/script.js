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
}
let circle1 = {
  x:100,
  y:500,
  size:0,
  fill:250,
}
let circle2 = {
  x:300,
  y:500,
  size:0,
  fill:250,
}
let circle3 = {
  x:500,
  y:500,
  size:0,
  fill:250,
}
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
}
