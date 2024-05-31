// TODO ---------------------------------------> EJERCICIO IA <---------------------------------------

// #### Ejercicios de Booleanos y Operadores de Comparación

// 1. **Evaluación de Expresiones Booleanas**:
//    - Evalúa las siguientes expresiones: `5 > 3 && 2 > 1`, `5 > 3 && 2 < 1`, `5 < 3 || 2 > 1`, `5 < 3 || 2 < 1`. Escribe el resultado de cada una.
console.log('-----> Ejercicio 1 <-----')
console.log(5 > 3 && 2 > 1) // true
console.log(5 > 3 && 2 < 1) // false
console.log(5 < 3 || 2 > 1) // true
console.log(5 < 3 || 2 < 1) // false

// 2. **Comparación de Longitud de Cadenas**:
//    - Compara la longitud de las cadenas "banana" y "apple". ¿Son iguales? ¿Cuál es mayor? 
console.log('-----> Ejercicio 2 <-----')
'banana'.length > 'apple'.length ? console.log('banana es mas grande') : console.log('apple es mas grande')

// 3. **Evaluación de Comparaciones**:
//    - Evalúa las siguientes comparaciones: `10 >= 10`, `10 <= 9`, `10 == '10'`, `10 === '10'`, `null == undefined`, `null === undefined`.
console.log('-----> Ejercicio 3 <-----')
console.log(10 >= 10) // true
console.log(10 <= 9) // false
console.log(10 == '10') // true
console.log(10 === '10') // false
console.log(null == undefined) // true
console.log(null === undefined) // false


// 4. **Operaciones con Variables Booleanas**:
//    - Declara dos variables booleanas y realiza operaciones lógicas entre ellas: `&&`, `||`, `!`. Muestra los resultados.
console.log('-----> Ejercicio 4 <-----')
let bool1 = true
let bool2 = false
console.log(bool1 && bool2) // false
console.log(bool1 || bool2) // true
console.log(!bool1) // false
console.log(!bool2) // true

// #### Ejercicios de Operadores Aritméticos

// 5. **Operaciones Matemáticas Básicas**:
//    - Declara dos números y realiza las operaciones de suma, resta, multiplicación, división, módulo y potencia entre ellos. Muestra los resultados.
console.log('-----> Ejercicio 5 <-----')
let numero1 = 28
let numero2 = 10
console.log(numero1 + numero2) // 38
console.log(numero1 - numero2) // 18
console.log(numero1 * numero2) // 280
console.log(numero1 / numero2) // 2.8
console.log(numero1 % numero2) // 8
console.log(numero1 ** numero2) // 115964117978.56618

// 6. **Calcular el Área de un Círculo**:
//    - Calcula el área de un círculo con un radio de 7 usando la constante `Math.PI`.
console.log('-----> Ejercicio 6 <-----')
let radioCirculo = 8
let areaCirculo = Math.PI * radioCirculo ** 2
console.log(areaCirculo) // 201.06192982974676

// 7. **Cálculo del Peso**:
//    - Calcula el peso de una persona con una masa de 70 kg en la Tierra (gravedad = 9.8 m/s²).
console.log('-----> Ejercicio 7 <-----')
let masa = 70
const gravedadTierra = 9.8
let peso = masa * gravedadTierra
console.log(`Mi peso en la tierra es de ${peso}`) // 686

// #### Ejercicios de Operadores de Incremento y Decremento

// 8. **Incremento y Decremento**:
//    - Declara una variable y aplica los operadores de incremento y decremento, tanto antes como después de la variable. Muestra los resultados.
console.log('-----> Ejercicio 8 <-----')
let contador = 20
console.log(++contador) // 21
console.log(contador++) // 21
console.log(contador--) // 22
console.log(contador) // 21

// #### Ejercicios de Operadores Ternarios

// 9. **Verificación de Edad para Conducir**:
//    - Declara una variable `edad` y usa un operador ternario para determinar si alguien puede obtener una licencia de conducir (edad >= 18).
console.log('-----> Ejercicio 9 <-----')
let edad = 20
edad < 18 ? console.log('No puede tener licencia porque no es mayor de edad') : console.log('Puede tener licencia porque ya es mayor de edad')

// 10. **Verificación de Clima**:
//    - Declara una variable `estaLloviendo` y usa un operador ternario para mostrar un mensaje que indique si debes llevar un paraguas.
console.log('-----> Ejercicio 10 <-----')
let estaLloviendo = true
!estaLloviendo ? console.log('No debes llevar un paraguas') : console.log('Debes llevar un paraguas')

// #### Ejercicios con Métodos de Ventana

