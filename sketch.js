var rocaImg;
var menjarImg;
var poderImg;
var pacmanImg;
var pacmanblueImg;

var redGhostImg;
var greenGhostImg;
var pinkGhostImg;
var purpleGhostImg;

var roca;
var plat;

var roques = [];
var menjars = [];
var poders = [];
var fantasmes = [];
var pacman;
var pacmanblue;

function preload(){
  rocaImg = loadImage("imatges/roca.bmp");
  menjarImg = loadImage("imatges/food.png");
  poderImg = loadImage("imatges/grape.png");
  pacmanImg = loadImage("imatges/pac.png");
  redGhostImg = loadImage("imatges/red.png");
  greenGhostImg = loadImage("imatges/green.png");
  pinkGhostImg = loadImage("imatges/pink.png");
  purpleGhostImg = loadImage("imatges/purple.png");
  pacmanblueImg = loadImage("imatges/pacblue.png");
}

function setup() {
  createCanvas(930,640);
  //roca = new Roca(200,300);
  plat = new Plataforma();
  for(var i = 0; i < plat.files; i++){
    for(var j = 0; j < plat.columnes; j++){
      if(plat.plataforma[i][j] == '*')
        roques.push(new Roca(j * 32, i * 32));
      if(plat.plataforma[i][j] == '-')
        menjars.push(new Menjar(j * 32, i * 32));
      if(plat.plataforma[i][j] == '&')
        poders.push(new Poder(j * 32, i * 32));
      if(plat.plataforma[i][j] == '+')
        pacman = (new Pacman(j * 32, i * 32));

      if(plat.plataforma[i][j] == 'r')
        fantasmes.push(new Fantasma(j * 32, i * 32,redGhostImg));
      if(plat.plataforma[i][j] == 'g')
        fantasmes.push(new Fantasma(j * 32, i * 32,greenGhostImg));
      if(plat.plataforma[i][j] == 'e')
        fantasmes.push(new Fantasma(j * 32, i * 32,purpleGhostImg));
      if(plat.plataforma[i][j] == 'k')
        fantasmes.push(new Fantasma(j * 32, i * 32,pinkGhostImg));
    }
  }
}
function draw() {
  background(0);
  for(var i=0; i < roques.length; i++){
    roques[i].show();
  }
  for(var i=0; i < menjars.length; i++){
    menjars[i].show();
  }
  for(var i=0; i < poders.length; i++){
    poders[i].show();
  }
  for(var i=0; i < fantasmes.length; i++){
    fantasmes[i].show();
  }
  pacman.show();
  for(var i=0; i < menjars.length; i++){
    if(pacman.eat(menjars[i])){
      menjars.splice(i,1);
    }
  }

  for(var i=0; i < poders.length; i++){
    if(pacman.eat(poders[i])){
      poders.splice(i,1);
    }
  }
}

function keyPressed(){
    if(keyCode == RIGHT_ARROW){
      if(plat.plataforma[pacman.y/32][pacman.x/32 + 1] != '*'){
        pacman.move(0);
      }
    }
    if(keyCode == LEFT_ARROW){
      if(plat.plataforma[pacman.y/32][pacman.x/32 - 1] != '*'){
        pacman.move(2);
      }
    }
    if(keyCode == DOWN_ARROW){
      if(plat.plataforma[pacman.y/32 + 1][pacman.x/32] != '*'){
        pacman.move(1);
      }
    }
    if(keyCode == UP_ARROW){
      if(plat.plataforma[pacman.y/32 - 1][pacman.x/32] != '*'){
        pacman.move(3);
      }
    }
}
