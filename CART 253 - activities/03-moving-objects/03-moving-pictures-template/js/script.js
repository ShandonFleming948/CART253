/**************************************************
Moving Objects
Shandon Fleming

Experimenting with moving shapes
**************************************************/
let bg = {
  r: 0,
  b: 0,
  g: 0
};
let circle1 = {
x: 0,
y: 250,
size: 100,
fill: 255,
alpha: 200
};
let circle2 = {
x: 500,
y: 250,
size: 75,
fill: 255,
alpha: 200
};
// setup()
//
// background
function setup() {
  createCanvas(500,500);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {
//background
  background(bg.r,bg.g,bg.g);
  bg.r = bg.r + 1;

//left circle
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);
}
