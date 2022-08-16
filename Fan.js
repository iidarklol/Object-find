Status = " ";
img = " ";
objects = [];

function preload(){
img = loadImage("Celing Fan.jpg");
}

function setup(){
canvas = createCanvas(550,420);
canvas.center();
od = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("fanOB").innerHTML ="Status: Detecting Objects";
}

function draw(){
image(img,0,0,550,420);

for(i=0;i>objects.length;i++){
document.getElementById("fanOb").innerHTML = "Status: Objects Detected";
document.getElementById("FanObNo").innerHTML = "Objects Dectected:" + objects.length;
r = random(255);
g = random(255);
b = random(255);

percent = Math.floor(objects[i].confidence * 100);
      
fill(r,g,b);
text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y);
noFill();
stroke(r,g,b);
rect(objects[i].x - 57,objects[i].y,objects[i].width,objects[i].height);
}
}

function modelLoaded(){
    console.log("model loaded!");
    Status = true;
    od.detect(img,gotresults);
}

function gotresults(error,results){
 if(error){
console.log(error);
 } else{
     console.log(results);
     objects = results;
 }
}