"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let gravityForce = 0.0025;

let paddle;

function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300,20);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();
}
