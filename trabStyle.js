function filter() {
  var pFilter = document.getElementById("pFilter"),
      pFilterImgs = pFilter.getElementsByTagName("img");
  pFilterImgs[1].style.WebkitFilter = "blur(2px)";
  pFilterImgs[2].style.WebkitFilter = "sepia(1)";
}

function toggleFlex() {
  var pFlex = document.getElementById("pFlex"),
      children = pFlex.children,
  st = document.defaultView.getComputedStyle(pFlex,null).getPropertyValue("display");
  if (st == "flex" ) {
    pFlex.style.display = "block";
  }
  else if (st == "block") {
   pFlex.style.display = "flex" ;
   for (var i=0; i<children.length; i++) {
    if (i%2==0)children[i].style.flex = "1 2";
    else {children[i].style.flex = "1.5 1";}
  }
}
}


function mudarFlexBasis() {
  var pFlex = document.getElementById("pFlex"),
      pFlex2 = pFlex.children[1];
  pFlex2.style.flexBasis = (pFlex2.style.flexBasis == "150px" ? "0" : "150px");
}

function mudarFlexDir() {
  var pFlex = document.getElementById("pFlex"),
  st = document.defaultView.getComputedStyle(pFlex,null).getPropertyValue("flex-direction");
  pFlex.style.flexDirection = (st == "row" ? "column" : "row");
}

function mudarFlexGrow() {
  var pFlex = document.getElementById("pFlex"),
      pFlex2 = pFlex.children[1],
      st = document.defaultView.getComputedStyle(pFlex,null).getPropertyValue("flex-grow");
  if (pFlex2.style.flexGrow == "1.5")
    pFlex2.style.flexGrow = "1";
  else {
    pFlex2.style.flexGrow = "1.5";
  }
}

window.onload = function() {
  document.getElementById("bFiltros").addEventListener('click', function(){
    filter();
  }, false);
  document.getElementById("toggleFlex").addEventListener('click', function(){
    toggleFlex();
  }, false);
  document.getElementById("flexBasis").addEventListener('click', function(){
    mudarFlexBasis();
  }, false);
  document.getElementById("flexDir").addEventListener('click', function(){
    mudarFlexDir();
  }, false);
  document.getElementById("flexGrow").addEventListener('click', function(){
    mudarFlexGrow();
  }, false);
}
