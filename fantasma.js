function Fantasma(x,y,img){
  this.x = x;
  this.y = y;
  this.img = img;
  this.direction = 0;
  this.radius = 16;

  this.show = function(){
    image(img,this.x,this.y,32,32,0,0,32,32);﻿
  }

  this.move = function(d){

  }
}
