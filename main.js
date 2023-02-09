canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=100;
backgroundImage="mars.jpg";
roverImage="rover.png";
roverx=10;
rovery=10;
function add() {
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage;

    roverImgTag=new Image();
    roverImgTag.onload=uploadrover;
    roverImgTag.src=roverImage;
}
function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverImgTag, roverx, rovery, roverwidth, roverheight);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38') {
        up();
        console.log("cima");
    }
    if(keyPressed=='40') {
        down();
        console.log("baixo");
    }
    if(keyPressed=='37') {
        left();
        console.log("esquerda");
    }
    if(keyPressed=='39') {
        right();
        console.log("direita");
    }
}
function up() {
    if(rovery >=0) {
        rovery=rovery-10;
        console.log("Quando a seta para cima é pressionada, x="+roverx+"| y="+rovery);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if(rovery <=400) {
        rovery=rovery+10;
        console.log("Quando a seta para cima é pressionada, x="+roverx+"| y="+rovery);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if(roverx >=0) {
        roverx=roverx-10;
        console.log("Quando a seta para cima é pressionada, x="+roverx+"| y="+rovery);
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if(roverx <=700) {
        roverx=roverx+10;
        console.log("Quando a seta para cima é pressionada, x="+roverx+"| y="+rovery);
        uploadBackground();
        uploadrover();
    }
}