"use strict";

/**************************************************
Shandon Fleming
CART 253 - Project 2 "Prototype"
**************************************************/

let wallData = [{
    startX1: 100,
    startY1: 0,
    x1: 100,
    y1: 0,
    x2: 100,
    y2: 100,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 100,
    y1: 200,
    x2: 100,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 100,
    y1: 300,
    x2: 200,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 0,
    y1: 400,
    x2: 100,
    y2: 400,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 100,
    y1: 400,
    x2: 100,
    y2: 500,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 100,
    y1: 500,
    x2: 300,
    y2: 500,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 200,
    y1: 400,
    x2: 400,
    y2: 400,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 400,
    y1: 300,
    x2: 400,
    y2: 600,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 300,
    y1: 300,
    x2: 500,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 300,
    y1: 200,
    x2: 300,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 200,
    y1: 100,
    x2: 200,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 200,
    y1: 100,
    x2: 700,
    y2: 100,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 400,
    y1: 200,
    x2: 600,
    y2: 200,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 500,
    y1: 300,
    x2: 500,
    y2: 400,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 500,
    y1: 500,
    x2: 500,
    y2: 600,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 600,
    y1: 200,
    x2: 600,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 600,
    y1: 300,
    x2: 700,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 500,
    y1: 400,
    x2: 900,
    y2: 400,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 600,
    y1: 500,
    x2: 1000,
    y2: 500,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 700,
    y1: 100,
    x2: 700,
    y2: 200,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 700,
    y1: 200,
    x2: 800,
    y2: 200,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 800,
    y1: 200,
    x2: 800,
    y2: 300,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 800,
    y1: 0,
    x2: 800,
    y2: 100,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 900,
    y1: 100,
    x2: 1000,
    y2: 100,
    dY: 0,
    vx: 0,
    vy: 0,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 900,
    y1: 200,
    x2: 900,
    y2: 400,
    dY: 0,
    vx: 0,
    vy: 0,
  },

  //moving walls

  {
    startX1: 100,
    startY1: 0,
    x1: 200,
    y1: 400,
    x2: 200,
    y2: 500,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 300,
    y1: 500,
    x2: 300,
    y2: 600,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 400,
    y1: 100,
    x2: 400,
    y2: 200,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 500,
    y1: 200,
    x2: 500,
    y2: 300,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 600,
    y1: 100,
    x2: 600,
    y2: 200,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 600,
    y1: 400,
    x2: 600,
    y2: 500,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 700,
    y1: 500,
    x2: 700,
    y2: 600,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 800,
    y1: 400,
    x2: 800,
    y2: 500,
    dY: -100,
    vx: 0,
    vy: -1,
  },
  {
    startX1: 100,
    startY1: 0,
    x1: 900,
    y1: 500,
    x2: 900,
    y2: 600,
    dY: -100,
    vx: 0,
    vy: -1,
  },
];

let walls = []

function setup() {
  createCanvas(1000,600);

  for (let i = 0; i < wallData.length; i++) {
    let data = wallData[i]
    let wall = new Wall(data)
    walls.push(wall)
  }
}

function draw() {
  background(52,177,235);
  console.log(walls[0].vx,walls[0].vy)


  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    wall.display()


  // // move()
  // wall.x1 = wall.x1 + wall.vx;
  // wall.x2 = wall.x2 + wall.vx;
  //
  // wall.y1 = wall.y1 + wall.vy;
  // wall.y2 = wall.y2 + wall.vy;

  // // bounce()
  // // Is this wall moving downward first? (positive dY)
  // if (wall.dY > 0) {
  //   // Is the wall beyond the distance, or back at the starting position?
  //   if (wall.y1 > wall.startY1 + wall.dY || wall.y1 < wall.startY1) {
  //     // Reverse velocity
  //     wall.vx = -wall.vx;
  //     wall.vy = -wall.vy;
  //   }
  // }
  // // // Or is it moving upward first? (negative dY)
  // else if (wall.dY < 0) {
  //   // Is the wall beyond the distance, or back at the starting position?
  //   if (wall.y1 < wall.startY1 + wall.dY || wall.y1 > wall.startY1) {
  //     // Reverse velocity
  //     wall.vx = -wall.vx;
  //     wall.vy = -wall.vy;
  //   }
  // }


}
  // Draw the wall
  // stroke(255);
  // strokeWeight(10);
  // line(wall.x1, wall.y1, wall.x2, wall.y2);
}
