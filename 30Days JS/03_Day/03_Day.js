// TODO DIA 3

// Booleanos

let bol1 = true
let bol2 = false
let bol3 = false
let bol4 = true
let bol5 = 4 > 3    // true
let bol6 = 4 < 3  // false

// -- Valores de verdad
// los números (positivos y negativos) son verdaderos excepto el cero.
// Todas las cadenas son veraces excepto una cadena vacía. ('')
// El verdadero booleano

// --- valores falsos
// 0
// 0norte
// Nulo
// Indefinido
// Yaya
// el booleano falso
// '', "", ``, cuerda vacía

// Operadores
/*
    | Operador    | Ejemplo    | Igual que    | Descripción                    |
    +-------------+------------+--------------+--------------------------------+
    | =           | x = y      | x = y        | Asignación                     |
    | +=          | x += y     | x = x + y    | Asignación de adición          |
    | -=          | x -= y     | x = x - y    | Asignación de sustracción      |
    | *=          | x *= y     | x = x * y    | Asignación de multiplicación   |
    | /=          | x /= y     | x = x / y    | Asignación de división         |
    | %=          | x %= y     | x = x % y    | Asignación de módulo           |
    | **=         | x **= y    | x = x ** y   | Asignación de exponenciación   |
*/

// ..................................................... Operadores aritméticos
// Los operadores aritméticos son operadores matemáticos..

// Suma(+): a + b
// Resta(-): a - b
// Multiplicación(*): a * b
// División(/): a / b
// Módulo(%): a % b
// Exponencial(**): a ** b

let numero1 = 4
let numero2 = 3
let sum = numero1 + numero2
let res = numero1 - numero2
let mult = numero1 * numero2
let div = numero1 / numero2
let modull = numero1 % numero2
let potencia = numero1 ** numero2

console.log(sum, res, mult, div, modull, potencia) // 7,1,12,1.33,1, 64

const PI = Math.PI
let radio = 100

let circunferencia = radio * radio  * PI
console.log(`La circunferencia del radio ${radio} es ${circunferencia}`)

const gravedad = 9.8
let masa = 72
let peso = masa * gravedad
console.log(`El peso de una persona con masa ${masa} es ${peso}`)



// ..................................................... Operadores de comparación
// Los operadores de comparación se utilizan para comparar dos valores.
/*
    | Operador    | Descripción                    | Ejemplo                        |
    +-------------+--------------------------------+--------------------------------+
    | ==          | Igual a, equivalente           | x == y                         |
    | ===         | Igual a (valor y tipo)         | x === y                        |
    | !=          | No es igual a                  | x != y                         |
    | !==         | No es igual a (valor y tipo)   | x !== y                        |
    | >           | Mayor que                      | x > y                          |
    | <           | Menor que                      | x < y                          |
    | >=          | Mayor o igual que              | x >= y                         |
    | <=          | Menor o igual que              | x <= y                         |
*/

console.log('...Operadores de comparación...')
console.log(3>2)                 // true, porque 3 es mayor que 2
console.log(3>=2)                // true, porque 3 es mayor que 2
console.log(3<2)                 // false, porque 3 no es menor que 2
console.log(2<3)                 // true, porque 2 es menor que 3
console.log(2<=3)                // true, porque 2 es menor que 3
console.log(3==2)                // false, porque 3 no es igual a 2
console.log(3!=2)                // true, porque 3 no es igual a 2
console.log(3=='3')              // true, comparacion de valor 3 es igual a '3'
console.log(3==='3')             // false, comparacion de valor y tipo de dato
console.log(3!=='3')             // true, comparacion de valor y tipo de dato
console.log(3 != 3)              // false, comparacion de valor 3 es igual a 3
console.log(3 !== 3)             // false, comparacion de valor y tipo de dato
console.log(0 == false)          // true, comparacion de valor 0 es igual a false
console.log(0 === false)         // false, comparacion de valor y tipo de dato
console.log(0 != false)          // false, comparacion de valor 0 es igual a false
console.log(0 !== false)         // true, comparacion de valor y tipo de dato
console.log(1 == true)           // true, comparacion de valor 1 es igual a true
console.log(1 === true)          // false, comparacion de valor y tipo de dato
console.log(undefined == null)   // true, comparacion de valor undefined es igual a null
console.log(undefined === null)  // false, comparacion de valor y tipo de dato
console.log(NaN == NaN)          // false, comparacion de valor NaN es igual a NaN
console.log(NaN === NaN)         // false, comparacion de valor y tipo de dato
console.log(typeof NaN)          // number

