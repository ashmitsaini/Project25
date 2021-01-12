class Dustbin {
    constructor(x, y) {
      var options = {
          'isStatic': true
  
      }
      this.bottombody = Bodies.rectangle(x, y + 30, 140, 20, options);
      this.leftbody = Bodies.rectangle(x-60, y, 20, 80, options);
      this.rightbody = Bodies.rectangle(x+60, y, 20, 80, options);

      this.image = loadImage("images/dustbingreen.png");
      
      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
    }
    display(){
      var pos1 =this.bottombody.position;
      var pos2 =this.leftbody.position;
      var pos3 =this.rightbody.position;

      push();
      translate(pos1.x, pos1.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 140, 20);
      pop();

      push();
      translate(pos2.x, pos2.y);
      rectMode(CENTER);
      rect(0, 0, 20, 80);
      pop();

      push();
      translate(pos3.x, pos3.y);
      rectMode(CENTER);
      rect(0, 0, 20, 80);
      pop();
    }
  };