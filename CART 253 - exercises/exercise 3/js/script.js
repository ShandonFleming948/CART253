/**************************************************
Exercise 3 - Shandon Fleming

Use your keyboard to control one circle and catch circle2
**************************************************/
//Circle 1 and 2
let circle1 = {
  x: 150,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};

let circle2 = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let state = `title`; //names can be: title, simulation, win, lose

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
  fill(200,100,200);
  textAlign(CENTER,CENTER);
  text(`Catch your soulmate before it's too late!`,width/2,height/2);
  pop();
}

function simulation() {
  handleInput()
  movement()
  offScreen()
  overlap()
  displayCircles()
}

function win() {
  push();
  textSize(24);
  fill(200,100,200);
  textAlign(CENTER,CENTER);
  text(`Congratulations, you found your soulmate!`,width/2,height/2);
  pop();
}

function lose() {
  push();
  textSize(24);
  fill(200,100,200);
  textAlign(CENTER,CENTER);
  text(`You didn't meet your soulmate :(`,width/2,height/2);
  pop();
}

//keyboard controls
function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    circle1.vx = -circle1.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circle1.vx = circle1.speed;
  }
  else {
    circle1.vx = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    circle1.vy = -circle1.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    circle1.vy = circle1.speed;
  }
  else {
    circle1.vy = 0;
  }
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
      state = `lose`;
    }
}

function overlap() {
  //if circles overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = `win`;
  }
}

function displayCircles() {
  //display the circles
    ellipse(circle1.x,circle1.y,circle1.size);
    ellipse(circle2.x,circle2.y,circle2.size);
}

//when the mouse is clicked
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
