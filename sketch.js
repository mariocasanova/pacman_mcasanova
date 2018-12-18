var rocaImg;
var menjarImg;
var pacmanImg;
var poderImg;
var vidaImg;
var videsImg = [];

var pacman;
var roques = [];
var podersmenjars = [];
var poders = [];
var menjars = [];
var plat;
var font;

function preload(){
  rocaImg = loadImage("imatges/roca.bmp");
  menjarImg = loadImage("imatges/food.png");
  pacmanImg = loadImage("imatges/pac.png");
  poderImg = loadImage("imatges/grape.png");
  font = loadFont("fonts/crackman.ttf");
  vidaImg = loadImage("imatges/vidamenys.png");
  videsImg = loadImage("imatges/videss.png");
};

function setup(){
  plat = new plataforma();
  createCanvas(plat.columnes*IMGSIZE,plat.files*IMGSIZE+FOOTER);
  //plat.generarMapa(plat.files,plat.columnes,0);
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
  textSize(30);
};

function draw(){
  background(0);
  textAlign(LEFT);
  drawWords(plat.files*IMGSIZE);
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

  for(var i=0; i < roques.length; i++){
    if(pacman.eatRoca(roques[i])){
      poders.splice(i,1);
    }
  };
};

function keyPressed(){
    if(keyCode == RIGHT_ARROW){
        pacman.move(0);
    }
    if(keyCode == LEFT_ARROW){
        pacman.move(2);
    }
    if(keyCode == DOWN_ARROW){
        pacman.move(1);
    }
    if(keyCode == UP_ARROW){
        pacman.move(3);
    }
};

function drawWords(x){

  text("🍎🍎🍎🍎",25,x+115);
  fill(255);
  textFont(font);
  text("Puntuació > "+pacman.score,25,x+55);

  image(menjarImg,765,x+25);
  fill(255);
  text("> "+menjars.length,800,x+55);

  image(poderImg,765,x+55);
  fill(255);
  text("> "+poders.length,800,x+85);

  fill(255);
  text("Vides > "+pacman.lives,25,x+85);


};

function puntuacio(){
  alert("Has perdut!  Puntuació total -> "+pacman.score);
  tryAgain=prompt('Vols tancar o tornar a jugar? 1=Tancar, 2=Jugar','');

  if(tryAgain == 1 || tryAgain == 2){
      if(tryAgain == 1){
        window.close();
      }else if(tryAgain == 2){
        location.reload();
        }
  }else{
    alert("Valor invalid. Tornes a jugar!.");
    location.reload();
  }
}
