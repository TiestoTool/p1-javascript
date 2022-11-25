let move = document.getElementById("blokje");
let titel = document.getElementById("titel");
let body = document.getElementById("body");
let counter = 0;

let position = 0;

function spel() {
  counter += 10;
  titel.innerText = counter;

  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const square = document.querySelector("#square");
//   setInterval(() => {
//     square.style.left = getRandom(0, Math.random() - Math.random()) + "rem"; // 👈🏼 Horizontally
//     square.style.top = getRandom(0, Math.random() - Math.random()) + "rem"; // 👈🏼 Vertically
//   }, 1000); // every 1/2 second
 }

function grueMove(){
   if(position >= window.innerWidth) {
      position = 0
   }
   position += 50;
   square.style.left =  position + "px";
}
setInterval(grueMove, 1000);
//setInterval(grueMove2, 500);

function grueMove2(){
   if(position >= window.innerHeight) {
      position = 0
   }
   position += 50;
   square.style.top = position + "px";
}
