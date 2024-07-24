/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let suma = (5 + 5)
console.log(suma)
let resta = (5 - 5)
console.log(resta)
let multiplicación = (5 * 5)
console.log(multiplicación)
let división = (5 / 5)
console.log(división)
let modulo = (5 % 5)
console.log(modulo)
let exponente = ( 5 ** 5)
console.log(exponente)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = 10
asignacionSuma += suma
console.log(asignacionSuma)

let asignacionResta = 20
asignacionResta += resta
console.log(asignacionResta)

let asignacionMultiplica = 30
asignacionMultiplica += multiplicación
console.log(asignacionMultiplica)

let asignacionDivide = 40
asignacionDivide += división
console.log(asignacionDivide)

let asignacionModulo = 50
asignacionModulo += modulo
console.log(asignacionModulo)

let asignacionExponente = 60
asignacionExponente += exponente
console.log(asignacionExponente)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(5 < 10)
console.log(5 <= 20)
console.log(10 > 5)
console.log(20 >= 5)
console.log(1 == 1)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(50 < 10)
console.log(50 <= 20)
console.log(1 > 5)
console.log(2 >= 5)
console.log(0 == true)

// 5. Utiliza el operador lógico and
console.log(5 < 10 && 10 > 5)
console.log(50 > 1 && 15 > 2 && 30 > 4)

// 6. Utiliza el operador lógico or
console.log(5 < 10 || 10 > 5)
console.log(50 > 1 || 15 > 2 || 30 > 4)

// 7. Combina ambos operadores lógicos
console.log(50 > 1 && 15 > 2 || 30 > 4)

// 8. Añade alguna negación
console.log(!true)
console.log(!false)

// 9. Utiliza el operador ternario
const tieneBicicleta = true
tieneBicicleta ? console.log("Vamos a Rodar") : console.log("Te presto una")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let a = 1
let b = 9

console.log(!(a + b == b + a) && (a < b == b > a))