
let Fundo;
let bird;  
let imagensCanos;
let retry;



function preload() {    
    Fundo = loadImage("img/fundo.png");//img bg/fundo/mapa
    bird = loadImage("img/passaro1.png")
    cano1 = loadImage("img/cano_baixo.png")
    cano2 = loadImage("img/cano_baixo_maior.png")
    cano3 = loadImage("img/cano_topo_maior.png")
    cano4 = loadImage("img/cano_topo_maior.png")
    retry = loadImage("img/game_over.png")



    imagensCanos = [cano1, cano2, cano3,cano4]
}

