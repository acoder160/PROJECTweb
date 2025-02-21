const button = document.getElementById("tablaButton");
const personalizador = document.getElementById("styles");
personalizador.style.display = "none";

button.addEventListener("click", event => {

    if(personalizador.style.display === "none"){
        button.textContent = "Hide"
        personalizador.style.display = "block"
    }
    else{
        button.textContent = "Personalize"
        personalizador.style.display = "none";
    }
});
function changeRed(){
    document.getElementById("p").style.color = "red";
    document.getElementById("h1").style.color = "red";
}
function changeBlue(){
    document.getElementById("p").style.color = "blue";
    document.getElementById("h1").style.color = "blue";
}
function changeGreen(){
    document.getElementById("p").style.color = "green";
    document.getElementById("h1").style.color = "green";
}
function changeBrown(){
    document.getElementById("p").style.color = "brown";
    document.getElementById("h1").style.color = "brown";
}


function changeYellow(){
    document.getElementById("body").style.backgroundColor = "yellow"
}
function changeViolet(){
    document.getElementById("body").style.backgroundColor = "violet"
}
function changeCyan(){
    document.getElementById("body").style.backgroundColor = "cyan"
}
function changeWhite(){
    document.getElementById("body").style.backgroundColor = "white"
}



function changeArial(){
    document.getElementById("p").style.fontFamily = "Sans-serif";
    document.getElementById("h1").style.fontFamily = "Sans-serif";
}
function changeRobotic(){
    document.getElementById("p").style.fontFamily = "Serif";
    document.getElementById("h1").style.fontFamily = "Serif"
}
function changeTimes(){
    document.getElementById("p").style.fontFamily = "Monospace";
    document.getElementById("h1").style.fontFamily = "Monospace"
}
function changeSherif(){
    document.getElementById("p").style.fontFamily = "Fantasy";
    document.getElementById("h1").style.fontFamily = "Fantasy"
}

function change10(){
    document.getElementById("p").style.fontSize = "10px";
    document.getElementById("h1").style.fontSize = "20px";
}
function change13(){
    document.getElementById("p").style.fontSize = "13px";
    document.getElementById("h1").style.fontSize = "23px";
}
function change17(){
    document.getElementById("p").style.fontSize = "17px";
    document.getElementById("h1").style.fontSize = "26px";
}
function change20(){
    document.getElementById("p").style.fontSize = "20px";
    document.getElementById("h1").style.fontSize = "29px";
}