// 11. **Mensaje de Bienvenida**:
//    - Usa `alert()` para mostrar un mensaje de bienvenida al usuario.
console.log('-----> Ejercicio 11 <-----')
alert('Bienvenido a mi página web')

// 12. **Solicitud de Nombre**:
//    - Usa `prompt()` para solicitar el nombre del usuario y luego muestra un saludo personalizado con `alert()`.
console.log('-----> Ejercicio 12 <-----')
let nombrePrompot = prompt('Ingresa tu nombre')
alert(`Hola ${nombrePrompot}, bienvenido a mi página web`)

// 13. **Confirmación de Mayoría de Edad**:
//    - Usa `confirm()` para preguntar si el usuario tiene 18 años o más y muestra una respuesta basada en la selección del usuario.
console.log('-----> Ejercicio 13 <-----')
let mayorEdad = confirm('¿Eres mayor de edad?')
console.log(`El usuario es mayor de edad? ${mayorEdad ? 'Si' : 'No'}`)

// #### Ejercicios con el Objeto Date

// 14. **Fecha y Hora Actual**:
//    - Usa el objeto `Date` para mostrar el año, mes, día, hora, minutos y segundos actuales.
console.log('-----> Ejercicio 14 <-----')
let fechaActual = new Date()
let anio = fechaActual.getFullYear()
let mes = fechaActual.getMonth() + 1
let dia = fechaActual.getDate()
let hora = fechaActual.getHours()
let minutos = fechaActual.getMinutes()
let segundos = fechaActual.getSeconds()
console.log(anio, mes, dia, hora, minutos, segundos)

// 15. **Comparación de Tiempos**:
//    - Calcula y muestra la cantidad de milisegundos desde el 1 de enero de 1970 hasta la fecha actual usando `Date.now()` y `new Date().getTime()`. Compara los resultados.
console.log('-----> Ejercicio 15 <-----')
let fechaAct = new Date()
let fechaActu1 = Date.now()
let fechaActu2 = new Date().getTime()
console.log(fechaActu1)
console.log(fechaActu2)
console.log(fechaActu1 == fechaActu2)

// NIVEL 2

// #### Ejercicios Avanzados de Booleanos y Operadores de Comparación

// 1. **Evaluación de Expresiones Complejas**:
//    - Evalúa las siguientes expresiones complejas y explica el resultado: `!(5 > 3 && 2 > 1)`, `(5 < 3 || 2 > 1) && (5 > 3 || 2 < 1)`.
console.log('-----> Ejercicio N1 <-----')
console.log(!(5 > 3 && 2 > 1)) // true && true > !true > false
console.log((5 < 3 || 2 > 1) && (5 > 3 || 2 < 1)) // (false||true) && (true||false) > true && true > true

// 2. **Comparación de Cadenas Sensible a Mayúsculas**:
//    - Compara las cadenas "JavaScript" y "javascript" utilizando `==` y `===`. Explica las diferencias.
console.log('-----> Ejercicio N2 <-----')
let comp1 = 'JavaScript'
let comp2 = 'javascript'
console.log(comp1 == comp2)
console.log(comp1 === comp2)

// 3. **Operaciones Combinadas con Booleanos**:
//    - Declara tres variables booleanas y realiza operaciones lógicas combinadas entre ellas. Ejemplo: `true && false || true`.
console.log('-----> Ejercicio N3 <-----')
let bul1 = true
let bul2 = true
let bul3 = false
console.log(bul1 && bul2 && bul3) // false
console.log(bul1 || (bul1 && bul3) && bul2) // true

// #### Ejercicios Avanzados de Operadores Aritméticos

// 4. **Operaciones Combinadas**:
//    - Declara tres números y realiza operaciones combinadas: `(a + b) * c`, `a * (b + c)`, `(a - b) / c`. Muestra los resultados.
console.log('-----> Ejercicio N4 <-----')
let numA = 10
let numB = 5
let numC = 7
let exp1 = (numA + numB) * numC
let exp2 = numA * (numB + numC)
let exp3 = (numA - numB) / numC
console.log(exp1)
console.log(exp2)
console.log(exp3)

// 5. **Calcular el Volumen de una Esfera**:
//    - Calcula el volumen de una esfera con un radio de 5 usando la fórmula \( V = \frac{4}{3} \pi r^3 \).
console.log('-----> Ejercicio N5 <-----')
let radioE = 10
let volumenE = (4/3) * Math.PI * radioE ** 3
console.log(`El volumen de la esfera de radio ${radioE} es de ${volumenE}`)

