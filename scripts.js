//hiding list items underneath ingredients,equipment and directions

// hiding ingredients
window.onload = hiddenIngredients();{
  document.getElementById('Ing').style.display ='none';
}

//hiding equipment
window.onload = hiddenEquipment();{
  document.getElementById('Equip').style.display ='none';
}

//hiding directions
window.onload = hiddenDirections(); {
  document.getElementById('Dir').style.display = 'none';
}

// making the lists visable on webpage

//making list button work
// Ingredients button
// for function use button onclick Name 
function ingredients() {
  var y = document.getElementById("Ing");
  if(y.style.display === "none"){
    y.style.display = "block";
  } else{
    y.style.display ="none";
  }
}

//Equipment button
// for function use button onclick Name 
  function equipment() {
  var y = document.getElementById("Equip");
  if(y.style.display === "none"){
    y.style.display = "block";
  } else{
    y.style.display ="none";
  }
}

// direction button
// for function use button onclick Name 
function directions() {
  var y = document.getElementById("Dir");
  if(y.style.display === "none"){
    y.style.display = "block";
  } else{
    y.style.display ="none";
  }
}
