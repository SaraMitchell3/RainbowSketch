var img;

function setup() {
img = loadImage("rainbowx.png");
createCanvas(842,629);
}

function draw() {
background(img);
ellipseMode(CENTER);
strokeWeight(1.5);
stroke(0);
fill(255,0,0);
ellipse(450,300,200,200);
stroke(255);
fill(255,127,0);
ellipse(450,300,150,150);
stroke(0);
fill(255,255,0);
triangle(362,250,450,400,537,250);
stroke(255);
fill(0,255,0);
triangle(362,350,450,200,537,350);
ellipseMode(CORNER);
stroke(0);
fill(0,0,255);
ellipse(400,250,100,100);
stroke(255);
fill(75,0,130);
ellipse(425,275,50,50);
strokeWeight(5);
stroke(148,0,211);
point(450,300);
}

function mousePressed() {
img.resize(842,629);
}