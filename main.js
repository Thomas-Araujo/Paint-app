canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var color="yellow";
var widthOfline=1;
var lastPositionOfX,lastPositionOfY;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseEvent="mousedown";
    console.log (mouseEvent);
    console.log (color);
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";
    console.log (mouseEvent);
}
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseleave";
    console.log (mouseEvent);
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
current_position_of_X = e.clientX-canvas.offsetLeft;
current_position_of_Y = e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthOfline;
    ctx.moveTo(lastPositionOfX,lastPositionOfY);
    ctx.lineTo(current_position_of_X,current_position_of_Y);
    ctx.stroke();
}
lastPositionOfX=current_position_of_X;
lastPositionOfY=current_position_of_Y;
}