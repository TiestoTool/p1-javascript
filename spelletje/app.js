let move = document.getElementById("blokje");
let titel = document.getElementById("titel");
let counter = 0;


function spel(){

 counter += 10;
 titel.innerText = counter;

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const square= document.querySelector('#square');
setInterval(() => {
   
   square.style.left= getRandom(0, (Math.random()) - (Math.random()))+'rem'; // 👈🏼 Horizontally
   square.style.top = getRandom(0, (Math.random()) - (Math.random()))+'rem'; // 👈🏼 Vertically
    
}, 1000); // every 1/2 second
}