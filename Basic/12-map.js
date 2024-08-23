/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set
// Agregar o Actualizar elementos si ya la key existe
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get
// Nos ayuda a recuperar el valor si existe
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
// Nos ayuda a comprobar si contiene o no un elemento
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries
// Nos retorna las diferentes propiedades keys, valores, y el listado completo de keys con valores. 
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear
// Limpio el mapa
myMap.clear()

console.log(myMap)



