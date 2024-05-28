// TODO ---------------------------------------> EJERCICIO IA <---------------------------------------

// 1 Declara dos variables con cadenas diferentes y comprueba si son iguales
console.log('   Ejercicio 1')
let cadena1 = 'Hola'
let cadena2 = 'Como estas'
console.log(cadena1 == cadena2)

// 2 Declara dos variables booleanas y realiza operaciones lógicas (AND, OR, NOT) con ellas
console.log('   Ejercicio 2')
let bol1 = true
let bol2 = false
console.log(bol1 && bol2) // AND
console.log(bol1 || bol2) // OR
console.log(!bol1) // NOT

// 3 Declara una variable sin valor y otra con valor null, luego comprueba sus tipos
console.log('   Ejercicio 3')
let sinValor
let conValor = null
console.log(typeof sinValor)
console.log(typeof conValor)

// 4 Declara un array, cambia uno de sus valores y muestra el array modificado
console.log('   Ejercicio 4')
let lista = [1, 2, 3, 4, 5]
lista[3] = 14
console.log(lista)

// 5 Declara dos arrays con los mismos valores y comprueba si son iguales
console.log('   Ejercicio 5')
let lista1 = [1, 2, 3, 4, 5]
let lista2 = [1, 2, 3, 4, 5]
console.log(lista1 == lista2)

// 6 Declara variables para edad, gravedad, y masa. Calcula y muestra el resultado de multiplicar gravedad por masa
console.log('   Ejercicio 6')
let edad = 25
let gravedad = 9.8
let masa = 10
console.log(gravedad * masa)

// 7 Usa Math.round, Math.floor, y Math.ceil para redondear un número decimal
console.log('   Ejercicio 7')
let numDecimal = 10.6
console.log(Math.round(numDecimal))
console.log(Math.floor(numDecimal))
console.log(Math.ceil(numDecimal))

// 8 Encuentra el valor mínimo y máximo de una lista de números
console.log('   Ejercicio 8')
let listaNum = [20,58,45,10,78,63,102]
console.log(Math.min(listaNum))
console.log(Math.min(...listaNum)) // ... para desempaquetar la lista
console.log(Math.max(20,58,45,10,78,63,102))

// 9 Genera un número aleatorio entre 0 y 100.
console.log('   Ejercicio 9')
let numRandom = Math.floor(Math.random() * 100)
console.log(numRandom)

// 10 Calcula la raíz cuadrada de 64 y 144, y la potencia de 2 elevado a 8.
console.log('   Ejercicio 10')
console.log(Math.sqrt(64))
console.log(Math.sqrt(144))
console.log(Math.pow(2,8))

// 11 Declara dos variables con cadenas y concaténalas
console.log('   Ejercicio 11')
let str1 = 'Buen'
let str2 = 'Día'
console.log(str1 + ' ' + str2)

// 12 Usa toUpperCase, toLowerCase, substring, y split en una cadena
console.log('   Ejercicio 12')
let miNombre = "Mi nombre es Raudy"
console.log(miNombre.toUpperCase())
console.log(miNombre.toLowerCase())
console.log(miNombre.substr(11,5))
console.log(miNombre.split(' '))

// 13 Usa secuencias de escape para mostrar una cadena con nuevas líneas y tabulaciones
console.log('   Ejercicio 13')
console.log('Hola\n\tComo estas')

// 14 Usa plantillas literales para crear una cadena que incluya variables
console.log('   Ejercicio 14')
let nombre = 'Raudy'
let miEdad = 25
console.log(`Hola mi nombre es ${nombre} y tengo ${miEdad} años`)

// 15 Usa indexOf, replace, y includes en una cadena
console.log('   Ejercicio 15')
let cadena = 'Hola como estas espero estes teniendo un buen dia'
console.log(cadena.indexOf('como'))
console.log(cadena.replace('como','estas'))
console.log(cadena.includes('dia'))


// 16 Convierte una cadena que contiene un número decimal a un número flotante y multiplícalo por un entero
console.log('       Ejercicio 16')
let numCadena = '25.3'
let numFlotante = parseFloat(numCadena)
console.log(numFlotante * 3)

// 17 Usa operadores lógicos para evaluar una expresión que incluya tres variables booleanas diferentes
console.log('       Ejercicio 17')
let bol3 = true
let bol4 = false
let bol5 = true
console.log(bol3 && bol4 || bol5)

// 18 Declara una variable sin valor y otra con valor null. Usa operadores ternarios para comprobar si son nulos o indefinidos y asigna valores predeterminados
console.log('       Ejercicio 18')
let sinValor2
let conValor2 = null
console.log(sinValor2 == undefined ? 'No tiene valor' : 'Tiene valor')
console.log(conValor2 == null ? 'No tiene valor' : 'Tiene valor')

// 19 Crea un array y realiza varias operaciones: agregar elementos, eliminar el primer y el último elemento, y usar splice para reemplazar elementos
console.log('       Ejercicio 19')
let listaNombres = ['Raudy', 'Jose', 'Pedro', 'Maria', 'Juan']
listaNombres.push('Luis')
console.log(listaNombres)
listaNombres.shift()
console.log(listaNombres)
listaNombres.pop()
console.log(listaNombres)
listaNombres.splice(1,2,'Carlos') // (posicion, cantidad a eliminar, elemento a agregar)
console.log(listaNombres)

// 20 Usa toFixed y toPrecision para formatear un número flotante a diferentes precisiones
let numeroFlotante = 1110.456789
console.log(numeroFlotante.toFixed(2))
console.log(numeroFlotante.toPrecision(3))

// 21 Escribe una función que genere un número aleatorio entre dos números dados (inclusive).
console.log('       Ejercicio 21')
let nuMax = 10
let numMin = 6
console.log(Math.floor(Math.random() * (nuMax - numMin + 1) + numMin))

// 22 Usa el teorema de Pitágoras para calcular la hipotenusa de un triángulo rectángulo con catetos dados
console.log('       Ejercicio 22')
let catetoA = 3
let catetoB = 4
let hipotenusa = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2))
console.log(hipotenusa)

// 23 Declara dos variables con cadenas y usa un tercer variable temporal para intercambiar sus valores
let texto1 = "primer texto"
let texto2 = "segundo texto"
let temporal = texto1
texto1 = texto2
texto2 = temporal
console.log(texto1)
console.log(texto2)

// 24 Declara una cadena y usa slice para extraer subcadenas específicas
let cadenaExtraccion = 'Hola como estas'
console.log(cadenaExtraccion.slice(5,9))
