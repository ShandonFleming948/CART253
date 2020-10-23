"use strict";

let school = [];
let schoolSize = 4;
let circleUser = {
  x:300,
  y:300,
  size:50,
  vx:1,
  vy:1,
  speed:2
}

function setup() {
  createCanvas(600,600);

  for ( let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

//createFish (x,y)
//creates a new Javascript object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 5
  };
  return fish;
}

//draw()
//moves and displays the fish
function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
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

//moveFish(fish)
//chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
//choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

//move the fish
fish.x = fish.x + fish.vx;
fish.y = fish.y + fish.vy;

//constrain the fish to the canvas
fish.x = constrain(fish.x, 0, width);
fish.y = constrain(fish.y, 0, width);

circleUser.x = constrain(circleUser.x,0,600);
  circleUser.y = constrain(circleUser.y,0,600);

}

//displayFish(fish)
//displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(225, 0, 0);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function display() {
  ellipse(circleUser.x,circleUser.y,circleUser.size)
  ellipse(circleUser.x,circleUser.y,circleUser.size);
  noStroke()
    fill(250,250,250);
}
