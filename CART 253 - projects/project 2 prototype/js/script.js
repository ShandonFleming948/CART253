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
    circle(mouseX,mouseY,30);

//supposed to be the moving wall :|
  line(700,300,700,500);
}

//supposed to be a "working" if statement that changes the color of the user's circle when it touches the wall
if (circle.y = 250) {
  circleColor === fill(250,0,0);
}

//https://editor.p5js.org/mrbombmusic/sketches/e4faVFeaE
//sketch.js code for line-circle collision
//I would use this to detect the contact between the user's circle and the walls of the maze
let cx = 0;
let cy = 0;
let r = 20;

let x1 = 100;
let y1 = 100;
let x2 = 100;
let y2 = 300;


function setup() {
  createCanvas(400, 400);

  strokeWeight(10);
}

function draw() {
  background(220);

  cx = mouseX;
  cy = mouseY;

  let hit = lineCircle(x1, y1, x2, y2, cx, cy, r);
  if (hit) stroke(255, 150, 0, 150);
  else stroke(0, 150, 255, 150);


  line(x1, y1, x2, y2);

  noStroke();
  ellipse(cx, cy, r * 2);


}

function lineCircle(x1, y1, x2, y2, cx, cy, rad) {
  let inside1 = pointCircle(x1, y1, cx, cy, rad);
  let inside2 = pointCircle(x2, y2, cx, cy, rad);
  if (inside1 || inside2) return true;

  let len = dist(x1, y1, x2, y2);

  let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / pow(len, 2);

  let closestX = x1 + (dot * (x2 - x1));
  let closestY = y1 + (dot * (y2 - y1));

  let onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;

  let distance = dist(closestX, closestY, cx, cy);

   if (distance <= r) {
    return true;
  }
  return false;
}

function linePoint(x1, y1, x2, y2, px, py) {
  let d1 = dist(px, py, x1, y1);
  let d2 = dist(px, py, x2, y2);

  let lineLen = dist(x1, y1, x2, y2);

  let buffer = 0.5;

  if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true;
  }
  return false;

}

function pointCircle(px, py, cx, cy) {
  let d = dist(px, py, cx, cy);

  if (d <= size / 2) {
    return true;
  }
  return false;
}

//https://p5js.org/reference/#/p5/noise
//sketch.js code for moving walls of the maze
//I would use this to gradually move the walls of the maze
let xoff = 0.0;

function draw() {
  background(204);
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  line(n, 0, n, height);
}
