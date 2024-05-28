// TODO DIA 2

/*
    Tipos de Dato
    - Tipos de datos primitivos
    - Tipos de datos no primitivos (referencias de objetos)

    Los tipos de datos primitivos en JavaScript incluyen:
    •Números: enteros, flotantes
    •Cadenas: cualquier dato entre comillas simples, comillas dobles o comillas invertidas
    •Booleanos: valor verdadero o falso
    •Nulo: valor vacío o sin valor
    •Indefinido: una variable declarada sin valor
    •Símbolo: un valor único que puede generar el constructor de símbolos.
    
    Los tipos de datos no primitivos en JavaScript incluyen:
    •Objetos
    •matrices
*/

// Datos primitivos
console.log('Datos primitivos')

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

// Datos no primitivos
console.log('Datos no primitivos')

let nums = [1, 2, 3, 4, 5]
nums[0] = 10

console.log(nums)

// Incluso si dos tipos de datos no primitivos tienen las mismas propiedades y valores, no son estrictamente iguales
let num = [1, 2, 3, 4, 5]
let num2 = [1, 2, 3, 4, 5]
console.log(num == num2) // false

let nn = [1, 2, 3]
let nn2 = nn
console.log(nn == nn2)  // true

// ! ---------------------------------------> NUMEROS
console.log('-- NUMEROS')
let age = 35
const gravity = 9.81  
let mass = 72         
const sss = 3.14
let calcu = gravity * mass

console.log(age, gravity, mass, sss, calcu)

// Libreria Matematica
console.log('-- Libreria Matematica')

const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// ROUND - Redondear , FLOOR - Redondear hacia abajo, CEIL - Redondear hacia arriba
console.log('-- Redondear')
console.log(Math.round(9.81))              // 10 redondear
console.log(Math.floor(9.81))              // 3 hacia abajo
console.log(Math.ceil(9.81))               // 4 hacia arriba

// Minimo y Maximo, se puede pasar un array? NO
console.log('-- Maximos y minimos')
let minimo = [-5, 3, 20, 4, 5, 10]
console.log(Math.min(minimo)) // -5, returns the minimum value
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minium value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

// Numeros Random
console.log("-- Numeros random")
const randNum = Math.random() // crea numeros random entre 0 to 0.999999
console.log(randNum)

const num4 =Math.round(Math.random () * 2) // creates random number between 0 and 10
console.log(num4)

// Absolutos
console.log("-- Absoluto")
console.log(Math.abs(-10))      // 10

// Raiz cuadrada
console.log("Raiz cuadrada")
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))       // 1.4142135623730951

// Potencia
console.log("-- Potencia")
console.log(Math.pow(3, 2))     // 9
console.log(Math.E)             // 2.718
console.log(Math.pow(5,3))      // 125

// Logaritmo
console.log("-- Logaritmo")
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Logaritmo Natural
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Seno, Coseno, Tangente
console.log("-- Seno, Coseno, Tangente")
console.log(Math.sin(0))        // 0
console.log(Math.cos(0))        // 1
console.log(Math.tan(0))        // 0

console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))

// Generador de numeros aleatorios
console.log("-- Generador de numeros aleatorios")
let numRandom = Math.floor(Math.random() * 2) +1 // con el +1 ya no se genera el 0, y solo hasta donde se esta multiplicando
console.log(numRandom)

// Concetenacion de string
console.log("-- Concatenacion de string")
let miDireccion = "Calle 15 Zona 15"
let miPais = "Ghana"
let concatenacion = miDireccion + " " + miPais
console.log(concatenacion)

// Secuencias de escape
console.log("-- Secuencias de escape")
let secuenciaTab = "hola\tmundo"
let secuenciaEnter = "hola\nmundo"
console.log(secuenciaTab, " - " , secuenciaEnter)

// Cadenas de plantilla -- forma de mostrar un string de forma dinamica
console.log("-- Cadenas de plantilla")
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
console.log(`Prueba que si es puede hasta hacer una operacion ${a + b}`)

let c = 2
let d = 3
console.log(`${c} es mayor que ${d}: ${c > d}`)

