function Menjar(x,y){
    this.x = x;
    this.y = y;
    this.radius = 16;
    this.show = function(){
      image(menjarImg,this.x,this.y);
    }
}
