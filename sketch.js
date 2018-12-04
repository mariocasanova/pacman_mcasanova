var rocaImg;
var menjarImg;
var pacmanImg;
var pacman;
var roques = [];
var menjars = [];
var plat = new plataforma();

function preload(){
  rocaImg = loadImage("imatges/roca.bmp");
  menjarImg = loadImage("imatges/food.png");
  pacmanImg = loadImage("imatges/pac.png");
};

function setup(){
  createCanvas(930,638);
  for(var i = 0; i < plat.files; i++){
    for(var j = 0; j < plat.columnes; j++){
       if(plat.platform[i][j] == '*')
         roques.push(new roca(j,i));
       if(plat.platform[i][j] == '-')
         menjars.push(new menjar(j,i));
       if(plat.platform[i][j] == '+')
         pacman = (new fantasma(j * IMGSIZE, i * IMGSIZE));
    }
  }
};

function draw(){
  background(0);
  for(var i=0; i < roques.length; i++){
    roques[i].show();
  }
  for(var i=0; i < menjars.length; i++){
    menjars[i].show();
  }
  pacman.show();
};