// Metodos de cadena
console.log("-- Metodos de cadena")
let pr = 'raudy'
// length - devuelve la longitud de la cadena
console.log(pr.length)                    // 5
// toUpperCase - convierte una cadena en mayúsculas
console.log(pr.toUpperCase())                // RAUDY
// toLowerCase - convierte una cadena en minúsculas
console.log(pr.toLowerCase())                // raudy
// substr - extrae una parte de una cadena y devuelve la parte extraída en una nueva cadena. El primer parámetro es el índice de inicio y el segundo parámetro es la longitud de los caracteres a extraer desde el índice de inicio
console.log(pr.substr(0, 2))                 // ra
// substring - extrae los caracteres entre dos posiciones especificadas en una cadena, 
console.log(pr.substring(0, 2))              // ra
// split - divide una cadena en una matriz de subcadenas
console.log(pr.split(''))                    // ['r', 'a', 'u', 'd', 'y']
// includes - determina si una cadena puede encontrarse dentro de otra cadena
console.log(pr.includes('a'))                // true
// replace - reemplaza una cadena con otra cadena
console.log(pr.replace('ra', 'RA'))          // RAudy
// charAt - devuelve el carácter en una posición específica en una cadena
console.log(pr.charAt(0))                    // r
// charCodeAt - devuelve el valor Unicode del carácter en una posición específica en una cadena
console.log(pr.charCodeAt(0))                // 114
// indexOf - devuelve la posición de la primera aparición de un valor especificado en una cadena
console.log(pr.indexOf('r'))                  // 0
// lastIndexOf - devuelve la posición de la última aparición de un valor especificado en una cadena
console.log(pr.lastIndexOf('r'))              // 4
// trim - elimina los espacios en blanco de ambos lados de una cadena
let pr2 = ' raudy '
console.log(pr2.trim())                      // raudy
// startsWith - comprueba si una cadena comienza con un valor específico
console.log(pr.startsWith('r'))              // true
// endsWith - comprueba si una cadena termina con un valor específico
console.log(pr.endsWith('y'))                // true
// slice - extrae una parte de una cadena y devuelve la parte extraída en una nueva cadena
console.log(pr.slice(0, 2))                  // ra
// search - busca una cadena para un valor especificado y devuelve la posición de la coincidencia
let string = 'I love JavaScript If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
// match - busca una cadena para un valor especificado y devuelve el valor encontrado
console.log(string.match('love'))
// repeat - devuelve una nueva cadena con una cantidad específica de copias de una cadena existente
console.log(pr.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// Cambiar el tipo de datos (transmisión)
console.log("-- Cambiar el tipo de datos (transmisión)")
console.log('Strign a entero')
let num5 = '10'
let numInt2 = parseInt(num5)
console.log(numInt2) // 10

console.log('String a numero')
let num6 = '10'
let numInt3 = Number(num6)
console.log(numInt3) // 10

console.log('String a numero')
let num7 = '10'
let numInt4 = +num7
console.log(numInt4) // 10


// TODO ---------------------------------------> EJERCICIO <---------------------------------------

// ! Nivel del ejericio 1
// 1 Declare una variable llamada desafío y asígnela a un valor inicial '30 Días de JavaScript'.
// 2 Imprima la cadena en la consola del navegador usando consola.log()
// 3 Imprime el longitud de la cadena en la consola del navegador usando consola.log()
// 4 Cambie todos los caracteres de la cadena a letras mayúsculas usando a mayúsculas() método
// 5 Cambie todos los caracteres de la cadena a letras minúsculas usando a minúsculas() método
// 6 Corta (corta) la primera palabra de la cadena usando substrato() o subcadena() método
// 7 Corta la frase Días de JavaScript de 30 Días de JavaScript.
// 8 Compruebe si la cadena contiene una palabra Guion usando incluye() método
// 9 dividir el cadena en una formación usando dividir() método
// 10 Divida la cadena 30 días de JavaScript en el espacio usando dividir() método
// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dividir la cadena en la coma y cambiarla a una matriz.
// 12 Cambie 30 días de JavaScript a 30 días de Python usando reemplazar() método.
// 13 ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Usar charAt() método.
// 14 ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript'? charCodeEn()
// 15 Usar índice de para determinar la posición de la primera aparición de a en 30 días de JavaScript
// 16 Usar último índice de para determinar la posición de la última aparición de a en 30 días de JavaScript.
// 17 Usar índice de para encontrar la posición de la primera aparición de la palabra porque en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
// 18 Usar último índice de para encontrar la posición de la última aparición de la palabra porque en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
// 19 Usar buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
// 20 Usar recortar() para eliminar cualquier espacio en blanco al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript '.
// 21 Usar comienza con() método con la cadena 30 Días de JavaScript y hacer que el resultado sea verdadero
// 22 Usar termina con() método con la cadena 30 Días de JavaScript y hacer que el resultado sea verdadero
// 23 Usar fósforo() método para encontrar todos los a’s en 30 días de JavaScript
// 24 Usar concat() y fusionar '30 Days of' y 'JavaScript' en una sola cadena, '30 Days Of JavaScript''
// 25 Usar repetir() método para imprimir 30 días de JavaScript 2 veces

// ! Nivel del ejericio 2
// 1 Usando console.log() imprima la siguiente declaración:
// 2 The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// 3 Usando console.log() imprima la siguiente cita de la Madre Teresa:
// 4 "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// 5 Compruebe si el tipo de '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
// 6 Compruebe si parseFloat('9.8') es igual a 10; si no, hágalo exactamente igual a 10.
// 7 Compruebe si 'on' se encuentra tanto en Python como en la jerga
// 8 Espero que este curso no esté lleno de jerga.. Comprobar si jerga está en la oración.
// 9 Genera un número aleatorio entre 0 y 100 inclusive.
// 10 Genera un número aleatorio entre 50 y 100 inclusive.
// 11 Genera un número aleatorio entre 0 y 255 inclusive.
// 12 Acceda a los caracteres de cadena 'JavaScript' usando un número aleatorio.
// 13 Utilice console.log() y caracteres de escape para imprimir el siguiente patrón.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// 14 Usar substrato para cortar la frase Porque porque porque de la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'

// ! Nivel del ejericio 3

// 1 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y otros todavía están buscando su amor. contar el número de palabras amar en esta frase.
// 2 Usar match() para contar el número de todos porque en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
// 3 Limpie el siguiente texto y encuentre la palabra más frecuente (pista, use reemplazo y expresiones regulares).
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// 4 Calcule el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Gana 5.000 euros de salario al mes, 10.000 euros de bonificación anual, 15.000 euros de cursos en línea al mes..'


// TODO ---------------------------------------> EJERCICIO IA <---------------------------------------

// 1 Declara dos variables con cadenas diferentes y comprueba si son iguales
// 2 Declara dos variables booleanas y realiza operaciones lógicas (AND, OR, NOT) con ellas
// 3 Declara una variable sin valor y otra con valor null, luego comprueba sus tipos
// 4 Declara un array, cambia uno de sus valores y muestra el array modificado
// 5 Declara dos arrays con los mismos valores y comprueba si son iguales
// 6 Declara variables para edad, gravedad, y masa. Calcula y muestra el resultado de multiplicar gravedad por masa
// 7 Usa Math.round, Math.floor, y Math.ceil para redondear un número decimal
// 8 Encuentra el valor mínimo y máximo de una lista de números
// 9 Genera un número aleatorio entre 0 y 100.
// 10 Calcula la raíz cuadrada de 64 y 144, y la potencia de 2 elevado a 8.
// 11 Declara dos variables con cadenas y concaténalas
// 12 Usa toUpperCase, toLowerCase, substring, y split en una cadena
// 13 Usa secuencias de escape para mostrar una cadena con nuevas líneas y tabulaciones
// 14 Usa plantillas literales para crear una cadena que incluya variables
// 15 Usa indexOf, replace, y includes en una cadena

// 16 Convierte una cadena que contiene un número decimal a un número flotante y multiplícalo por un entero
// 17 Usa operadores lógicos para evaluar una expresión que incluya tres variables booleanas diferentes
// 18 Declara una variable sin valor y otra con valor null. Usa operadores ternarios para comprobar si son nulos o indefinidos y asigna valores predeterminados
// 19 Crea un array y realiza varias operaciones: agregar elementos, eliminar el primer y el último elemento, y usar splice para reemplazar elementos
// 20 Usa toFixed y toPrecision para formatear un número flotante a diferentes precisiones
// 21 Escribe una función que genere un número aleatorio entre dos números dados (inclusive).
// 22 Usa el teorema de Pitágoras para calcular la hipotenusa de un triángulo rectángulo con catetos dados
// 23 Declara dos variables con cadenas y usa un tercer variable temporal para intercambiar sus valores
// 24 Declara una cadena y usa slice para extraer subcadenas específicas
