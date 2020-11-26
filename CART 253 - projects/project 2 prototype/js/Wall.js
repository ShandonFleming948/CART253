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
}
