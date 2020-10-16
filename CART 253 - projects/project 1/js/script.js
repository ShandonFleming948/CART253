"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let circle1 = {
  x:300,
  y:450,
  size:50,
  vx:0,
  vy:0,
  speed:2.2
}

let circle2 = {
  x:50,
  y:150,
  size:50,
  vx:0,
  vy:0,
  speed:2.5
}

let circle3 = {
  x:550,
  y:350,
  size:50,
  vx:0,
  vy:0,
  speed:3.5
}

let circleUser = {
  x:50,
  y:550,
  size:50,
  vx:1,
  vy:1,
  speed:2
}

let circle5 = {
  x:400,
  y:50,
  size:50,
  vx:1,
  vy:1,
  speed:2.7
}

let state = `title`; //can be title, simulation, win, lose

function setup() {
  createCanvas(1000,600);
}


function draw() {
  background(52,177,235);

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
  text(`Pass through the maze and reach the green square without getting caught by the red circles`,width/2,height/2);
  pop();
}

function simulation() {
  handleInput();
  move();
  display();
  checkOverlap();
}

function lose() {
  push();
  textSize(64);
  fill(0,0,250);
  textAlign(CENTER,CENTER);
  text(`YOU GOT CAUGHT :(`,width/2,height/2);
  pop();
}

function win() {
  push();
  textSize(60);
  fill(0,0,250);
  textAlign(CENTER,CENTER);
  text(`CONGRATULATIONS, YOU MADE IT :)`,width/2,height/2);
  pop();
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


function move() {
  circleUser.x = circleUser.x + circleUser.vx;
  circleUser.y = circleUser.y + circleUser.vy;

  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,250,350);
    if (circle1.x < 349) {
      circle1.speed = circle1.speed
    }

    if (circle1.x > 349) {
      circle1.speed = -circle1.speed
    }
    if (circle1.x < 251) {
      circle1.speed = -circle1.speed
    }


  circle2.y = circle2.y + circle2.speed;
  circle2.y = constrain(circle2.y,50,250);
    if (circle2.y < 249) {
    circle2.speed = circle2.speed
    }

    if (circle2.y > 249) {
    circle2.speed = -circle2.speed
    }
    if (circle2.y < 51) {
    circle2.speed = -circle2.speed
    }

  circle3.x = circle3.x + circle3.speed;
  circle3.x = constrain(circle3.x,550,850);
    if (circle3.x < 849) {
    circle3.speed = circle3.speed
    }
    if (circle3.x > 849) {
    circle3.speed = -circle3.speed
    }
    if (circle3.x < 551) {
    circle3.speed = -circle3.speed
    }


  circleUser.x = constrain(circleUser.x,50,950);
  circleUser.y = constrain(circleUser.y,50,550);


  circle5.x = circle5.x + circle5.speed;
  circle5.x = constrain(circle5.x,250,550);
    if (circle5.x < 549) {
    circle5.speed = circle5.speed
    }

    if (circle5.x > 549) {
    circle5.speed = -circle5.speed
    }
    if (circle5.x < 251) {
    circle5.speed = -circle5.speed
    }
}

function display() {
  ellipse(circleUser.x,circleUser.y,circleUser.size);

  line(0,500,100,500);
  stroke(0);
  strokeWeight(10);

  line(0,500,100,500);
  stroke(0);
  strokeWeight(10);

  line(200,400,200,600);
  stroke(0);
  strokeWeight(10);

  line(100,400,200,400);
  stroke(0);
  strokeWeight(10);

  line(0,300,300,300);
  stroke(0);
  strokeWeight(10);

  line(300,300,300,400);
  stroke(0);
  strokeWeight(10);

  line(400,400,400,600);
  stroke(0);
  strokeWeight(10);

  line(100,200,400,200);
  stroke(0);
  strokeWeight(10);

  line(200,0,200,100);
  stroke(0);
  strokeWeight(10);

  line(300,100,300,200);
  stroke(0);
  strokeWeight(10);

  line(400,100,400,200);
  stroke(0);
  strokeWeight(10);

  line(400,100,500,100);
  stroke(0);
  strokeWeight(10);

  line(500,100,500,300);
  stroke(0);
  strokeWeight(10);

  line(400,300,600,300);
  stroke(0);
  strokeWeight(10);

  line(500,300,500,500);
  stroke(0);
  strokeWeight(10);

  line(500,500,600,500);
  stroke(0);
  strokeWeight(10);

  line(500,400,800,400);
  stroke(0);
  strokeWeight(10);

  line(700,400,700,600);
  stroke(0);
  strokeWeight(10);

  line(800,500,900,500);
  stroke(0);
  strokeWeight(10);

  line(900,0,900,500);
  stroke(0);
  strokeWeight(10);

  line(800,300,900,300);
  stroke(0);
  strokeWeight(10);

  line(800,200,800,300);
  stroke(0);
  strokeWeight(10);

  line(600,200,800,200);
  stroke(0);
  strokeWeight(10);

  line(700,100,700,300);
  stroke(0);
  strokeWeight(10);

  line(600,0,600,100);
  stroke(0);
  strokeWeight(10);

  line(800,0,800,100);
  stroke(0);
  strokeWeight(10);

  fill(31,237,103);
  square(900,0,100);

  noStroke()
  fill(240,0,0);
  ellipse(circle1.x,circle1.y,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size);
  ellipse(circle3.x,circle3.y,circle3.size);
  ellipse(circle5.x,circle5.y,circle5.size);

  noStroke()
  fill(250,250,250);
  ellipse(circleUser.x,circleUser.y,circleUser.size);
}

function checkOverlap() {
  let d = dist(circle1.x,circle1.y,circleUser.x,circleUser.y);
  if (d < circle1.size/2 + circleUser.size/2) {
    state = `lose`;
  }
   d = dist(circle2.x,circle2.y,circleUser.x,circleUser.y);
  if (d < circle2.size/2 + circleUser.size/2) {
    state = `lose`;
  }
   d = dist(circle3.x,circle3.y,circleUser.x,circleUser.y);
  if (d < circle3.size/2 + circleUser.size/2) {
    state = `lose`;
  }
   d = dist(circle5.x,circle5.y,circleUser.x,circleUser.y);
  if (d < circle5.size/2 + circleUser.size/2) {
    state = `lose`;
  }

  if (circleUser.x === 950, circleUser.y === 50) {
    state = `win`;
  }
}

function mousePressed() {
  if (state ===`title`) {
    state = `simulation`;
  }
}
