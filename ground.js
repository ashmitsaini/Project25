class Ground {
    constructor(x, y) {
      var options = {
          'isStatic': true
  
      }
      this.body = Bodies.rectangle(x, y, 800, 20, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rect(400, 490, 800, 20);
      pop();
    }
  };