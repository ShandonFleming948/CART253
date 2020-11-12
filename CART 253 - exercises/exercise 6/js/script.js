"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let oscillator;

let circleUser = {
  x:300,
  y:300,
  size:50,
  vx:1,
  vy:1,
  speed:4
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  oscillator = new p5.Oscillator(440,`sine`);
  oscillator.amp(0.0001);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(52,177,235);

  handleInput();
  move();
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

  circleUser.x = constrain(circleUser.x,50,550);
  circleUser.y = constrain(circleUser.y,50,550);

}

function display() {
  noStroke()
  fill(250);
  ellipse(circleUser.x,circleUser.y,circleUser.size);
}

function keyPressed() {
  // if (keyIsDown(LEFT_ARROW) || (keyIsDown(RIGHT_ARROW)) || (keyIsDown(UP_ARROW)) || (keyIsDown(DOWN_ARROW))) {
  //   oscillator.start();
  // }

  if (keyIsDown(RIGHT_ARROW)) {
    oscillator = new p5.Oscillator(400,`sine`);
    oscillator.start();
  }

  else if (keyIsDown(UP_ARROW)) {
    oscillator = new p5.Oscillator(500,`sine`);
    oscillator.start();
  }

  else if (keyIsDown(LEFT_ARROW)) {
    oscillator = new p5.Oscillator(300,`sine`);
    oscillator.start();
  }

  else if (keyIsDown(DOWN_ARROW)) {
    oscillator = new p5.Oscillator(200,`sine`);
    oscillator.start();
  }

}

function keyReleased() {
  console.log(oscillator);
  if (oscillator) {
    oscillator.stop();
    oscillator = undefined;
  }
}
