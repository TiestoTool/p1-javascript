let title = document.getElementById("title");
let Button = document.getElementById("btn");


let count = 0;

function clicker(){
    
    count += 1;
    title.innerText  = count + " keer geklikt";

    if (count > 10){
        count = 0;
        title.innerText  = count + " keer geklikt";
    }
}
