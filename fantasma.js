class fantasma extends gameObject {
  constructor(x,y){
    super(x,y);
    this.frame = 0;
    this.direction = 0;
    this.radius = 16;
  };

  show(){
    image(pacmanImg, this.coordenadaX, this.coordenadaY, 32, 32, 32*this.frame++, 32*this.direction, 32, 32);﻿
    this.frame = (this.frame == 5)?0:this.frame;
  };

  eat(menjar){
    var distancia = dist(this.coordenadaX, this.coordenadaY, menjar.coordenadaX, menjar.coordenadaY);
    if(distancia < 16 + 16){
      return true;
    }else{
      return false;
  }
  };

  move(d){
    this.direction = d;
    if(this.direction == 0){
      this.coordenadaX += 32;
    }
    if(this.direction == 1){
      this.coordenadaY += 32;
    }
    if(this.direction == 2){
      this.coordenadaX -= 32;
    }
    if(this.direction == 3){
      this.coordenadaY -= 32;
    }
    };
};
