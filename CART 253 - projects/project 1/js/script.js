"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let circle1 = {
  x:300,
  y:550,
  size:50,
  vx:0,
  vy:0,
  speed:2
}

//let circle2 = {
//  x:
//  y:
//  size:
//  vx:
//  vy:
//  speed:
//}

//let circle3 = {
//  x:
//  y:
//  size:
//  vx:
//  vy:
//  speed:
//}


function setup() {
  createCanvas(1000,600);

  //circle1.vx = (-circle1.speed,circle1.speed);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(52,177,235);

  line(0,500,100,500);
  stroke(0);
  strokeWeight(10);

  line(200,400,200,600);
  stroke(0);
  strokeWeight(10);

  line(100,400,200,400);
  stroke(0);
  strokeWeight(10);

  line(0,300,300,300);
  stroke(0);
  strokeWeight(10);

  line(300,300,300,400);
  stroke(0);
  strokeWeight(10);

  line(400,400,400,600);
  stroke(0);
  strokeWeight(10);

  line(100,200,400,200);
  stroke(0);
  strokeWeight(10);

  line(200,0,200,100);
  stroke(0);
  strokeWeight(10);

  line(300,100,300,200);
  stroke(0);
  strokeWeight(10);

  line(400,100,400,200);
  stroke(0);
  strokeWeight(10);

  line(400,100,500,100);
  stroke(0);
  strokeWeight(10);

  line(500,100,500,300);
  stroke(0);
  strokeWeight(10);

  line(400,300,600,300);
  stroke(0);
  strokeWeight(10);

  line(500,300,500,500);
  stroke(0);
  strokeWeight(10);

  line(500,500,600,500);
  stroke(0);
  strokeWeight(10);

  line(500,400,800,400);
  stroke(0);
  strokeWeight(10);

  line(700,400,700,600);
  stroke(0);
  strokeWeight(10);

  line(800,500,900,500);
  stroke(0);
  strokeWeight(10);

  line(900,0,900,500);
  stroke(0);
  strokeWeight(10);

  line(800,300,900,300);
  stroke(0);
  strokeWeight(10);

  line(800,200,800,300);
  stroke(0);
  strokeWeight(10);

  line(600,200,800,200);
  stroke(0);
  strokeWeight(10);

  line(700,100,700,300);
  stroke(0);
  strokeWeight(10);

  line(600,0,600,100);
  stroke(0);
  strokeWeight(10);

  line(800,0,800,100);
  stroke(0);
  strokeWeight(10);

  square(900,0,100);
  fill(31,237,103);
}
