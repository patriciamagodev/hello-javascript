/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Comentario de una línea

// 2. Escribe un comentario en varias líneas
/*
Otro comentario
pero
en Varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miNumero = 42; // Número
let miString = "Hola, mundo"; // Cadena de texto
let miBooleano = true; // Booleano
let miUndefined; // Undefined
let miNull = null; // Null
let miBigInt = BigInt(123456789012345678901234567890); // BigInt
let miSymbol = Symbol('mi-simbolo'); // Symbol

// 4. Imprime por consola el valor de todas las variables
console.log(miNumero);
console.log(miString);
console.log(miBooleano);
console.log(miUndefined);
console.log(miNull);
console.log(miBigInt);
console.log(miSymbol);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof miNumero);
console.log(typeof miString);
console.log(typeof miBooleano);
console.log(typeof miUndefined);
console.log(typeof miNull); // Esto imprimirá "object" debido a una peculiaridad de JavaScript
console.log(typeof miBigInt);
console.log(typeof miSymbol);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
miNumero = 100;
miString = "Adiós, mundo";
miBooleano = false;
miUndefined = undefined;
miNull = null;
miBigInt = BigInt(987654321098765432109876543210);
miSymbol = Symbol('otro-simbolo');

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
miNumero = "Cien";
miString = 200;
miBooleano = "true";
miUndefined = 12345;
miNull = "null";
miBigInt = "BigInt como cadena";
miSymbol = 42;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cNumero = 3.14;
const cString = "Constante cadena de texto";
const cBooleano = true;
const cUndefined = undefined;
const cNull = null;
const cBigInt = BigInt(123456789012345678901234567890);
const cSymbol = Symbol('constante-simbolo');

// 9. A continuación, modifica los valores de las constantes
// cNumero = 6.28;
// cString = "Nueva constante cadena de texto";
// cBooleano = false;
// cUndefined = "ahora definido";
// cNull = "ya no es null";
// cBigInt = BigInt(987654321098765432109876543210);
// cSymbol = Symbol('nuevo-constante-simbolo');

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las constantes no pueden ser reasignadas, por lo tanto, las líneas en el paso 9 están comentadas.