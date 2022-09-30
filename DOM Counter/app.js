let title = document.getElementById("title");
let Button = document.getElementById("btn");
let Button2 = document.getElementById("btn2");

let count = 0;

function clicker(){
    
    count += 1;
    title.innerText  = count + " keer geklikt";
    document.body.style.backgroundColor="blue";
    Button.style.backgroundColor = "red";
}


function clicker2(){
    count -= 1;
    title.innerText = count + "niet geklikt";
    document.body.style.backgroundColor="red";
    Button2.style.backgroundColor="blue";
}
