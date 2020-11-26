class Wall
{
    constructor(config)
    {
        this.startX1 = config.x1;
        this.startY1 = config.y1;
        this.x1 = config.x1;
        this.y1 = config.y1;
        this.x2 = config.x2;
        this.y2 = config.y2;
        this.dY = config.dY;
        this.vx = config.vx;
        this.vy = config.vy;
    }

    display()
    {
      push()
      stroke(0);
      strokeWeight(10);
      line(this.x1, this.y1, this.x2, this.y2);
      pop()
    }

    move()
    {
    this.x1 = this.x1 + this.vx;
    this.x2 = this.x2 + this.vx;

    this.y1 = this.y1 + this.vy;
    this.y2 = this.y2 + this.vy;
    }

    bounce()
    {
    // // Is this wall moving downward first? (positive dY)
    if (this.dY > 0) {
      // Is the wall beyond the distance, or back at the starting position?
      if (this.y1 > this.startY1 + this.dY || this.y1 < this.startY1) {
        // Reverse velocity
        this.vx = -this.vx;
        this.vy = -this.vy;
      }
    }
    // // Or is it moving upward first? (negative dY)
    else if (this.dY < 0) {
      // Is the wall beyond the distance, or back at the starting position?
      if (this.y1 < this.startY1 + this.dY || this.y1 > this.startY1) {
        // Reverse velocity
        this.vx = -this.vx;
        this.vy = -this.vy;
      }
    }
  }
}
