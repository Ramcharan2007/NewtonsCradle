class rope
{
    constructor(bodyA,pointB)
    {
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:150
        }
        this.pointB = pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        console.log(this.rope);
    }

    display()
    {
        var pointB = this.pointB;
        strokeWeight(4);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}