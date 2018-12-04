class menjar extends gameObject{
  constructor(x,y){
    super(x,y);
    this.radius = 16;
  };
  show(){
    image(menjarImg,this.coordenadaX*IMGSIZE,this.coordenadaY*IMGSIZE);
  };
}
