class Ground{
    constructor(){
       var ground_options={isStatic:true}
       this.body = Bodies.rectangle(400,390,800,50,ground_options)
       World.add(world,this.body)
    } 
    display(){
       rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,800,50)
    }
   }