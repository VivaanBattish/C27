class chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.005,
            length: 50,
        }

        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var bA = this.body.bodyA.position;
        var bB = this.body.bodyB.position;
        push();
        strokeWeight(5);
        line(bA.x,bA.y,bB.x,bB.y);
        pop();
    }
   
}