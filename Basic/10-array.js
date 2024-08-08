/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// Array

// Declaración

let myArray = [] // La mejor Forma de Expresar Arrays
let myArray2 = new Array()  //Otra forma de expresar Arrays

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3] // Inicializa de una vez
myArray2 = new Array(3) // Actua reservando espacio de memoria

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4] // Inicializado
myArray2 = new Array(1, 2, 3, 4) // Ahora sí inicializa ya que esta forma trabaja con una sintaxis diferente.

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3) //Reservamos las casillas
myArray2[2] = "Brais" // Asignamos el valor a cada casilla
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev" // Aunque inicializamos 3 casillas, igual podemos asignar o remover valores y el Array se adapta.

console.log(myArray2)

myArray = [] // Inicializamos
myArray[2] = "Brais" // Vamos asigando o removiendo valores directamente
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais") // Introduce elementos al Array en orden desde el 0 en adelante
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último elemento y lo devuelve
myArray.pop() // Elimina el último elemento en el Array

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento del Array y lo devuelve
console.log(myArray)

myArray.unshift("Brais", "mouredev") // Agrega uno o mas elementos al inicio dle Array
console.log(myArray)

// length

console.log(myArray.length) // Mide la longitud del Array

// clear

myArray = [] // Borra el Array
myArray.length = 0 // alternativa
console.log(myArray)

// slice 
// Devuelve una copia superficial de una porcion, brinda la posibilidad de generar un nuevo array pero solo con los elementos que seleccionamos

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice
// Elimina los elementos (1,2,"Nueva Entrada") 1 Desde donde comienza y 2 Cuantos elementos, "Nueva Entrada" Agrega el elemento

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)