/**************************************************
Drawing an Alien
Shandon Fleming

Drawing an alien from scratch using code
**************************************************/

// setup()
//
//Creating background
function setup() {
  createCanvas(800, 480);

  background(52,171,235);

//Creating the body
  noStroke()

  fill(52,125,235);

  ellipse(400,450,300,200);

//Creating the head
  fill(168,235,52);

  ellipse(400,275,300,200);

//Creating the eye
  fill(250,250,250);

  ellipse(400,260,150,150);

  fill(39,83,112);

  ellipse(400,260,75,75);

//Creating the ears
  fill(168,235,52);

  ellipse(555,275,50,100);

  ellipse(245,275,50,100);

//Creating the mouth

}

// Description of draw() goes here.
function draw() {

}
