class dustbin {

    constructor(x,y,r){
        var options ={
            isStatic=false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
    
    }
    this.x=x
    this.y=y
    this.r=r
    this.Body=Bodies.rectangle(this.x,this.y,this.r/2,options) 
    World.add(world,this.Body)
    
    }
    display(){
        var pos=this.Body.position 
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    
    
    }
    