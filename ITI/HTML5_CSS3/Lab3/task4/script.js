var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var startX = 250;
var startY = 250;

ctx.beginPath();
ctx.rect(startX, startY, 100, 20);
ctx.fillStyle = "transparent";
ctx.fill();


var angle = 0;
setInterval(function(){
    drawRect(startX, startY, 100, 20, angle);
    angle+=15;
},500)

function drawRect(x, y, width, height, degrees) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    ctx.rect(-width , -height / 2, width, height);

    ctx.fillStyle = "blue";
    ctx.globalAlpha = 0.5;
    ctx.fill();
    ctx.restore();
}