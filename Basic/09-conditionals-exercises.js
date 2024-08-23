/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
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
let season = "julio"

if (season == "diciembre" || season == "enero" || season == "febrero") {
    console.log("Estamos en Invierno")
} else if (season == "marzo" || season == "abril" || season == "mayo") {
    console.log ("Estamos en Primavera")
} else if (season == "junio" || season == "julio" || season == "agosto") {
    console.log ("Estamos en Verano")
} else if (season == "septiembre" || season == "octubre" || season == "noviembre") {
    console.log ("Estamos en Otoño")
}
else {
    console.log("Mes no es valido, intentalo de nuevo")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (season == "enero" || season == "marzo" || season == "mayo" || season == "julio" || season == "agosto" || season == "octubre" || season == "diciembre") {
    console.log("Este mes tiene 31 dias")
} else if (season == "abril" || season == "junio" || season == "septiembre" || season == "noviembre") {
    console.log ("Este mes tiene 30 dias")
}
else {
    console.log ("Febrero tiene 28 dias o 29 dias cuando es año bisiesto")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "italiano"

switch (idioma) {
    case "español":
        console.log("¡Buenos días!");
        break;
    case "inglés":
        console.log("Good morning!");
        break;
    case "francés":
        console.log("Bonjour!");
        break;
    case "italiano":
        console.log("Buongiorno!");
        break;
    case "alemán":
        console.log("Guten Morgen!");
        break;
    default:
        console.log("Idioma no reconocido.");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 8;

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Estamos en otoño.");
        break;
    default:
        console.log("Ingresa un número entre 1 y 12");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let month = "febrero"; 

switch (month) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("Este mes tiene 31 días.");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("Este mes tiene 30 días.");
        break;
    case "febrero":
        console.log("Febrero tiene 28 días, excepto en años bisiestos.");
        break;
    default:
        console.log("Mes inválido.");
}