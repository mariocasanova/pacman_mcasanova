//const rows = prompt('Numero de Files:','');
//const columns = prompt('Numero de Columnes:','');
const FILES = 20;
const COLUMNES = 29;
const IMGSIZE = 32;
const FOOTER = 150;

class plataforma {
  constructor(){
  this.files = FILES;
  this.columnes = COLUMNES;
  //this.platform = [];
  this.platform = [
      ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
      ['*','-','-','-','-','*','*','-','&','*','*','&','-','-','-','-','-','&','*','*','&','-','*','*','-','-','-','-','*'],
      ['*','-','*','*','-','*','*','-','*','*','-','-','*','-','*','-','*','-','-','*','*','-','*','*','-','*','*','-','*'],
      ['*','-','-','*','-','*','*','-','-','*','-','*','*','-','*','-','*','*','-','*','-','-','*','*','-','*','-','-','*'],
      ['*','-','-','-','-','*','*','*','-','*','-','-','*','-','*','-','*','-','-','*','-','*','*','*','-','-','-','-','*'],
      ['*','*','*','-','-','-','-','-','-','-','-','-','-','-','/','-','-','-','-','-','-','-','-','-','-','-','*','*','*'],
      ['*','-','*','-','*','*','-','*','-','*','*','-','-','/','/','/','-','-','*','*','-','*','-','*','*','-','*','-','*'],
      ['*','-','*','-','*','-','-','*','-','*','*','-','*','*','/','*','*','-','*','*','-','*','-','-','*','-','*','-','*'],
      ['*','-','-','-','-','-','-','-','-','-','-','-','*','r','g','e','*','-','-','-','-','-','-','-','-','-','-','-','*'],
      ['*','-','-','-','&','-','-','-','-','-','-','-','*','/','k','/','*','-','-','-','-','-','-','-','&','-','-','-','*'],
      ['*','*','-','*','*','*','*','-','*','*','*','-','*','*','*','*','*','-','*','*','*','-','*','*','*','*','-','*','*'],
      ['/','/','-','-','-','-','*','-','*','&','*','-','-','-','-','-','-','-','*','&','*','-','*','-','-','-','-','/','/'],
      ['/','/','-','-','-','-','-','-','*','-','*','*','*','*','-','*','*','*','*','-','*','-','-','-','-','-','-','/','/'],
      ['*','*','-','*','*','*','*','-','*','-','-','-','-','*','-','*','-','-','-','-','*','-','*','*','*','*','-','*','*'],
      ['*','-','-','-','-','-','*','-','*','-','-','-','-','-','-','-','-','-','-','-','*','-','*','-','-','-','-','-','*'],
      ['*','-','-','-','-','-','-','-','-','-','-','*','*','*','-','*','*','*','-','-','-','-','-','-','-','-','-','-','*'],
      ['*','-','*','*','-','*','*','*','*','*','-','-','-','-','-','-','-','-','-','*','*','*','*','*','-','*','*','-','*'],
      ['*','-','*','*','-','*','-','-','-','*','-','-','*','*','-','*','*','-','-','*','-','-','-','*','-','*','*','-','*'],
      ['*','-','-','-','-','-','-','-','-','-','-','*','*','*','&','*','*','*','-','-','-','-','-','-','-','-','-','-','*'],
      ['*','*','*','*','*','*','*','*','*','*','*','*','/','/','+','/','/','*','*','*','*','*','*','*','*','*','*','*','*']
      ];
    };
  }

  /*this.platform = [
      ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
      ['*','/','/','/','/','/','/','/','/','*','*','/','/','/','/','/','/','/','*','*','/','/','/','/','/','/','/','*','*'],
      ['*','/','*','*','/','/','/','/','*','*','/','/','*','/','*','/','/','/','/','*','/','/','/','/','/','/','/','*','*'],
      ['*','/','*','*','*','/','/','/','/','*','/','*','*','/','*','/','/','/','/','*','/','/','/','/','/','/','/','*','*'],
      ['/','/','/','*','*','/','/','/','/','/','/','/','/','/','*','/','/','/','/','*','*','*','*','*','/','/','/','/','/'],
      ['/','*','*','/','*','*','*','*','*','/','*','*','*','/','/','*','*','/','/','*','/','/','/','/','/','*','*','*','*'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','/','*','/','*','/','*','/','/','/','/','/','*','/','/','*'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','/','*','/','*','/','*','/','/','/','/','/','*','/','/','*'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','g','*','/','*','/','*','/','/','/','/','/','*','/','/','*'],
      ['/','*','*','/','/','*','*','*','*','/','*','*','*','/','k','*','/','*','/','*','*','*','*','*','/','*','/','/','*'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','/','*','/','*','/','*','/','/','/','/','/','*','/','*','/'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','/','*','/','*','/','*','/','/','/','/','/','*','/','/','*'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','/','*','/','*','/','*','/','/','/','/','/','*','/','/','*'],
      ['/','*','/','*','/','*','/','/','/','/','*','/','/','*','/','*','/','*','/','*','/','/','/','/','/','*','/','/','*'],
      ['/','*','*','*','/','*','*','*','*','/','*','/','/','*','/','*','/','*','/','*','*','*','*','*','/','*','/','/','*'],
      ['/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','*','*'],
      ['*','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','*','/','/','/','/','/','/','/','*','*'],
      ['*','/','/','/','/','/','/','/','/','/','/','/','*','*','-','*','*','/','/','*','/','/','/','/','/','/','/','*','*'],
      ['*','/','/','/','/','/','/','/','/','/','/','*','*','*','&','*','*','*','/','/','/','/','/','/','/','/','/','*','*'],
      ['*','*','*','*','*','*','*','*','*','*','*','*','/','/','+','/','/','*','*','*','*','*','*','*','*','*','*','*','*']
      ];
    };
  }*/
  /*generarMapa(rows, cols, defaultValue){

          // Creates all lines:
          for(var i=0; i < rows; i++){

          // Creates an empty line
          //arr.push([]);
          this.platform.push([]);
          // Adds cols to the empty line:
          this.platform[i].push( new Array(cols));

          for(var j=0; j < cols; j++){
          // Initializes:
        /*  if Math..... == 0 ){
            this.mapai]j]=FOOD:
            numberfoods++;
          }
          food el fico
          */

          //this.platform[i][j] = Math.floor(Math.random() * 3);


          //arr[i][j] = defaultValue;
        //}//Final for petit
      //}//final for gran
      //for(i=0;i<rows;i++){
        //  this.mapa[i][0]= 1;
        //}

        //this.platform[this.files-1][this.columnes-1]=5;
  //}
