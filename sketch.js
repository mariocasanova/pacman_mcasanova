var rocaImg;
var purpleGhostImg;
var roca;
var plat;
var roques = [];

function preload(){
  rocaImg = loadImage("imatges/roca.bmp");
}

function setup() {
  createCanvas(930,640);
  //roca = new Roca(200,300);
  plat = new Plataforma();
  for(var i = 0; i < plat.files; i++){
    for(var j = 0; j < plat.columnes; j++){
      if(plat.plataforma[i][j] == '*')
        roques.push(new Roca(j * 32, i * 32));
    }
  }
}
function draw() {
  background(0);
  for(var i=0; i < roques.length; i++){
    roques[i].show();
  }
}
