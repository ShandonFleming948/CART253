"use strict";

/**************************************************
Exercise 3 - Shandon Fleming

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x: 150,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let circle2 = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let state = `simulation`;

//circles are positioned apart from each other
function setup() {
  createCanvas(500,500);
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

//circles will move in a random direction
  circle1.vx = random(-circle1.speed,circle1.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);
  circle2.vx = random(-circle2.speed,circle2.speed);
  circle2.vy = random(-circle2.speed,circle2.speed);

}


function draw() {
  background(0);

  simulation();
}

function simulation() {
  movement()
  offScreen()
  overlap()
  displayCircles()
}


function movement() {
  //circle movement
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function offScreen() {
  //circles have gone offscreen if...
    if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
      //you lost
    }
}

function overlap() {
  //if circles overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    //you win
  }
}

function displayCircles() {
  //display the circles
    ellipse(circle1.x,circle1.y,circle1.size);
    ellipse(circle2.x,circle2.y,circle2.size);
}

}
