"use strict";

// Project 1
// Shandon Fleming\
// CART 253
//
// use the keyboard arrows to dodge the red fish for as long as you possibly can

//objects
let school = [];
let schoolSize = 6;
let circleUser = {
  x:300,
  y:300,
  size:50,
  vx:1,
  vy:1,
  speed:3
}

//first state
let state = `title`; //can be title, simulation, win, lose

function setup() {
  createCanvas(600,600);

//for-loop for the school of fish
  for ( let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  };
}

//draw()
//moves and displays the fish
function draw() {
  background(0);

  if (state === `title`) {
  title();
}
else if (state === `simulation`) {
  simulation();
}
else if (state === `lose`) {
  lose();
}
}

//displays the title
function title() {
  push();
  textSize(24);
  fill(0,0,250);
  textAlign(CENTER,CENTER);
  text(`Survive As Long As You Can Without Getting Caught`,width/2,height/2);
  pop();
}

//run simulation
function simulation() {
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
    checkOverlap(school[i]);
}

  moveCircleUser();
  displayCircleUser();

}


//display "lose" page if user touches a red circle
function lose() {
  push();
  textSize(45);
  fill(0,0,250);
  textAlign(CENTER,CENTER);
  text(`YOU GOT CAUGHT :(`,width/2,height/2);
  pop();
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

//displays the circle that the user controls with the keyboard controls
function displayCircleUser(fish) {
  ellipse(circleUser.x,circleUser.y,circleUser.size);
}

function moveCircleUser(fish) {
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
  circleUser.x = circleUser.x + circleUser.vx;
  circleUser.y = circleUser.y + circleUser.vy;

  circleUser.x = constrain(circleUser.x,0,600);
  circleUser.y = constrain(circleUser.y,0,600);
    // if (circleUser.x > ) {
    //   circleUser.y = constrain(circleUser.y,50,550);
    // }
}

//checks if circleUser is caught by the fish
function checkOverlap(fish) {
  let d = dist(fish.x,fish.y,circleUser.x,circleUser.y);
  if (d < fish.size/2 + circleUser.size/2) {
    state = `lose`;
  }
}

//changes the state when the mouse is pressed
function mousePressed() {
  if (state ===`title`) {
    state = `simulation`;
  }
}
