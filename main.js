D_C = "";

function  preload(){
D_C = loadImage("dog_cat.jpg");
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
}

function draw(){
image(D_C, 0, 0, 640, 420);
fill("#00ffff");
nofill();
stroke("#00ffff");
rect(30, 60, 450, 350);
}