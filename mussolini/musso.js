const casilla0=document.getElementById("0")
const casilla1=document.getElementById("1")
const casilla2=document.getElementById("2")
const casilla3=document.getElementById("3")
const casilla4=document.getElementById("4")
const casilla5=document.getElementById("5")
const casilla6=document.getElementById("6")
const casilla7=document.getElementById("7")
const casilla8=document.getElementById("8")
let casillas=[casilla0,casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8]
let turnojugador=true
let reiniciar=document.getElementById("reiniciar")

function marcarcasilla(){
    casillas.forEach(casilla=>casilla.addEventListener("click", function(){
        if (casilla.innerHTML=="") {
           casilla.innerHTML="❤️" 
           setTimeout(() => {
               juegoAleatorio()
           }, 500);
        }
    }))
}

function juegoAleatorio() {
    let casillasVacias = casillas.filter(vacia=>  vacia.textContent == "")
    let numeroAleatorio = Math.floor(Math.random() * casillasVacias.length);
    casillasVacias[numeroAleatorio].textContent = "☀️"
}

marcarcasilla()
function reiniciarb(){
    reiniciar.addEventListener("click",()=>{
        window.location.reload()
    })
}

reiniciarb()