console.log('...Ejercicio de comparación...')
console.log('mango'.length == 'manzana'.length) // false
console.log('mango'.length != 'manzana'.length) // true
console.log('mango'.length < 'manzana'.length) // true
console.log('mango'.length == 'limon'.length) // true
console.log('mango'.length != 'limon'.length) // false
console.log('puerta'.length == 'puerto'.length) // true

// ..................................................... Operadores lógicos
// Los operadores lógicos se utilizan para determinar la lógica entre las variables o valores.
/*
    | Operador    | Descripción                    | Ejemplo                        |
    +-------------+--------------------------------+--------------------------------+
    | &&          | y (y)                          | x && y                         |
    | ||          | o (o)                          | x || y                         |
    | !           | no                             | !x                             |
*/

console.log('...Operadores lógicos...')
const prueba1 = 4 > 3 && 10 > 5 // true && true -> true
console.log(prueba1)
const prueba2 = 4 > 3 && 10 < 5 // true && false -> false
console.log(prueba2)
const prueba3 = 4 < 3 && 10 < 5 //  false && false -> false
console.log(prueba3)
const prueba4 = 4 > 3 || 10 > 5         // true  || true -> true
console.log(prueba4)
const prueba5 = 4 > 3 || 10 < 5         // true  || false -> true
console.log(prueba5)
const prueba6 = 4 < 3 || 10 < 5         // false || false -> false
console.log(prueba6)
let prueba7 = 4 > 3                     // true
console.log(prueba7)
let prueba8 = !(4 > 3)                  //  false
console.log(prueba8)
let estaEncendido = true
let estaApagado = !estaEncendido           // false
console.log(`Esta el foco encendido? ${estaEncendido}`)
let estaCasado = !false                // true

// ..................................................... Operadores de incremento y decremento
// Los operadores de incremento y decremento se utilizan para incrementar o disminuir el valor de una variable.
/*
    | Operador    | Descripción                    | Ejemplo                        |
    +-------------+--------------------------------+--------------------------------+
    | ++          | Incremento                     | x++ o ++x                      |
    | --          | Decremento                     | x-- o --x                      |
*/
console.log('...Operadores de incremento y decremento...')
let contador = 0
console.log(++contador) // Incrementa el valor antes de mostrarlo
console.log(contador)
contador = 0
console.log(contador++) // Incrementa el valor despues de mostrarlo
console.log(contador)
let contador2 = 0
console.log(--contador2) // Decrementa el valor antes de mostrarlo
console.log(contador2)
contador2 = 0
console.log(contador2--) // Decrementa el valor despues de mostrarlo
console.log

// ..................................................... Operadores ternarios  
// Los operadores ternarios se utilizan para tomar una decisión basada en una condición.
/*
    | Operador    | Descripción                    | Ejemplo                        |
    +-------------+--------------------------------+--------------------------------+
    | ? :         | Operador ternario               | (condición) ? expr1 : expr2    |
*/
console.log('...Operadores ternarios...')
let edad = 19
let puedeManejar = edad > 18 ? 'Si puede manejar' : 'No puede manejar'
console.log(puedeManejar)

let estaLloviendo = true
estaLloviendo ? console.log('Lleva paraguas') : console.log('No lleva paraguas')
estaLloviendo = false
estaLloviendo ? console.log('Lleva paraguas') : console.log('No lleva paraguas')

let number = 5
number > 0
  ? console.log(`${number} es un numero positivo`)
  : console.log(`${number} es un numero negativo`)
number = -5
number > 0
? console.log(`${number} es un numero positivo`)
: console.log(`${number} es un numero negativo`)


// ? ............................................................ Métodos de ventana
// ------------------------------------ alert()
// Muestra un cuadro de alerta con el mensaje especificado y un botón Aceptar.
//alert('Bienvenido a 30DaysOfJavaScript')

// ------------------------------------ prompt()
// Muestra un cuadro de diálogo que solicita al usuario la entrada.
//let nombre = prompt('Introduce tu nombre')
//console.log(nombre)

// ------------------------------------ confirm()
// Muestra un cuadro de diálogo con un mensaje y dos botones, Aceptar y Cancelar. 
//let isAdult = confirm('¿Tienes 18 años o más?') // true o false
//console.log(isAdult)


// ? ............................................................ Objeto de fecha

