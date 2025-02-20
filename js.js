const button = document.getElementById("tablaButton");
const personalizador = document.getElementById("styles");
personalizador.style.display = "none";

button.addEventListener("click", event => {

    if(personalizador.style.display === "none"){
        button.textContent = "Personalizar"
    }
    else{
        personalizador.style.display = "block";
        button.textContent = "Hide"
    }
});


FALTA TERMINAR EL HIDE Y SHOW 