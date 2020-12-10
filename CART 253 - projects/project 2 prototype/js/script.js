"use strict";

/**************************************************
Shandon Fleming
CART 253 - Project 2
**************************************************/
let circleUser = {
  x:50,
  y:550,
  size:50,
  vx:1,
  vy:1,
  speed:2
}

let food1 = {
  x:450,
  y:550,
  size:10,
  eaten:false,
}

let food2 = {
  x:450,
  y:550,
  size:10,
  eaten:false,
}

let food3 = {
  x:450,
  y:550,
  size:10,
  eaten:false,
}

let food4 = {
  x:450,
  y:550,
  size:10,
  eaten:false,
}

let food5 = {
  x:450,
  y:550,
  size:10,
  eaten:false,
}


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
    dY: 100,
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
    dY: 100,
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
    dY: 100,
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
    dY: 100,
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
    dY: 100,
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
  // console.log(walls[0].vx,walls[0].vy)

  handleInput();
  move();
  display();

  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    wall.display()
    wall.move()
    wall.bounce()
    checkOverlap(wall)
  }
}

//keyboard controls for the white circle
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

//circles movement
function move() {
  circleUser.x = circleUser.x + circleUser.vx;
  circleUser.y = circleUser.y + circleUser.vy;

  circleUser.x = constrain(circleUser.x,30,970);
  circleUser.y = constrain(circleUser.y,30,570);
    // if (circleUser.x > 949) {
    //   circleUser.y = constrain(circleUser.y,50,550);
    // }
}

function checkOverlap(wall) {
  if (wall.x1 - wall.x2 === 0) {
    // Vertical line
    if (circleUser.x + circleUser.size / 2 > wall.x1 &&
      circleUser.x - circleUser.size / 2 < wall.x1 &&
      circleUser.y + circleUser.size / 2 > wall.y1 &&
      circleUser.y - circleUser.size / 2 < wall.y2) {
      circleUser.x = circleUser.x - circleUser.vx;
      circleUser.y = circleUser.y - circleUser.vy;
    }
  }
  else if (wall.y1 - wall.y2 === 0) {
    // Horizontal lines
    if (circleUser.y + circleUser.size / 2 > wall.y1 &&
      circleUser.y - circleUser.size / 2 < wall.y1 &&
      circleUser.x + circleUser.size / 2 > wall.x1 &&
      circleUser.x - circleUser.size / 2 < wall.x2) {
      circleUser.x = circleUser.x - circleUser.vx;
      circleUser.y = circleUser.y - circleUser.vy;
    }
  }
}

function display() {
  noStroke()
  fill(250,250,250);
  ellipse(circleUser.x,circleUser.y,circleUser.size);
}
