
let diccionario = ["PIEZA","CORAL","TEXTO","TORTA","HUESO","PIZZA","TAZON"]
let jugadas = 6
let verde = "#43AA8B"
const BUTTON = document.getElementById("guess-button")
BUTTON.addEventListener("click",intentar)
 
 
function obtenerPalabra() {
    let aleatorio = Math.floor(Math.random()*diccionario.length)
    return diccionario [aleatorio]
}

let palabraOculta = obtenerPalabra()

let incorrectas = ""
 
 
 function intentar(){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
   
   jugadas--
   if (jugadas==0){
       terminar("perdiste :(")
   } 

    if(palabraOculta == INTENTO) {
        terminar("GANASTEEEEEE")
    }
    
    let fila = document.createElement("div")
    fila.className = "row"
    console.log(fila)


        for (const i in INTENTO){ 
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO[i]
            fila.appendChild(letra)


            console.log(fila)
        if
    (INTENTO[i]==palabraOculta[i]) {
       
letra.style.background = verde

   } else if(palabraOculta.includes(INTENTO[i])) {
     
       letra.style.background = "#F2DD6E"

   } else {
      
       letra.style.background = "#495D63"
   } 
    }
    let grilla = document.getElementById("grid")
    grilla.appendChild(fila)
} 

function terminar(mensaje) {
const INPUT = document.getElementById("guess-input");
INPUT.disabled = true;
BUTTON.disabled = true;
let p =  document.getElementById("guesses")
    p.innerHTML = "<h1>"+ mensaje +"</h1>"    
}







