class poder extends gameObject{
  constructor(x,y){
    super(x,y);
    this.radius = 16;
  };

  show(){
    image(poderImg,this.coordenadaX*IMGSIZE,this.coordenadaY*IMGSIZE);
  };

};
