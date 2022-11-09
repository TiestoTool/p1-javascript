let move = document.getElementById("blokje");
let titel = document.getElementById("titel");
let counter = 0;


function spel(){
 move.style.left = "30rem"
 counter += 10;
 titel.innerText = counter;
}

