// Generar un número aleatorio entre 1 y 100
let numberRandom = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let numberEnter = document.getElementById('numberEnter');
let menssage = document.getElementById('menssage');
let attempts = document.getElementById('attempts')
let count = 0

// Función para comprobar el número ingresado por el usuario
function checkResult() {
    count++
    attempts.textContent = `Intentos: ${count}`

    let numberEntered = parseInt(numberEnter.value);

    if (isNaN(numberEntered) || numberEntered < 1 || numberEntered > 100) {
        menssage.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    if (numberEntered === numberRandom) {
        menssage.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        menssage.style.color = 'green';
        numberEnter.disabled = true;
    } else if (numberEntered < numberRandom) {
        menssage.textContent = 'El número es mayor. Intenta de nuevo.';
        menssage.style.color = 'red';

    } else {
        menssage.textContent = 'El número es menor. Intenta de nuevo.';
        menssage.style.color = 'black';
    }
}