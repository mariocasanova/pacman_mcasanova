class roca extends gameObject{
  constructor(x,y){
    super(x,y);
  };
  show(){
    image(rocaImg,this.coordenadaX*IMGSIZE,this.coordenadaY*IMGSIZE);
  };
}
