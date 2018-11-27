var rocaImg;
var menjarImg;
var plat;
var roques = [];
var menjars = [];
function preload(){
  rocaImg = loadImage("imatges/roca.bmp");
  menjarImg = loadImage("imatges/food.png");
}

function setup(){
  createCanvas(930,640);
  plat = new Plataforma();
  for(var i = 0; i < plat.files; i++){
    for(var j = 0; j < plat.columnes; j++){
       if(plat.plataforma[i][j] == '*')
         roques.push(new Roca(j * 32, i * 32));
       if(plat.plataforma[i][j] == '-')
        menjars.push(new Menjar(j * 32, i * 32));
    }
  }
}

function draw(){
  background(0);
  for(var i=0; i < roques.length; i++){
    roques[i].show();
  }
  for(var i=0; i < menjars.length; i++){
    menjars[i].show();
  }
}
