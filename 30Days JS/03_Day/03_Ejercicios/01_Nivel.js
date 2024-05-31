// Ejercicios: Nivel 1
// Declare la variable nombre, apellido, país, ciudad, edad, está casado, año, asígnele un valor y utilice el operador tipo de para verificar diferentes tipos de datos..
console.log('-- Ejercicio 1')
let nombre = 'Raudy'
let apellido = 'Otero'
let pais = 'Venezuela'
let ciudad = 'Caracas'
let edad = 30
let estaCasado = false
let año = 2024
console.log(typeof nombre)
console.log(typeof apellido)
console.log(typeof pais)
console.log(typeof ciudad)
console.log(typeof edad)
console.log(typeof estaCasado)
console.log(typeof año)


// Compruebe si el tipo de '10' es igual a 10
console.log('-- Ejercicio 2')
console.log(typeof '10' == typeof 10)

// Compruebe si parseInt('9.8') es igual a 10
console.log('-- Ejercicio 3')
console.log(parseInt('9.8') == 10) // 9 - 10

// El valor booleano es verdadero o falso.
// Escriba tres declaraciones de JavaScript que proporcionen un valor veraz.
// Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log('-- Ejercicio 4')
console.log(true)
console.log(4 > 3)
console.log(4 == 4)
console.log(false)
console.log(4 < 3)
console.log(4 != 4)

// Primero, averigüe el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

// 4 > 3    - True
// 4 >= 3   - True
// 4 < 3    - False
// 4 <= 3   - False
// 4 == 4   - True
// 4 === 4  - True
// 4 != 4   - False
// 4 !== 4  - False
// 4 != '4' - False
// 4 == '4' - True
// 4 === '4'- False
// Encuentre la longitud de Python y la jerga y haga una declaración de comparación falsa.
console.log('-- Ejercicio 5')
console.log('Python'.length > 'Jargon'.length)

// Primero, averigüe el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

// 4 > 3 && 10 < 12         - True
// 4 > 3 && 10 > 12         - False
// 4 > 3 || 10 < 12         - True
// 4 > 3 || 10 > 12         - True
// !(4 > 3)                 - False
// !(4 < 3)                 - True
// !(FALSE)                 - True
// !(4 > 3 && 10 < 12)      - False
// !(4 > 3 && 10 > 12)      - True
// !(4 === '4')             - True

// Utilice el objeto Fecha para realizar las siguientes actividades
console.log('-- Ejercicio 7')
// cual es el año hoy?
let fecha = new Date()
console.log(fecha.getFullYear())
// ¿Cuál es el mes hoy como número??
console.log(fecha.getMonth())
// Cuál es la fecha de hoy?
console.log(fecha.getDate())
// ¿Cuál es el día de hoy como número??
console.log(fecha.getDay())
// cual es el horario ahora?
console.log(fecha.getHours())
// ¿Cuáles son los minutos ahora??
console.log(fecha.getMinutes())
// Descubra la cantidad de segundos transcurridos desde el 1 de enero de 1970 hasta la actualidad.
console.log(fecha.getTime())