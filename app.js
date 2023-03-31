//prueba de map
const lista = ["Lucas", "Martin", "Alejandro"];

let salida = []

for (let i = 0; i< lista.length; i++){
    const nombre = lista[i];
    salida.push(nombre.toLocaleUpperCase())
}

console.log(salida)

//Esto es igual pero con map


let salida2 = lista.map(function(nombre){
    return nombre.toLowerCase();
})
console.log(salida2)

//Otra forma

const convertir = (nombre) => nombre.toLocaleUpperCase()
let salida3 = lista.map(convertir)

console.log(salida3)

//--------------
//Prueba de filter

let salida4 = lista.filter((nombre) => nombre.length < 6);
console.log(salida4)

let salida5 = lista.filter(nombre => nombre.length > 6).map(nombre => nombre.toLocaleUpperCase())
console.log(salida5)

//--------------------
//Prueba de Reduce
let numeros = [1,2,3,4,5,6,7,8,9,10]
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);

//-----------------------
//Prueba de Some

let salida6 = numeros.some(numero => numero > 55);
console.log(salida6)

// Every es lo mismo pero con todos los elementos

let salida7 = numeros.every(numero => numero > 5);
console.log(salida7)

//------------------
//setTimeout() Tiene 2 parametros, el nombre de otra funcion y el tiempo en que queremos que actue
//set Interval es lo mismo pero cada 3 segundos por ejemplo

function saludar(){
    alert("Hola Mundo")
    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Esto funciona perfectamente";
}

function time(){
    setTimeout(saludar, 3000);
    
}

//------------------
//Probando Jquery
//Los nombres validos son: $, -, A

function borrar(){
    //const test = document.getElementsByClassName("test");
    $(".test").hide()
}

