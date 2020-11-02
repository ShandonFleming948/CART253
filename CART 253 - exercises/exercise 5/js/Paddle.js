class Paddle {

//assigned the characteristics of the paddle
  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.vx = 1;
    this.speed = 10;
    this.y = height - this.height/2;
   }

 //assigned movement and parameters
   move() {
     this.x = this.x + this.vx;
     this.x = constrain(this.x,0,width);
  }

//assigned keyboard controls
  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
    paddle.vx = -paddle.speed;
  }
    else if (keyIsDown(RIGHT_ARROW)) {
    paddle.vx = paddle.speed;
  }
    else {
    paddle.vx = 0;
  }
}

//display the paddle
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
