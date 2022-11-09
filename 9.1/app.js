// Get the modal
var modal = document.getElementById("myModal");
let input = document.getElementById("leeftijd");
let body = document.getElementById("body");
let h1 = document.getElementById("h1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function check_age(){
    if(input.value >= 18){
        body.style.backgroundColor= "green";
        h1.innerText= "oud genoeg";
        modal.style.display = "none";
    }
    else {
        body.style.backgroundColor= "red";
        h1.innerText=  "te jong";
        modal.style.display = "none";
    }
}
