
function multiply(x, y){
    let antwoord = document.getElementById("nummertje");
    let input1 = document.getElementById("nummer1").value;

    let input2 = document.getElementById("nummer2").value;
   
    let answer = input1 * input2;
    console.log(answer);
    antwoord.innerText = answer;
}


function delen(x, y){
    let antwoord = document.getElementById("nummertje");
    let input1 = document.getElementById("nummer1").value;

    let input2 = document.getElementById("nummer2").value;
   
    let answer = input1 / input2;
    console.log(answer);
    antwoord.innerText = answer;
}


function plus(x, y){
    let antwoord = document.getElementById("nummertje");
    let input1 = document.getElementById("nummer1").value;

    let input2 = document.getElementById("nummer2").value;
   
    let answer = Number(input1) + Number(input2);
    console.log(answer);
    antwoord.innerText = answer;
}


function min(x, y){
    let antwoord = document.getElementById("nummertje");
    let input1 = document.getElementById("nummer1").value;

    let input2 = document.getElementById("nummer2").value;
   
    let answer = input1 - input2;
    console.log(answer);
    antwoord.innerText = answer;
}




