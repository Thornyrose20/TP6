//hiding list items underneath ingredients,equipment and directions and toggling them

// toggle the ingredient box
window.onload = function() {
  document.querySelector("#box1").onclick = function (){
    document.querySelector("#box1 ul").classList.toggle("showMe");
  }
  
  //toggle the equipment box
 window.onload = function(){
   document.querySelector("#box2").onclick = function(){
     document.querySelector("box2 ul").classList.toggle("showMe");
   }
 } 
  
  
  //toggle the directions box
  window.onload = function(){
    document.querySelector("#box3").onclick = function(){
      document.querySelector("#box3 ul").classList.toggle("ShowMe");
    }
  }
}
