//Ejercicio 1

const lista = []
const ul = document.getElementById("ul")
ul.textContent = "Lista aleatoria desordenada"

function aleatorio(){
    for(let i = 1; i < 5; i++){
        numero =  Math.floor(Math.random()* 100);
        lista.push(numero)
        const li = document.createElement("li")
        const contenido = document.createTextNode(numero)
        ul.appendChild(li)
        li.appendChild(contenido)
    }
}
aleatorio()

//Ejercicio 2





