var svg=document.getElementById("vimage");
var clear_button=document.getElementById("clear");

var makeDot=function(x,y){
  var dot= document.createElementNS("http://www.w3.org/2000/svg","circle");
  dot.setAttribute("cx",x);
  dot.setAttribute("cy",y);
  dot.setAttribute("r",initDotRad);
  dot.setAttribute("fill","blue");
  return dot;
};
/*
var svg=document.getElementById("vimage");
var makeDot=function(x,y){
  var dot= document.createElementNS("http://www.w3.org/2000/svg","circle");
  dot.cx=x;
  dot.cy=y;
  dot.r=initDotRad;
  ="blue";
  return dot;
};
*/
