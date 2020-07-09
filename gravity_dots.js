class Gdot {
 constructor(x,y){
  this.pos = createVector(x,y);
  this.m = 1000;
 }

  show(){
   fill(0,255,0);
   ellipse(this.pos.x, this.pos.y, 15);
  }
 
}