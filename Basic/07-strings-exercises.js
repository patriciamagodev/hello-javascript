/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let petName = "Miko "
let petBreed= petName + "is a Cat"
console.log(petBreed)

// 2. Muestra la longitud de una cadena de texto
console.log(petBreed.length)

// 3. Muestra el primer y último carácter de un string
console.log(petBreed[0])
console.log(petBreed[12])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(petBreed.toUpperCase())
console.log(petBreed.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas
let miVariable = `Esta es una
Cadena de Texto
en Varias lineas`
console.log(miVariable)

// 6. Interpola el valor de una variable en un string
let petOwner = "Patricia"
console.log(`Hola, ${petOwner}! Tu mascota ${petName}ya está lista!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let miCadena = "Hola a Todos los Usuarios";
let nuevaCadena = miCadena.replace(/ /g, "-"); // Implementando una Expresión Regular de tipo Global
console.log(nuevaCadena)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nuevaCadena.includes("Usuarios"))

// 9. Comprueba si dos strings son iguales
let variableUno = "HOLA"
let variablesDos = "HOLA"
console.log(variableUno === variablesDos)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(variableUno.length === variablesDos.length)