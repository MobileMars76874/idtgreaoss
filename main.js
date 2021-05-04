status = "";
D_C = "";

function  preload(){
D_C = loadImage("dog_cat.jpg");
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();

OBJ_D = ml5.objectDetector("cocossd", model_Loaded);
document.getElementById("S").innerHTML = "Status : detecting objects";
}

function model_Loaded(){
console.log("Model Loaded!");
status = "true";
OBJ_D.detect(D_C, gotresults);
}

function draw(){
image(D_C, 0, 0, 640, 420);
fill("#00ffff");
noFill();
stroke("#00ffff");
rect(30, 60, 450, 350);
stroke("#00f763");
rect(300, 90, 270, 320);
}

function gotresults(error, results){
if(error){
console.log("error");
}
else{
console.log(results);
}
}