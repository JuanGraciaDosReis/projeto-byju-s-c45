var miniNaveImg, navePrincImg, navePrinc2Img, backgroundImg;
var miniNave, navePrinc, navePrinc2, background;
var shidld, shield2;

function preload() {

    navePrincImg = loadImage("imagens/nave_principal.png");
    navePrinc2Img = loadImage("imagens/nave_principal2.png");
    miniNaveImg = loadImage("imagens/mini_nave.png");
    backgroundImg = loadImage("imagens/fundo_espaco.jpg");
    
}

function setup() {

    createCanvas(windowWidth, windowHeight);
  
    navePrinc = createSprite(width -200, height /2);
    navePrinc.addImage("miniNaveImg", navePrincImg);
    navePrinc
    navePrinc.scale = 0.2;

    navePrinc2 = createSprite(width -1200, height /2);
    navePrinc2.addImage("miniNaveImg", navePrinc2Img);
    navePrinc2
    navePrinc2.scale = 0.2;
    
    shield = createSprite(width - 350, height /2, 50, 630);
    shield.shapeColor ="#00BFFF";

    shield2 = createSprite(width - 1050, height /2, 50, 630);
    shield2.shapeColor ="#FF6347";

}

function draw() {
 
    naveMovimentation();

    background(backgroundImg);
    drawSprites();
}

function naveMovimentation() {

    if (keyIsDown(UP_ARROW)) {
      navePrinc.position.y -= 5;
      
    }

    if (keyIsDown(DOWN_ARROW)) {
        navePrinc.position.y += 5;
        
      }

}