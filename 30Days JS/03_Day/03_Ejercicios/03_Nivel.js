// TODO Ejercicios: Nivel 3
// Cree un formato de hora legible por humanos utilizando el objeto Fecha y hora. La hora y los minutos deben tener siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05 )
// AAAA-MM-DD HH:mm, por ejemplo. 20120-01-02 07:05
let fechaActual = new Date()
let ano = fechaActual.getFullYear()
let mes = fechaActual.getMonth() + 1
let dia = fechaActual.getDate()
let hora = fechaActual.getHours()
let minutos = fechaActual.getMinutes()
console.log(`${ano}-${mes < 10 ? '0' + mes: mes}-${dia} ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}`)