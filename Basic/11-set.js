/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// Set

// Declaración
// Sin datos se declara así
let mySet = new Set()

console.log(mySet)

// Inicialización
// Ya con datos debe ir entre corchetes

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev") // Añade al final del listado de elementos, siguiendo el orden.

console.log(mySet)

mySet.delete("https://moure.dev") // En cambio acá Hay que indicarle tal cual el contenido del elemeto quiero eliminar

console.log(mySet)

console.log(mySet.delete("Brais")) // Retorna y nos valida o niega con un boolean
console.log(mySet.delete(4))

console.log(mySet)

// has
// Verifica si tenemos o no un elemento dentro del Set

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados
// No se pueden repetir elementos, son unicos.
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)