// TODO ------- INTRODUCCION -------

// 1. Comentarios
// Para comentar

/*
    Comentario 
    de 
    varias 
    lineas
*/ 

// Imprimir en consola

console.log("Hola Mundo");

console.log(2+2); // suma
console.log(3-2); // resta
console.log(3*2); // multiplicacion
console.log(3/2); // division
console.log(3%2); // modulo
console.log(3**2); // potencia

// ? Tipos de datos

// En JavaScript y también en otros lenguajes de programación, existen diferentes tipos de tipos de datos. Los siguientes son tipos de datos primitivos de JavaScript.: Cadena, Número, Booleano, indefinido, Nulo, y Símbolo.

// Numeros - Integer, Float
let num1 = 10
let num2 = 10.5
console.log(num1, num2);

// String
let str = "Hola Mundo"
console.log(str);

// Boolean
let bool = true
console.log(bool);

// Indefinido
let indefinido
console.log(indefinido);

// Nulo
let nulo = null
console.log(nulo);

// * ----------------------------------------------
console.log('Tipos de dato')
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
// * ----------------------------------------------

// ? Variables

// El nombre de una variable de JavaScript no debe comenzar con un número.
// El nombre de una variable de JavaScript no permite caracteres especiales excepto el signo de dólar y el guión bajo..
// El nombre de una variable de JavaScript sigue una convención camelCase.
// El nombre de una variable de JavaScript no debe tener espacios entre palabras..

// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried);

// Declaring variables with number values
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let namer = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(namer, job, live)

// TODO Día 1: Ejercicios

// Escribe un comentario de una sola línea que diga, Los comentarios pueden hacer que el código sea legible.
// Escribe otro solo comentario que diga, Bienvenido a 30DaysOfJavaScript
// Escribe un comentario de varias líneas que diga, Los comentarios pueden hacer que el código sea legible y fácil de reutilizar. e informativo

// Cree un archivo variable.js y declare variables y asigne tipos de datos de cadena, booleanos, indefinidos y nulos
// Cree el archivo datatypes.js y use JavaScript tipo de operador para verificar diferentes tipos de datos. Verifique el tipo de datos de cada variable.
// Declarar cuatro variables sin asignar valores
// Declarar cuatro variables con valores asignados
// Declare variables para almacenar su nombre, apellido, estado civil, país y edad en varias líneas
// Declare variables para almacenar su nombre, apellido, estado civil, país y edad en una sola línea
// Declarar dos variables mi edad y su edad y asignarles valores iniciales e iniciar sesión en la consola del navegador.