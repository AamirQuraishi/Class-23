class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.0000001,
          }
        this.body = Bodies.rectangle(x,y,width,height,options);
  World.add(world,this.body);
   }
   display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
   }
}