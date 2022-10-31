const open = document.querySelector(".open");
const closed = document.querySelector(".closed");



console.log(closed);


function openFace(){
   if(open.classList.contains('active')) {
    open.classList.remove("active");
    closed.classList.add("active");

   }
    
}

function closedFace(){
    if(closed.classList.contains('active')) {
    closed.classList.remove("active");
    open.classList.add("active");
 }
}

openFace();
closedFace();
