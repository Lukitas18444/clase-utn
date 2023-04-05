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

//Ejercicio 7
const listaNumeros = document.getElementById("listaNumeros")
const numeroParesImapares = [1,2,4,5,6,8,10,111,156];
const listaNumeroPares=[]


function numeroPares(){
    for (let i = 0; i < 10; i++){
        if(numeroParesImapares[0] % 2 == 0 ){
            listaNumeroPares.push(numeroParesImapares[0])
            numeroParesImapares.shift()
        } else{
            numeroParesImapares.shift()
        }
    }
}
numeroPares()
console.log(listaNumeroPares)

//Ejercicio 8
const palabras = ["Hola","Chau","Arbol","Ola"];
const letrasVocales = ["A", "E", "I","O","U"]
const soloVocales= [];

palabras.forEach(palabra => {
    console.log(palabra, comienzaConVocal(palabra));
})
function comienzaConVocal(palabra){
    const primerCaracter = palabra.charAt(0);

        if(letrasVocales.indexOf(primerCaracter) === -1){
            return false
        } else {
            return true
    }
    
}
console.log(soloVocales)

//Ejercicio 9
const lista1 = [1,2,3,4];
const lista2 = [5,6,7,8];

function intercambio(){
    index = parseInt(prompt("Escribe un numero del 0 al 3"));
    alert(`el indice que se va a cambiar es el: ${index}`);
    if(index >= 4){
        alert("El numero es incorrecto, pruebe de nuevo")
    } else{
        aux = [...lista1]
        lista1.splice(index, 1,lista2[index]);
        lista2.splice(index, 1,aux[index]);
    }
}
//intercambio()
console.log(lista1)
console.log(lista2)

//Ejercicio 10
$(document).ready(function(){
    $(".tr").click(function(){
        $(".tr").addClass("cambio")
    })
    
    $(".chau").click(function(){
        $(".chau").hide();
    })

    $("li").on("click", function(){
        $(this).hide();
    })

})

//Ejercicio 11
