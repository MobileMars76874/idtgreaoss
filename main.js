status = "";
D_C = "";
objects = [];

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
if(status != ""){
for(i = 0; i < objects.length; i++){
document.getElementById("S").innerHTML = "Status : Detected objects";   
fill("#00ffff");
percent = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"", objects[i].x + 10, objects[i].y + 10);
noFill();
stroke("#00ffff");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}

function gotresults(error, results){
if(error){
console.log("error");
}
else{
console.log(results);
objects = results;
}
}