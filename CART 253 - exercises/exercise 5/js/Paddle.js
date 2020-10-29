class Paddle {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.vx = 1;
    this.speed = 2;
    this.y = height - this.height/2;
   }

   move() {
     this.x = this.x + this.vx;
     this.x = constrain(this.x,0,width);
  }

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


  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
