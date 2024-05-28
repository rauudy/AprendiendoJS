// ! Nivel del ejericio 1

// Declare una variable llamada desafío y asígnela a un valor inicial '30 Días de JavaScript'.
let desafio = '30 Dias de JavaScript'

// Imprima la cadena en la consola del navegador usando consola.log()
console.log(desafio)

// Imprime el longitud de la cadena en la consola del navegador usando consola.log()
console.log(desafio.length)

// Cambie todos los caracteres de la cadena a letras mayúsculas usando a mayúsculas() método
console.log(desafio.toUpperCase())
console.log(desafio.toLocaleUpperCase())

// Cambie todos los caracteres de la cadena a letras minúsculas usando a minúsculas() método
console.log(desafio.toLowerCase())
console.log(desafio.toLocaleLowerCase())

// Corta (corta) la primera palabra de la cadena usando substrato() o subcadena() método
console.log(desafio.substring(5, 6)) // tiene posicion inicial y final
console.log(desafio.substr(5, 6)) // tiene posicion inicial y longitud desde la posicion inicial
console.log(desafio.substr(0,2))

// Corta la frase Días de JavaScript de 30 Días de JavaScript.
console.log(desafio.substring(3, 21))

// Compruebe si la cadena contiene una palabra Scipt usando includes() método
console.log(desafio.includes('Script'))

// dividir el string en un array  usando split() método
console.log(desafio.split(''))

// Divida la cadena 30 días de JavaScript en el espacio usando split() método
console.log(desafio.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split la cadena en la coma y cambiarla a una matriz.
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split(', '))

// Cambie 30 días de JavaScript a 30 días de Python usando replace() método.
console.log(desafio.replace('JavaScript', 'Python'))

// ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Usar charAt() método.
console.log(desafio.charAt(15))

// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript'? charCodeAt()
console.log(desafio.charCodeAt(11))

// Usar indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf('a'))
console.log(desafio[5])

// Usar lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf('a'))
console.log(desafio[14])

// Usar indexOf para encontrar la posición de la primera aparición de la palabra 'porque' en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
let frase = 'No se puede por terminar una oración con porque porque porque es una conjunción'
console.log(frase.indexOf('porque'))

// Usar lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
console.log(frase.lastIndexOf('porque'))

// Usar search() para encontrar la posición de la primera aparición de la palabra 'porque' en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
console.log(frase.search('porque'))

// Usar trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript '.
console.log(desafio)
console.log(desafio.trim(' '))

// Usar startsWith() con la cadena 30 Días de JavaScript y hacer que el resultado sea verdadero
console.log(desafio.startsWith('30'))

// Usar endsWith() método con la cadena 30 Días de JavaScript y hacer que el resultado sea verdadero
console.log(desafio.endsWith('t'))

// Usar match() para encontrar todos los a en 30 días de JavaScript
console.log(desafio.match(/a/gi))

// Usar concat() y fusionar '30 Days of' y 'JavaScript' en una sola cadena, '30 Days Of JavaScript''
let primera = '30 Days of'
let segunda = 'JavaScript'
console.log(primera.concat(' ', segunda))

// Usar repeat() método para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2))