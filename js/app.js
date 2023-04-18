const horasElemento = document.querySelector('#horas');
const minutosElemento = document.querySelector('#minutos');
const segundosElemento = document.querySelector('#segundos');
const milisegundosElemento = document.querySelector('#milisegundos');

const iniciarBoton = document.querySelector('#iniciar');
const resetearBoton = document.querySelector('#resetear');
const pausarBoton = document.querySelector('#pausar');

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;


function actualizarCronometro() {
    milisegundos++;

    if (milisegundos == 1000) {
        milisegundos = 0;
        segundos++;
    }

    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    const horasFormateadas = horas < 10 ? '0' + horas : horas;
    const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
    const milisegundosFormateados = milisegundos < 10 ? '00' + milisegundos : (milisegundos < 100 ? '0' + milisegundos : milisegundos);

    horasElemento.textContent = horasFormateadas;
    minutosElemento.textContent = minutosFormateados;
    segundosElemento.textContent = segundosFormateados;
    milisegundosElemento.textContent = milisegundosFormateados;
}

function iniciarCronometro() {
    if (!intervalo) {
        intervalo = setInterval(actualizarCronometro, 1);
    }
}


function pausarCronometro() {

    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    }
}


function resetearCronometro() {

    pausarCronometro();
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    horasElemento.textContent = '00';
    minutosElemento.textContent = '00';
    segundosElemento.textContent = '00';
    milisegundosElemento.textContent = '000';
}


iniciarBoton.addEventListener('click', iniciarCronometro);
pausarBoton.addEventListener('click', pausarCronometro);
resetearBoton.addEventListener('click', resetearCronometro);