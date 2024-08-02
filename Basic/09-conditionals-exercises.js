/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Patricia"
if (myName === "Patricia") {
    console.log ("Mi Nombre es Patricia")
} else {
    console.log ("El Nombre NO COINCIDE")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = "Patricia"
let userPassword = "123ABC"

if (userName === "Patricia" && userPassword === "123ABC") {
    console.log ("Los Datos son CORRECTOS")
} else {
    console.log ("Los Datos son INCORRECTOS")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
    if (number > 0) {
        console.log ("El Numero es POSITIVO")
    }   else if (number < 0) {
        console.log ("El Numero es NEGATIVO")
        }
    else {
    console.log ("El Numero es CERO")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 10
if (edad >= 18) {
    console.log("Puede Votar")
} else {
    console.log("NO puede Votar y le faltan " + (18 - edad) + " años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const adulto = edad == 18 ? "Ya eres un Adulto" : "Eres menor de Edad"
console.log(adulto)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4; // Julio

if (mes === 3 || mes == 4 || mes === 5) {
  console.log("Estamos en Primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("Estamos en Verano");
} else if (mes >= 9 && mes <= 11) {
  console.log("Estamos en Otoño");
} else if (mes === 12 || mes === 1 || mes === 2) {
  console.log("Estamos en Invierno");
} else {
  console.log("Mes inválido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7let season = "noviembre"

if (season == "enero") {
    console.log("Estamos en Invierno")
} 
    else if (season == "febrero") {
        console.log ("Estamos en Invierno")
    } else if (season == "marzo") {
        console.log ("Estamos en Primavera")
    } else if (season == "abril") {
        console.log ("Estamos en Primavera")
    } else if (season == "mayo") {
        console.log ("Estamos en Primavera")
    } else if (season == "junio") {
        console.log ("Estamos en Verano")
    } else if (season == "julio") {
        console.log ("Estamos en Verano")
    } else if (season == "agosto") {
        console.log ("Estamos en Verano")
    } else if (season == "septiembre") {
        console.log ("Estamos en Otoño")
    } else if (season == "octubre") {
        console.log ("Estamos en Otoño")
    } else if (season == "noviembre") {
        console.log ("Estamos en Otoño")
    } else if (season == "diciembre") {
        console.log ("Estamos en Invierno")
    } 
else {
    console.log("Mes no es valido, intentalo de nuevo")
}