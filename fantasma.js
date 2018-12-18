class fantasma extends gameObject {
  constructor(x,y){
    super(x,y);
    this.frame = 0;
    this.direction = 0;
    this.radius = 16;
    this.score = 0;
    this.lives = 3;
  };

  show(){
    image(pacmanImg, this.coordenadaX, this.coordenadaY, 32, 32, 32*this.frame++, 32*this.direction, 32, 32);﻿
    this.frame = (this.frame == 5)?0:this.frame;

      if(this.coordenadaX==29*IMGSIZE && this.coordenadaY==12*IMGSIZE){
       this.coordenadaX=this.coordenadaX-(29*IMGSIZE);
      }
      if(this.coordenadaX==29*IMGSIZE && this.coordenadaY==11*IMGSIZE){
        this.coordenadaX=this.coordenadaX-(29*IMGSIZE);
      }
      if(this.coordenadaX==0-IMGSIZE && this.coordenadaY==12*IMGSIZE){
        this.coordenadaX=this.coordenadaX+(29*IMGSIZE);
      }
      if(this.coordenadaX==0-IMGSIZE && this.coordenadaY==11*IMGSIZE){
        this.coordenadaX=this.coordenadaX+(29*IMGSIZE);
      }
  };

  recolocar(){
    if(this.direction === 0){
      this.coordenadaX -= IMGSIZE;
    }else if(this.direction === 1){
      this.coordenadaY -= IMGSIZE;
    }else if(this.direction === 2){
      this.coordenadaX += IMGSIZE;
    }else if(this.direction === 3){
      this.coordenadaY += IMGSIZE;
    }
  };

  eatMenjar(menjar){
    var distancia = dist(this.coordenadaX, this.coordenadaY, menjar.coordenadaX*IMGSIZE, menjar.coordenadaY*IMGSIZE);
    if(distancia < this.radius){
      this.score = this.score +1;
      return true;
    }else{
      return false;
    }
  };

  eatPoder(poder){
    var distancia = dist(this.coordenadaX, this.coordenadaY, poder.coordenadaX*IMGSIZE, poder.coordenadaY*IMGSIZE);
    if(distancia < this.radius){
      this.score = this.score +10;
      this.lives = this.lives +1;
      return true;
    }else{
      return false;
    }
  };

  eatRoca(roca){
    var distancia = dist(this.coordenadaX, this.coordenadaY, roca.coordenadaX*IMGSIZE, roca.coordenadaY*IMGSIZE);
    if(distancia < this.radius){
      this.lives = this.lives -1;
      this.recolocar();
      if(this.lives == 0){
        puntuacio();
      }
      return true;
    }else{
      return false;
    }
  };

  eatAll(menjar,poder,roca){
    if(this.menjar == 0 && this.poder == 0 && this.roca == 0){
      alert("winner");
    }
  }
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