// 6. **Cálculo del IMC**:
//    - Calcula el Índice de Masa Corporal (IMC) de una persona con peso de 68 kg y altura de 1.75 m usando la fórmula \( IMC = \frac{peso}{altura^2} \).
console.log('-----> Ejercicio N6 <-----')
let miPeso = 68
let miAltura = 1.75
let imc = (miPeso)/(miAltura**2)
console.log(`Mi indice de masa corporal cuando mido ${miAltura} y peso ${miPeso} es de ${imc}`)

// #### Ejercicios Avanzados de Operadores Ternarios

// 8. **Asignación de Grados de Temperatura**:
//    - Usa un operador ternario para asignar una descripción ("Caliente", "Templado", "Frío") a una variable `temperatura` dependiendo de su valor.
console.log('-----> Ejercicio N8 <-----')
let temperatura = 25
temperatura > 30 ? console.log('Esta caliente') : temperatura < 20 ? console.log('Esta frio') : console.log('Esta templado')

// 9. **Verificación de Edad para Diferentes Actividades**:
//    - Usa un operador ternario para determinar si una persona puede votar (edad >= 18), beber alcohol (edad >= 21) o obtener un descuento para mayores (edad >= 65).
console.log('-----> Ejercicio N9 <-----')
let edadPersona = 70
edadPersona >= 65 ? console.log('Puede obtener descuento') : edadPersona >= 21 ? console.log('Puede beber alcohol') : edadPersona >= 18 ? console.log('Puede votar') : console.log('No puede hacer nada')

// #### Ejercicios Avanzados con Métodos de Ventana

// 10. **Solicitar Datos del Usuario**:
//     - Usa `prompt()` para solicitar el nombre y la edad del usuario, y luego usa `confirm()` para verificar si la información ingresada es correcta.
console.log('-----> Ejercicio N10 <-----')
let nombreIngresado = prompt('Ingrese su nombre')
let confirmaNombre = confirm(`Su nombre es ${nombreIngresado}`)
console.log(`Su nombre ${nombreIngresado} es ${confirmaNombre}`)

// 11. **Confirmación de Eliminación de Datos**:
//     - Usa `confirm()` para solicitar al usuario que confirme si desea eliminar todos sus datos.
console.log('-----> Ejercicio N11 <-----')
let eliminarDatos = confirm('¿Desea eliminar todos sus datos?')
console.log(`El usuario desea eliminar sus datos? ${eliminarDatos ? 'Si' : 'No'}`)

// #### Ejercicios Avanzados con el Objeto Date

// 12. **Cálculo de Edad**:
//     - Solicita al usuario su fecha de nacimiento y calcula su edad actual utilizando el objeto `Date`.
console.log('-----> Ejercicio N12 <-----')
let fechaNacimiento= prompt('Ingresa tu fecha de nacimiento')
let fechaActualizada = new Date()
let añoActual = fechaActualizada.getFullYear()

let edadActual = añoActual - fechaNacimiento
console.log(`Tu edad es de ${edadActual}`)

// 13. **Formato de Fecha Personalizado**:
//     - Formatea la fecha actual en el formato "DD/MM/YYYY HH:MM:SS".
console.log('-----> Ejercicio N13 <-----')
let fechaActual2 = new Date()
let diaActual = fechaActual2.getDate()
let mesActual = fechaActual2.getMonth() + 1
let añoActual2 = fechaActual2.getFullYear()
let horaActual = fechaActual2.getHours()
let minutosActual = fechaActual2.getMinutes()
let segundosActual = fechaActual2.getSeconds()
console.log(`${diaActual}/${mesActual}/${añoActual2} ${horaActual}:${minutosActual}:${segundosActual}`)

// 14. **Días Restantes del Año**:
//     - Calcula el número de días restantes hasta el final del año actual.
console.log('-----> Ejercicio N14 <-----')
let fechaActual3 = new Date()
let añoActual3 = fechaActual3.getFullYear()
let fechaFin = new Date(añoActual3, 11, 31)
let milisegundos = fechaFin - fechaActual3
let segundos2 = milisegundos / 1000
let minutos2 = segundos2 / 60
let horas = minutos2 / 60
let dias = horas / 24
console.log(`Faltan ${dias} días para que termine el año`)


// 15. **Comparación de Dos Fechas**:
//     - Declara dos fechas diferentes y determina cuál es anterior y cuál es posterior. Muestra los resultados de la comparación.
console.log('-----> Ejercicio N15 <-----')
let fecha1 = new Date(2021, 10, 10)
let fecha2 = new Date(2021, 10, 11)
console.log(fecha1 < fecha2 ? 'La fecha 1 es anterior'+fecha1 : 'La fecha 2 es anterior')