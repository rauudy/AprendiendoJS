// ! Nivel del ejericio 2

// Usando console.log() imprima la siguiente declaración:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// Usando console.log() imprima la siguiente cita de la Madre Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// Compruebe si el tipo de '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log('10'== 10)

// Compruebe si parseFloat('9.8') es igual a 10; si no, hágalo exactamente igual a 10.
console.log(parseFloat('9.8') == 10)
console.log(parseFloat('10') === 10)

// Compruebe si 'on' se encuentra tanto en Python como en jargon
console.log('Python'.includes('on'))
console.log('jargon'.includes('on'))

// Espero que este curso no esté lleno de jargon.. Comprobar si jargon está en la oración.
console.log('Espero que este curso no esté lleno de jargon..'.includes('jargon'))

// Genera un número aleatorio entre 0 y 100 inclusive.
console.log(Math.floor(Math.random() * 101))

// Genera un número aleatorio entre 50 y 100 inclusive.
console.log(Math.floor(Math.random() * 51 ) + 50)

// Genera un número aleatorio entre 0 y 255 inclusive.
console.log(Math.floor(Math.random()*256))

// Acceda a los caracteres de cadena 'JavaScript' usando un número aleatorio.
let cadena = 'JavaScript'
console.log(cadena[Math.floor(Math.random() * cadena.length)])

// Utilice console.log() y caracteres de escape para imprimir el siguiente patrón.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

// Usar substrato para cortar la frase Porque porque porque de la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
let frase = 'No se puede terminar una oración con porque porque porque es una conjunción'
console.log(frase.substr(37, 20))