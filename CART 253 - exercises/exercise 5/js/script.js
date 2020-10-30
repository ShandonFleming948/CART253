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

let balls = [];
let numBalls = 3;

function setup() {
  createCanvas(1260,610);

  paddle = new Paddle(300,20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();
  paddle.handleInput();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
}

  function move() {
    paddle.x = paddle.x + paddle.vx;
    paddle.x = constrain(paddle.x,0,width);
  }

//   function handleInput() {
//     if (keyIsDown(LEFT_ARROW)) {
//     paddle.vx = -paddle.speed;
//   }
//     else if (keyIsDown(RIGHT_ARROW)) {
//     paddle.vx = paddle.speed;
//   }
//     else {
//     paddle.vx = 0;
//   }
// }
