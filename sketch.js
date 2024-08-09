let palavra;

function setup() {
  createCanvas(700, 700);
   palavra = dormin();
}

function draw() {
  wander();
  seifer();
  dormin();
}

function wander(){
  background("white");
  fill ("blue");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function seifer(){
  let maximo = width;
  let minimo = 0 ;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}

function dormin(){
 let palavras = [" o", "povo", "quer", "comer", "bolsonaro"];
  return random(palavras);
}

  
  
  
  
