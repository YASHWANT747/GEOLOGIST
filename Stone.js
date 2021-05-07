class Stone {
    constructor (x,y,height,width)
    {
        var options = {
        restitution : 0.3,
        friction : 5,
        density : 1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
    var stonepos = this.body.position;
    rectMode(CENTER);
    strokeWeight(3);
    stroke ("white");
    fill ("black");
    rect(stonepos.x ,stonepos.y, this.width, this.height);
    }
    };
