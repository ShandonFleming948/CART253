"use strict";

/**************************************************
Exercise 3 - Shandon Fleming

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x: 150,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let circle2 = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

function setup() {
  createCanvas(500,500);
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

  circle1.vx = random(-circle1.speed,circle1.speed);
  circle2.vx = random(-circle2.speed,circle2.speed);

}


function draw() {

}
