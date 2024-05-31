// TODO Ejercicios: Nivel 2
// Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 xbxh).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
console.log('-- Ejercicio 1')
let base = prompt('Ingresa la base del triangulo')
let altura = prompt('Ingresa la altura del triangulo')
let area = base * altura / 2
console.log(`El area del triangulo es ${area}`)


// Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
console.log('-- Ejercicio 2')
let ladoA = prompt('Ingrese el lado A')
let ladoB = prompt('Ingrese el lado B')
let ladoC = prompt('Ingrese el lado C')
let perimetro = parseInt(ladoA) + parseInt(ladoB) + parseInt(ladoC)
console.log(`El perimetro del triangulo es ${perimetro}`)


// Obtenga el largo y el ancho usando el mensaje y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho)))
console.log('-- Ejercicio 3')
let largo = prompt('Ingrese el largo')
let ancho = prompt('Ingrese el ancho')
let areaT = largo * ancho
let perimetroT = 2*largo + 2*ancho
console.log(`El area del rectangulo es ${areaT} y el perimetro es ${perimetroT}`)

// Obtenga el radio usando el mensaje y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3.14.
console.log('-- Ejercicio 4')
const PI = 3.14
let radio = prompt('Ingrese el radio del circulo')
let areaCirculo = PI * radio * radio
let circunferencia = 2 * PI * radio
console.log(`El area del circulo es ${areaCirculo} y la circunferencia es ${circunferencia}`)

// Calcula la pendiente, la intersección con el eje x y la intersección con el eje y de y = 2x -2
console.log('-- Ejercicio 5')
let interseccionEjeY = -2 // y = 2x - 2, cuando x = 0, y = -2
let interseccionEjeX = 1 // 2x - 2 = 0, x = 1
let pendienteE = 2 // y = 2x - 2, la pendiente es 2

// La pendiente es m = (y2-y1)/(X2-X1). Encuentre la pendiente entre el punto (2, 2) y el punto(6,10)
console.log('-- Ejercicio 6')
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let pendienteM = (y2-y1)/(x2-x1)
console.log(`La pendiente es ${pendienteM}`)


// Compare la pendiente de las dos preguntas anteriores.
console.log('-- Ejercicio 6')
console.log(pendienteE == pendienteM)

// Calcular el valor de y (y = x2 + 6x+9). Intente utilizar diferentes valores de x y averigüe cuál es el valor de x y 0.
console.log('-- Ejercicio 7')
let variableX = 2
let valorY = variableX * variableX + 6 * variableX + 9
console.log(`Cuando x es ${variableX} El valor de y es ${valorY}`)

// Escriba un script que solicite al usuario que ingrese las horas y la tarifa por hora. Calcular el salario de la persona.?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
console.log('-- Ejercicio 8')
let horasTrabjadas = prompt('Ingrese las horas trabajadas')
let tarifaPorHora = prompt('Ingrese la tarifa por hora')
let salario = horasTrabjadas * tarifaPorHora
console.log(`Tu salario semanal es ${salario}`)

// Si la longitud de su nombre es mayor que 7 diga, su nombre es largo; de lo contrario, diga que su nombre es corto.
console.log('-- Ejercicio 9')
let nombre = prompt('Ingrese su nombre')
nombre.length > 7
? console.log('Su nombre es largo')
: console.log('Su nombre es corto')

// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
console.log('-- Ejercicio 10')
let miNombre = 'Estevana'
let miApellido = 'Cabrera'
miNombre.length < miApellido.length
? console.log(`Mi nombres '${miNombre}' es mas pequeño que mi apellido '${miApellido}'`)
: console.log(`Mi nombres '${miNombre}' es mas mayor que mi apellido '${miApellido}'`)

// Declarar dos variables mi edad y su edad y asígnales valores iniciales y myAge y yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
console.log('-- Ejercicio 11')
let miEdad = prompt('Ingresa tu edad')
let suEdad = prompt('Ingresa la edad de la otra persona')
let edadSuma = miEdad - suEdad
console.log(`La suma de nuestra edad es: ${edadSuma} años`)

// Usando el mensaje, obtenga el año de nacimiento del usuario y, si el usuario tiene 18 años o más, permítale conducir; si no, dígale que espere una cierta cantidad de años..
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years. 
console.log('-- Ejercicio 12')
let anoNacimiento = prompt('Ingresa tu fecha de nacimiento')
let edadActual = new Date().getFullYear() - anoNacimiento
edadActual >= 18 ? console.log(`Si puedes conducir`) : console.log(`No puedes conducir`)

// Escriba un script que solicite al usuario que ingrese el número de años. Calcula el número de segundos que puede vivir una persona. Supongamos que alguien vive sólo cien años.
// Enter number of years you live: 100
// You lived 3153600000 seconds. 
console.log('-- Ejercicio 13')
let anosVividos = prompt('Ingresa el numero de años que has vivido')
let segundosVividos = anosVividos * (1*365*24*60*60)
console.log(`Has vivido ${segundosVividos} segundos`)

// Cree un formato de hora legible por humanos utilizando el objeto Fecha y hora
// AAAA-MM-DD HH:mm
// DD-MM-AAAA HH:mm
// DD/MM/AAAA HH:mm
console.log('-- Ejercicio 14')
let fechaActual = new Date()
let ano = fechaActual.getFullYear()
let mes = fechaActual.getMonth() + 1
let dia = fechaActual.getDate()
let hora = fechaActual.getHours()
let minutos = fechaActual.getMinutes()
console.log(`${ano}-${mes}-${dia} ${hora}:${minutos}`)
