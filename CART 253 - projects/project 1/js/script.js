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
  speed:1
}

let circle2 = {
  x:50,
  y:150,
  size:50,
  vx:0,
  vy:0,
  speed:1
}

let circle3 = {
  x:600,
  y:350,
  size:50,
  vx:0,
  vy:0,
  speed:1
}

let circle4 = {
  x:50,
  y:550,
  size:50,
  vx:0,
  vy:0,
  speed:2
}


function setup() {
  createCanvas(1000,600);

  circle1.vx = (-circle1.speed,circle1.speed);
  circle2.vy = (-circle2.speed,circle2.speed);
  circle3.vx = (-circle3.speed,circle3.speed);


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(52,177,235);

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
  circle3.x = constrain(circle3.x,550,650);
    if (circle3.x < 649) {
    circle3.speed = circle3.speed
    }

    if (circle3.x > 649) {
    circle3.speed = -circle3.speed
    }
    if (circle3.x < 551) {
    circle3.speed = -circle3.speed
    }

  noStroke()
  fill(240,0,0);
  ellipse(circle1.x,circle1.y,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size);
  ellipse(circle3.x,circle3.y,circle3.size);

  noStroke()
  fill(250,250,250);
  ellipse(circle4.x,circle4.y,circle4.size);


}
