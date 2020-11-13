"use strict";

/**************************************************
Shandon Fleming
CART 253
Exercise 6

The code below displays a circle that the user controls with the
arrow keys. Each arrow key plays a different note when pressed.
**************************************************/
//added variable for the oscillator
let oscillator;

//created circleUser variable and characteristics
let circleUser = {
  x: 300,
  y: 300,
  size: 50,
  vx: 1,
  vy: 1,
  speed: 4
}

function setup() {
  //created canvas / canvas dimensions
  createCanvas(600, 600);

  //added oscillator and customized oscillator properties
  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.start();
}

function draw() {
  //set background color
  background(52, 177, 235);

  //included functions
  handleInput();
  move();
  sing();

  display();
}

//added keyboard controls for circleUser
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

//set up horizontal and vertical movement
function move() {
  circleUser.x = circleUser.x + circleUser.vx;
  circleUser.y = circleUser.y + circleUser.vy;

  circleUser.x = constrain(circleUser.x, 50, 550);
  circleUser.y = constrain(circleUser.y, 50, 550);

}
//set up the circle and its properties
function display() {
  noStroke()
  fill(250);
  ellipse(circleUser.x, circleUser.y, circleUser.size);
}

//changes oscillator frequency based on the velocity/direction of the circle
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
