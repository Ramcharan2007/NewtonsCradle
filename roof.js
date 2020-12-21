class roof
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options); 
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
        var bodypos=this.body.position;		

			push()
			translate(bodypos.x, bodypos.y);
			rectMode(CENTER);
			strokeWeight(3);
			fill("white");
			rect(bodypos.x,bodypos.y,this.width, this.height);
			pop()
    }
}