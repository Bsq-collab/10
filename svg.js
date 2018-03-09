/*
  Team wbbc - Bayan Berri and Charles Weng
  SoftDev2 pd7
  #10: Objectification
  2018-3-9
*/

/*
  ==============================================================================
                                  Variables/Initiation
  ==============================================================================
*/

// the svg element
const pic = document.getElementById('vimage');
const h = pic.getAttribute("height");
const w = pic.getAttribute("width");
var radius = 30;
var fColor = "red";
var fColor2 = "green";
var sColor = "black";



/*
  ==============================================================================
                                  Functions
  ==============================================================================
*/

// clears entire pic
const clear = function(){
  // while there are children, remove the first child
  while(pic.children.length)
    pic.firstChild.remove();
}

// return a circle object
const circle = function(x, y){
  // inialize
  var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  // display attributes
  cir.setAttribute("cx", x);
  cir.setAttribute("cy", y);
  cir.setAttribute("r", radius);
  cir.setAttribute("fill", fColor);
  cir.setAttribute("stroke", sColor);

  // accessor functions
  cir.getXY = function(){
    return [this.getAttribute("cx"), this.getAttribute("cy")];
  };
  cir.getR = function(){
    return this.getAttribute("r");
  };
  cir.getfColor = function(){
    return this.getAttribute("fill");
  };
  cir.getsColor = function(){
    return this.getAttribute("stroke");
  };

  // mutator functions
  cir.setXY = function(x, y){
    this.setAttribute("cx", x);
    this.setAttribute("cy", y);
  };
  cir.setR = function(r){
    this.setAttribute("r", r);
  };
  cir.setfColor = function(fC){
    this.setAttribute("fill", fC);
  };
  cir.setsColor = function(sC){
    this.setAttribute("stroke", sC);
  };

  // display function
  cir.display = function(){
    pic.appendChild(this);
  }

  // click function
  cir.click = function(e){
    e.stopPropagation();
    // check this circcle is the second color
    if (this.getfColor() == fColor2){
      this.setfColor(fColor);
      this.setXY(Math.random()*w, Math.random()*h);
      return;
    }
    // else change to second color
    this.setfColor(fColor2);
  }

  cir.addEventListener("click", cir.click);
  cir.display();

  return cir;
}


/*
  ==============================================================================
                                  Final Setup
  ==============================================================================
*/

// starting listener
pic.addEventListener("click", function(e){
  circle(e.offsetX, e.offsetY);
})
document.getElementById("clear").addEventListener("click", clear);
