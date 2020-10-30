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

let largerBalls = [];
let numLargerBalls = 2;

let state = `title`;

function setup() {
  createCanvas(1260,610);

  paddle = new Paddle(300,20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }

  for (let j = 0; j < numLargerBalls; j++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let largerBall = new LargerBall(x,y);
    largerBalls.push(largerBall);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(26, 186, 240);

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

  for (let j = 0; j < largerBalls.length; j++) {
    let largerBall = largerBalls[j];
    if (largerBall.active) {
      largerBall.gravity(gravityForce);
      largerBall.move();
      largerBall.bounce(paddle);
      largerBall.display();
    }
  }

  //4 states
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `win`) {
    win();
  }
  else if (state === `lose`) {
    lose();
  }
}

  function title() {
    push();
    textSize(24);
    fill(0,0,250);
    textAlign(CENTER,CENTER);
    text(`Juggle the balls until only the red balls/a red ball is left`,width/2,height/2);
    pop();
  }

  function simulation() {
    for (let i = 0; i < ball.length; i++) {
      move(balls[i]);
      display(balls[i]);
      checkActive(balls[i]);
    }

    for (let j = 0; j < largerBall.length; j++) {
      move(largerBalls[j]);
      display(largerBalls[j]);
      checkActive(largerBalls[j]);
    }

      handleInput();
  }

//display "lose" page if user touches a red circle
  function lose() {
    push();
    textSize(64);
    fill(0,0,250);
    textAlign(CENTER,CENTER);
    text(`YOU LOST ALL THE RED BALLS :(`,width/2,height/2);
    pop();
  }

//display "win" page if user makes it to the green square
  function win() {
    push();
    textSize(50);
    fill(0,0,250);
    textAlign(CENTER,CENTER);
    text(`WELL DONE, YOU DID IT :)`,width/2,height/2);
    pop();
  }


  function move() {
    paddle.x = paddle.x + paddle.vx;
    paddle.x = constrain(paddle.x,0,width);
  }

  function checkActive() {
    if (ball.active === true && largerBall.active === false) {
      state = `win`;
    }
    else {
      state = `lose`;
    }
  }

  function mousePressed() {
    if (state ===`title`) {
    state = `simulation`;
    }
  }
