"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let oscillator;

let circleUser = {
  x: 300,
  y: 300,
  size: 50,
  vx: 1,
  vy: 1,
  speed: 4
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.start();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(52, 177, 235);

  handleInput();
  move();
  sing();

  display();
}


function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    circleUser.vx = -circleUser.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circleUser.vx = circleUser.speed;
  }
  else {
    circleUser.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    circleUser.vy = -circleUser.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    circleUser.vy = circleUser.speed;
  }
  else {
    circleUser.vy = 0;
  }
}

function move() {
  circleUser.x = circleUser.x + circleUser.vx;
  circleUser.y = circleUser.y + circleUser.vy;

  circleUser.x = constrain(circleUser.x, 50, 550);
  circleUser.y = constrain(circleUser.y, 50, 550);

}

function display() {
  noStroke()
  fill(250);
  ellipse(circleUser.x, circleUser.y, circleUser.size);
}

function sing() {
  if (circleUser.vx < 0) {
    oscillator.freq(300);
    oscillator.amp(0.08);
  }
  else if (circleUser.vx > 0) {
    oscillator.freq(400);
    oscillator.amp(0.08);
  }
  else if (circleUser.vy < 0) {
    oscillator.freq(500);
    oscillator.amp(0.08);
  }
  else if (circleUser.vy > 0) {
    oscillator.freq(200);
    oscillator.amp(0.08);
  }
  else {
    oscillator.amp(0);
  }
}
