class Ball {
 constructor(i){
  this.pos = genPos();
  this.vel = genVel(2);
  this.acc = createVector(0,0);
  this.m = 0.1;
  this.cgdi= i;
   this.G = 5;
 }
  
 draw(){
  fill((this.cgdi / 175) * 255 + 20, (this.pos.x / width) * 255, (this.pos.y / height) * 255);
  ellipse(this.pos.x, this.pos.y, 15); 
 }

 move(){
    this.vel.add(this.acc);
    this.vel.limit(8);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
   if(this.pos.dist(gps[this.cgdi].pos) < 10){
     this.G = 0.48
   }
 }

 calculateForce(gdot){
   let force = p5.Vector.sub(gdot.pos, this.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let strength = this.G * (this.m * gdot.m) / distanceSq;
    force.setMag(strength);
    let a = p5.Vector.div(force, this.m);
   this.acc.add(a);
}

   appForce(){
   let force = p5.Vector.sub(gps[this.cgdi].pos, this.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let strength = this.G * (this.m * gps[this.cgdi].m) / distanceSq;
    force.setMag(strength);
    let a = p5.Vector.div(force, this.m);
   this.acc.add(a);
}
}


function genVel(top){
  v = createVector(round(random(-top,top)),round(random(-top,top)));
  return v;
}
function genPos(){
  let v = createVector(round(random(0,width)),round(random(0,height)));
  return v;
}