// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

//Global Variables
let xValue = 0;
let yValue = 0;
// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

//Windows Left Middle Section
ctx.fillStyle = "white";
xValue = 20;
for (n = 1; n <= 4; n++) {
  xValue += 22;
  ctx.fillRect(xValue, 205, 10, 8);
  ctx.fillRect(xValue, 230, 10, 10);
  ctx.fillRect(xValue, 255, 10, 10);
  ctx.fillRect(xValue, 280, 10, 10);
  ctx.fillRect(xValue, 305, 10, 10);
  ctx.fillRect(xValue, 330, 10, 10);
}

//Windows Left Building Base
ctx.fillStyle = "white";
yValue = 330;
for (n = 1; n <= 6; n++) {
  yValue += 44;
  ctx.fillRect(20, yValue, 110, 20);
}

//Windows Right Building Base
ctx.fillStyle = "white";
xValue = 145;
for (n = 1; n <= 5; n++) {
  xValue += 25;
  ctx.fillRect(xValue, 120, 10, 495);
}