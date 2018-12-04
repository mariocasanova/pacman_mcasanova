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

  eatMenjar(menjar){
    var distancia = dist(this.coordenadaX, this.coordenadaY, menjar.coordenadaX*IMGSIZE, menjar.coordenadaY*IMGSIZE);
    if(distancia < this.radius){
      return true;
    }else{
      return false;
    }
  };

  eatPoder(poder){
    var distancia = dist(this.coordenadaX, this.coordenadaY, poder.coordenadaX*IMGSIZE, poder.coordenadaY*IMGSIZE);
    if(distancia < this.radius){
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
