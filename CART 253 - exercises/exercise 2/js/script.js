/**************************************************
Shandon Fleming - CART 253-A
Exercise 02 - Dodge-em

**************************************************/
//Covid19 variable
let covid19 = {
  x: 0,
  y: 250,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 10,
  fill: {
    r: 250,
    g: 0,
    b: 0
  }
};

//clown face variable
let clownFace;

function preload() {
  clownFace = loadImage("assets/images/clown.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

//covid19 position and speed
  covid19.y = random(0,height);
  covid19.vx = covid19.speed;
}


function draw() {
  background(0);

  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

//covid19 conditional
  if (covid19.x > width) {
    covid19.x = 0,
    covid19.y = random(0,height);
  };
//covid 19 "circle"
  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  ellipse(covid19.x,covid19.y,covid19.size);

  image(clownFace,mouseX,mouseY,100,100);
};
