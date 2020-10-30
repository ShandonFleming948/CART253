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

let bigBalls = [];
let numBigBalls = 2;

function setup() {
  createCanvas(1260,610);

  paddle = new Paddle(300,20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }

  for (let i = 0; i < numBigBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let bigBall = new BigBall(x,y);
    bigBalls.push(bigBall);
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

  for (let i = 0; i < bigBalls.length; i++) {
    let bigBall = bigBalls[i];
    if (bigBall.active) {
      bigBall.gravity(gravityForce);
      bigBall.move();
      bigBall.bounce(paddle);
      bigBall.display();
    }
  }

}

  function move() {
    paddle.x = paddle.x + paddle.vx;
    paddle.x = constrain(paddle.x,0,width);
  }
