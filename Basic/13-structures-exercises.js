/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
myArray = ["Perro", "Gato", "Caballo", "Mono", "Oso"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Hipopotamo")
myArray.push("Aguila")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray = ["Hipopotamo", "Perro", "Gato", "Caballo", "Mono", "Oso", "Aguila"]
myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
mySet = new Set(["HP 1", "HP 2", "HP 3", "HP 4", "HP 5",])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("HP 6")
mySet.add("HP 6") // Set no permite repetir elementos
console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("HP 1")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
myMap = new Map([
    ["1ero", "Enero"],
    ["2do", "Febrero"],
    ["3ero", "Marzo"],
    ["4to", "Abril"],
    ["5to", "Mayo"],
    ["6to", "Junio"],
    ["7mo", "Julio"],
    ["8vo", "Agosto"],
    ["9no", "Septiembre"],
    ["10mo", "Octubre"],
    ["11vo", "Noviembre"],
    ["12vo", "Diciembre"],
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.get("5to"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let realMadrid = ["Vinicius", "Valverde", "Rudiger"]

setPlayers = new Set(realMadrid)
console.log(setPlayers)

let equipo = new Map()
equipo.set("jugadores", setPlayers)
console.log(equipo)
