"use strict";

/**************************************************
Shandon Fleming

CART 253 - Exercise 5

Juggling BALLS

Juggle the balls until only the red balls/a red ball is left
**************************************************/

//created variables
let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 3;

let largerBalls = [];
let numLargerBalls = 5;

let state = `title`;//can be title, simulation, win, lose

//setup for the canvas and the ball positions
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

//customizes the background and manages the paddle/paddle movement
function draw() {
  background(26, 186, 240);

  paddle.move();
  paddle.display();
  paddle.handleInput();

//for loop for the red balls
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

//for loop for the larger green balls
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

//displays the title and its characteristics
  function title() {
    push();
    textSize(24);
    fill(0,0,250);
    textAlign(CENTER,CENTER);
    text(`Juggle the balls until only the red balls/a red ball is left`,width/2,height/2);
    pop();
  }

//runs the simulation
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

//display "lose" page if user drops all the red balls
  function lose() {
    push();
    textSize(64);
    fill(0,0,250);
    textAlign(CENTER,CENTER);
    text(`YOU LOST ALL THE RED BALLS :(`,width/2,height/2);
    pop();
  }

//display "win" page if user juggles the balls until at least one red one is left
  function win() {
    push();
    textSize(50);
    fill(0,0,250);
    textAlign(CENTER,CENTER);
    text(`WELL DONE, YOU DID IT :)`,width/2,height/2);
    pop();
  }

//moves the juggling paddle
  function move() {
    paddle.x = paddle.x + paddle.vx;
    paddle.x = constrain(paddle.x,0,width);
  }

//checks to see which balls have falles
  function checkActive() {
    if (ball.active === true && largerBall.active === false) {
      state = `win`;
    }
    else {
      state = `lose`;
    }
  }

//changes state from title to simulation
  function mousePressed() {
    if (state ===`title`) {
    state = `simulation`;
    }
  }
