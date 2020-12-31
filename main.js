var mouseEvent = "empty";
var lastPositionx,lastPositiony ;
var radius = 4;


canvas=document.getElementById('myCanvas');

ctx= canvas.getContext("2d");
color="black";
widthOfLine=1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
color= document.getElementById("color").value;
widthOfLine= document.getElementById("widthOfLine").value;
radius = document.getElementById("radius").value;
mouseEvent= "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentPositionOfMousex= e.clientX- canvas.offsetLeft;
    currentPositionOfMousey= e.clientY- canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= widthOfLine;

    ctx.arc(currentPositionOfMousex, currentPositionOfMousey, radius, 0, 2*Math.PI);
    console.log("X= "+ lastPositionx + "and Y= " + lastPositiony);
    ctx.moveTo(lastPositionx, lastPositiony);
    console.log("currentPositionOfX= "+ currentPositionOfMousex + "and Y=" + currentPositionOfMousey);
    
    ctx.stroke();

    }
lastPositionx= currentPositionOfMousex;
lastPositiony= currentPositionOfMousey;


}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
mouseEvent= "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouseEvent= "mouseleave";

}


function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}








