const casilla0 = document.getElementById("0");
const casilla1 = document.getElementById("1");
const casilla2 = document.getElementById("2");
const casilla3 = document.getElementById("3");
const casilla4 = document.getElementById("4");
const casilla5 = document.getElementById("5");
const casilla6 = document.getElementById("6");
const casilla7 = document.getElementById("7");
const casilla8 = document.getElementById("8");
let gameOver= false
let p1 = true
const contVictoriasCora = document.getElementById("victoriasCora");
const contVictoriasSol = document.getElementById("victoriasSol");

let victoriasCorazon = parseInt(localStorage.getItem("victoriasCorazon")) || 0;
let victoriasS = parseInt(localStorage.getItem("victoriasSol")) || 0;
let casillas = [casilla0, casilla1, casilla2, casilla3, casilla4, casilla5, casilla6, casilla7, casilla8];
let turnojugador = true;
let reiniciar = document.getElementById("reiniciar");

contVictoriasCora.textContent = victoriasCorazon;
contVictoriasSol.textContent = victoriasS;

const posGanadores = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function marcarcasilla() {
    casillas.forEach(casilla => casilla.addEventListener("click", function () {
        p1 = true
        if (casilla.innerHTML === "" && !gameOver) {
            casilla.innerHTML = "❤️";
            setTimeout(() => {
                juegoAleatorio();
            }, 500);
            detectarGanador();
        }
    }));
}

function juegoAleatorio() {
    if(!gameOver && p1){
    let casillasVacias = casillas.filter(vacia => vacia.textContent === "");
    if (casillasVacias.length > 0) {
        let numeroAleatorio = Math.floor(Math.random() * casillasVacias.length);
        casillasVacias[numeroAleatorio].textContent = "☀️";
        detectarGanador()
    }
    }}

function reiniciarb() {
    reiniciar.addEventListener("click", () => {
        casillas.forEach(casilla => casilla.innerHTML = "");
        localStorage.setItem("victoriasCorazon", 0);
        localStorage.setItem("victoriasSol", 0);
        contVictoriasCora.innerHTML = 0;
        contVictoriasSol.innerHTML = 0;
        victoriasCorazon = 0;
        victoriasS = 0;
    });
}

function detectarGanador() {
    for (const posicion of posGanadores) {
        let [pos1, pos2, pos3] = posicion;
        if (casillas[pos1].textContent !== "" && casillas[pos1].textContent === casillas[pos2].textContent && casillas[pos1].textContent === casillas[pos3].textContent) {
            if (casillas[pos1].textContent === "❤️") {
                let contCoraInt = parseInt(contVictoriasCora.innerHTML)
                contCoraInt++;
                console.log("El cora int",contCoraInt);
                localStorage.setItem("victoriasCorazon", contCoraInt);
                contVictoriasCora.innerHTML = contCoraInt
                gameOver = true
                setTimeout(() => {
                   reiniciarJuego()
                }, 300);
                return
            } else if (casillas[pos1].textContent === "☀️") {
                victoriasS+=1;
                localStorage.setItem("victoriasSol", victoriasS);
                contVictoriasSol.innerHTML = victoriasS;
                gameOver = true
                setTimeout(() => {
                    reiniciarJuego()
                 }, 300);
                 return
            }
        }
    }
}

function reiniciarJuego() {
    casillas.forEach(casilla => casilla.innerHTML = "");
    gameOver = false
    p1=false
    marcarcasilla() 
}

marcarcasilla();
reiniciar.addEventListener("click",reiniciarb)