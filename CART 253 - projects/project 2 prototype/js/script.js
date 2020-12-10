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
  size:20,
  eaten:false
}

let food2 = {
  x:350,
  y:350,
  size:20,
  eaten:false
}

let food3 = {
  x:950,
  y:550,
  size:20,
  eaten:false
}

let food4 = {
  x:50,
  y:250,
  size:20,
  eaten:false
}

let food5 = {
  x:450,
  y:50,
  size:20,
  eaten:false
}

let food6 = {
  x:550,
  y:250,
  size:20,
  eaten:false
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

  checkFood1();
  checkFood2();
  checkFood3();
  checkFood4();
  checkFood5();

  displayFood1();
  displayFood2();
  displayFood3();
  displayFood4();
  displayFood5();


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

function checkFood1() {
  if (!food1.eaten) {
    let d = dist(circleUser.x, circleUser.y, food1.x, food1.y);
    if (d < circleUser.size / 2 + food1.size / 2) {
      food1.eaten = true;
    }
  }
}

function checkFood2() {
  if (!food2.eaten) {
    let d = dist(circleUser.x, circleUser.y, food2.x, food2.y);
    if (d < circleUser.size / 2 + food2.size / 2) {
      food2.eaten = true;
    }
  }
}

function checkFood3() {
  if (!food3.eaten) {
    let d = dist(circleUser.x, circleUser.y, food3.x, food3.y);
    if (d < circleUser.size / 2 + food3.size / 2) {
      food3.eaten = true;
    }
  }
}

function checkFood4() {
  if (!food4.eaten) {
    let d = dist(circleUser.x, circleUser.y, food4.x, food4.y);
    if (d < circleUser.size / 2 + food4.size / 2) {
      food4.eaten = true;
    }
  }
}

function checkFood5() {
  if (!food5.eaten) {
    let d = dist(circleUser.x, circleUser.y, food5.x, food5.y);
    if (d < circleUser.size / 2 + food5.size / 2) {
      food5.eaten = true;
    }
  }
}

function checkFood6() {
  if (!food6.eaten) {
    let d = dist(circleUser.x, circleUser.y, food6.x, food6.y);
    if (d < circleUser.size / 2 + food6.size / 2) {
      food6.eaten = true;
    }
  }
}

function displayFood1() {
  if (!food1.eaten) {
    push();
    fill(252, 222, 25);
    ellipse(food1.x, food1.y, food1.size);
    pop();
  }
}

function displayFood2() {
  if (!food2.eaten) {
    push();
    fill(252, 222, 25);
    ellipse(food2.x, food2.y, food2.size);
    pop();
  }
}

function displayFood3() {
  if (!food3.eaten) {
    push();
    fill(252, 222, 25);
    ellipse(food3.x, food3.y, food3.size);
    pop();
  }
}

function displayFood4() {
  if (!food4.eaten) {
    push();
    fill(252, 222, 25);
    ellipse(food4.x, food4.y, food4.size);
    pop();
  }
}

function displayFood5() {
  if (!food5.eaten) {
    push();
    fill(252, 222, 25);
    ellipse(food5.x, food5.y, food5.size);
    pop();
  }
}

function displayFood6() {
  if (!food6.eaten) {
    push();
    fill(252, 222, 25);
    ellipse(food6.x, food6.y, food6.size);
    pop();
  }
}
