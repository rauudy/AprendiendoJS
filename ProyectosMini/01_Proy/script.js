const colorButton = document.getElementById('colorButton');
const colorTitle = document.querySelector('#colorTitle');
const valorHex = document.querySelector('#codigo');

colorButton.addEventListener('click', changeColor);

function changeColor() {
    const randomColorPg = Math.floor(Math.random()*16777215).toString(16); // 16777215 = FFFFFF
    const randomColorTx = Math.floor(Math.random()*16777215).toString(16); // 16777215 = FFFFFF
    const strColorPg = "#"+randomColorPg; // # + FFFFFF
    const strColortx = "#"+randomColorTx; 

    document.body.style.backgroundColor = strColorPg; // Cambia el color de fondo
    colorTitle.style.color = strColortx; // Cambia el color del texto
    valorHex.innerHTML = 'HEX:' + strColorPg; // Muestra el color de fondo
}


/*
Conceptos clave cubiertos:

document.getElementById() - funciona para seleccionar un elemento por su ID

document.querySelector() - funciona para seleccionar un elemento por su selector ... el selector puede ser una clase, un ID, un elemento, etc.

addEventListener() - funciona para agregar un evento a un elemento, como en este caso, un clic

document.body.style.backgroundColor - funciona para cambiar el color de fondo de la página

Math.floor() - redondea un número hacia abajo al número entero más cercano
Math.random() - genera un número aleatorio entre 0 y 1


*/
