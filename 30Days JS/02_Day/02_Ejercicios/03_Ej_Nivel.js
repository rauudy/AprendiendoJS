// ! Nivel del ejericio 3

// 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y otros todavía están buscando su amor.' contar el número de palabras amor en esta frase.
let frase = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y otros todavía están buscando su amor.'
console.log(frase.match(/amor/g).length)

// Usar match() para contar el número de todos porque en la siguiente frase:'No se puede terminar una oración con porque porque porque es una conjunción'
frase = 'No se puede terminar una oración con porque porque porque es una conjunción'
console.log(frase.match(/porque/g).length)

// Limpie el siguiente texto y encuentre la palabra más frecuente (pista, use reemplazo y expresiones regulares).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = sentence.replace(/[^a-zA-Z ]/g, '')
console.log(cleanSentence)

// Calcule el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Gana 5.000 euros de salario al mes, 10.000 euros de bonificación anual, 15.000 euros de cursos en línea al mes..'
frase = 'Gana 5.000 euros de salario al mes, 10.000 euros de bonificación anual, 15.000 euros de cursos en línea al mes..'
let numeros = frase.match(/\d+/g)
let num1 = numeros[0] + numeros[1] 
let num2 = numeros[2] + numeros[3]
let num3 = numeros[4] + numeros[5]
console.log(parseInt(num1) + parseInt(num2) + parseInt(num3))
