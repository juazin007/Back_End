let xBird = 30
let yBird = 330

function mostrarMascote(params) {
    image(bird, xBird, yBird, 60, 40);

}
function  jogarBaixo(params) {
if (yBird)  {
    yBird +=3
    
}
}


function movimentoBird() {
    if (keyIsDown(UP_ARROW)) {
        yBird -= 15;
        bird = loadImage("img/passaro3.png")

    }

}

function morte() {
    
    if (yBird < 0) {
        yBird = 10;
    }

    if (yBird > 600) {
        
        yBird = 330
        
    }
    if (yBird > 600) {
        
    } else {
        re
    }
    
}