/*
    | Metodo             | Descripción                         | Ejemplo
    +--------------------+-------------------------------------+-------------------------------------
    | getFullYear()      | Obtiene el año (yyyy)               | dateObj.getFullYear() = 2020
    | getMonth()         | Obtiene el mes (0-11)               | dateObj.getMonth() = 0
    | getDate()          | Obtiene el día del mes (1-31)       | dateObj.getDate() = 1
    | getHours()         | Obtiene la hora (0-23)              | dateObj.getHours() = 10
    | getMinutes()       | Obtiene los minutos (0-59)          | dateObj.getMinutes() = 30
    | getSeconds()       | Obtiene los segundos (0-59)         | dateObj.getSeconds() = 15
    | getMilliseconds()  | Obtiene los milisegundos (0-999)    | dateObj.getMilliseconds() = 10
    | getTime()          | Obtiene el tiempo (milisegundos)    | dateObj.getTime() = 1575909015000
    | getDay()           | Obtiene el día de la semana (0-6)   | dateObj.getDay() = 5
*/

const fecha = new Date() // crea un objeto de fecha
console.log(fecha) // 2021-03-03T21:39:26.000Z
console.log(fecha.getFullYear()) // 2024
console.log(fecha.getMonth() + 1) // Mes 0-11
console.log(fecha.getDate()) // Dia 1-31
console.log(fecha.getDay()) // Dia de la semana 0-6
console.log(fecha.getHours()) // 0-23
console.log(fecha.getMinutes()) // 0-59
console.log(fecha.getSeconds()) // 0-59
console.log(fecha.getMilliseconds()) // 0-999
console.log(fecha.getTime()) // milisegundos

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

// Ejercicios: Nivel 1
// Declare la variable nombre, apellido, país, ciudad, edad, está casado, año, asígnele un valor y utilice el operador tipo de para verificar diferentes tipos de datos..

// Compruebe si el tipo de '10' es igual a 10

// Compruebe si parseInt('9.8') es igual a 10

// El valor booleano es verdadero o falso.

// Escriba tres declaraciones de JavaScript que proporcionen un valor veraz.
// Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
// Primero, averigüe el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Encuentre la longitud de Python y la jerga y haga una declaración de comparación falsa.
// Primero, averigüe el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(FALSO)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// No hay ningún "encendido" tanto en Dragon como en Python.
// Utilice el objeto Fecha para realizar las siguientes actividades

// cual es el año hoy?
// ¿Cuál es el mes hoy como número??
// Cuál es la fecha de hoy?
// ¿Cuál es el día de hoy como número??
// cual es el horario ahora?
// ¿Cuáles son los minutos ahora??
// Descubra la cantidad de segundos transcurridos desde el 1 de enero de 1970 hasta la actualidad.
// Ejercicios: Nivel 2
// Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 xbxh).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Obtenga el largo y el ancho usando el mensaje y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho)))

// Obtenga el radio usando el mensaje y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3.14.

// Calcula la pendiente, la intersección con el eje x y la intersección con el eje y de y = 2x -2

// La pendiente es m = (y2-y1)/(X2-X1). Encuentre la pendiente entre el punto (2, 2) y el punto(6,10)

// Compare la pendiente de las dos preguntas anteriores.

// Calcular el valor de y (y = x2 + 6x+9). Intente utilizar diferentes valores de x y averigüe cuál es el valor de x y 0.

// Escriba un script que solicite al usuario que ingrese las horas y la tarifa por hora. Calcular el salario de la persona.?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// Si la longitud de su nombre es mayor que 7 diga, su nombre es largo; de lo contrario, diga que su nombre es corto.

// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declarar dos variables mi edad y su edad y asígnales valores iniciales y myAge y yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Usando el mensaje, obtenga el año de nacimiento del usuario y, si el usuario tiene 18 años o más, permítale conducir; si no, dígale que espere una cierta cantidad de años..

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Escriba un script que solicite al usuario que ingrese el número de años. Calcula el número de segundos que puede vivir una persona. Supongamos que alguien vive sólo cien años.

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Cree un formato de hora legible por humanos utilizando el objeto Fecha y hora

// AAAA-MM-DD HH:mm
// DD-MM-AAAA HH:mm
// DD/MM/AAAA HH:mm
// Ejercicios: Nivel 3
// Cree un formato de hora legible por humanos utilizando el objeto Fecha y hora. La hora y los minutos deben tener siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05 )
// AAAA-MM-DD HH:mm, por ejemplo. 20120-01-02 07:05