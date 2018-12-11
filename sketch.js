var rocaImg;
var menjarImg;
var pacmanImg;
var poderImg;

var pacman;
var roques = [];
var podersmenjars = [];
var poders = [];
var menjars = [];
var plat;

function preload(){
  rocaImg = loadImage("imatges/roca.bmp");
  menjarImg = loadImage("imatges/food.png");
  pacmanImg = loadImage("imatges/pac.png");
  poderImg = loadImage("imatges/grape.png");
};

function setup(){
  plat = new plataforma();
  createCanvas(930,638+FOOTER);
  textSize(30);
  for(var i = 0; i < plat.files; i++){
    for(var j = 0; j < plat.columnes; j++){
       if(plat.platform[i][j] == '*')
         roques.push(new roca(j,i));
       if(plat.platform[i][j] == '-')
         menjars.push(new menjar(j,i));
       if(plat.platform[i][j] == '+')
         pacman = (new fantasma(j * IMGSIZE, i * IMGSIZE));
       if(plat.platform[i][j] == '&')
         poders.push(new poder(j,i));
    }
  }
};

function draw(){
  background(0);
  for(var i=0; i < roques.length; i++){
    roques[i].show();
  };
  for(var i=0; i < menjars.length; i++){
    menjars[i].show();
  };
  for(var i=0; i < poders.length; i++){
    poders[i].show();
  };
  pacman.show();
  for(var i=0; i < menjars.length; i++){
    if(pacman.eatMenjar(menjars[i])){
      menjars.splice(i,1);
    }
  };

  for(var i=0; i < poders.length; i++){
    if(pacman.eatPoder(poders[i])){
      poders.splice(i,1);
    }
  };

};

function keyPressed(){
    if(keyCode == RIGHT_ARROW){
      if(plat.platform[pacman.coordenadaY/32][pacman.coordenadaX/32 + 1] != '*'){
        pacman.move(0);
      }
    }
    if(keyCode == LEFT_ARROW){
      if(plat.platform[pacman.coordenadaY/32][pacman.coordenadaX/32 - 1] != '*'){
        pacman.move(2);
      }
    }
    if(keyCode == DOWN_ARROW){
      if(plat.platform[pacman.coordenadaY/32 + 1][pacman.coordenadaX/32] != '*'){
        pacman.move(1);
      }
    }
    if(keyCode == UP_ARROW){
      if(plat.platform[pacman.coordenadaY/32 - 1][pacman.coordenadaX/32] != '*'){
        pacman.move(3);
      }
    }
};

function drawWords(x){
  fill(255);
  text("Puntuació - "+pacman.score,0,x);

  fill(255);
  text("Vides - "+pacman.lives,0,x);
};
