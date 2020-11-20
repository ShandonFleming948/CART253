"use strict";

/**************************************************
Shandon Fleming
CART 253 - Project 2 "Prototype"
**************************************************/
let walls = [{
    x1: 100,
    y1: 100,
    x2: 500,
    y2: 100
  },
  {
    x1: 100,
    y1: 100,
    x2: 100,
    y2: 500
  },
  {
    x1: 100,
    y1: 200,
    x2: 400,
    y2: 200
  }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(52,177,235);

  stroke(0);
  strokeWeight(10);
  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    line(wall.x1, wall.y1, wall.x2, wall.y2);
  }
}
