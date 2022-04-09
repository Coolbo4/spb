var score =0;
var star1Img,star2Img,star3Img,star4Img,star5Img,rocket1Img;
var sp;

function preload(){
    star1Img = loadImage("star 1.png");
    star2Img = loadImage("star 2.png");
    star3Img = loadImage("star 3.png");
    star4Img = loadImage("star 4.png");
    star5Img = loadImage("star 5.png");
    rocket1Img = loadImage("rocket 1.png");
    sp = loadImage("sb.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight );
    star1 = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    star1.addImage(star1Img);
    star1.scale = 1;

    star2 = createSprite(50,100);
    star2.addImage(star2Img);
    star2.scale = 1;

    star3 = createSprite(12,24);
    star3.addImage(star3Img);
    star3.scale = 1;

    star4 = createSprite(67,244);
    star4.addImage(star4Img);
    star4.scale = 1;

    star5 = createSprite(83,93,5,5);
    star5.addImage(star5Img);
    star5.scale = 1;




}
function draw() {
    background(sp);
    

}
drawSprites();