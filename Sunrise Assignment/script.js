//Sunrise Drawing

//Setup canvas & graphics context
let cnv = document.getElementById("sunrise-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//HTML ELements
let cloudImg = document.getElementById("cloud-img");

//Sky
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300);

//Draw image
ctx.drawImage(cloudImg, 125, 100);
ctx.drawImage(cloudImg, 165, 80);

//Sun
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, 0, 2 * Math.PI);
ctx.fill();

//Ground
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);