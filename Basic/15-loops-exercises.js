/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i = 0
while (i <= 20) {
    console.log(`Número ${i}`)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Patricia", "Mariangel", "Jesus", "Virginia"]

for (let i = 0; i < nombres.length; i++) {
    console.log(`El jugador se llama: ${nombres[i]}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let numVocales = 0
let cadenaTexto = "¿Cuantas Vocales hay?"
for (let valor of cadenaTexto) {
    if ('aeiouAEIOU'.includes(valor)) {
        numVocales++
    }
}
console.log(`Hay ${numVocales} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
numbers = [1, 2, 3, 4, 5];
let producto = 1;

for (let i = 0; i < numbers.length; i++) {
    producto *= numbers[i]; // Multiplicamos el producto actual por el elemento actual del array. Y al iterar el producto conserva el valor de la multiplicación anterior.
}
console.log(`El producto de todos los números es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
  }

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Hola mundo";
let cadenaInvertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
  cadenaInvertida += cadena[i];
}

console.log(cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num1 = 0;
let num2 = 1;
let siguiente;

console.log(num1); // Imprimimos el primer número (0)
console.log(num2); // Imprimimos el segundo número (1)

for (let i = 2; i < 10; i++) {
  siguiente = num1 + num2;
  console.log(siguiente);
  num1 = num2; // Asiganmos el nuevo valor de la variable
  num2 = siguiente; // Asiganmos el nuevo valor de la variable
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

miArray = [1, 20, 13, 4, 50, 37]
miNuevoArray = []

for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] > 10)
        miNuevoArray.push(miArray[i])
}
console.log(miNuevoArray)