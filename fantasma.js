class fantasma extends gameObject {
  constructor(x,y){
    super(x,y);
    this.frame = 0;
    this.direction = 0;
    this.radius = 16;
  };

  show(){
    image(pacmanImg, this.coordenadaX , this.coordenadaY , 32 , 32 , 32*this.frame++ , 32*this.direction  ,32  , 32);﻿
    this.frame = (this.frame == 5)?0:this.frame;
  };

  eat(menjar){
    var distancia = dist(this.coordenadaX,this.coordenadaY,menjar.coordenadaX,menjar.coordenadaY);
    if(distancia < this.radius + menjar.radius)
      return true;
    return false;
  };
}
