// se usa el % en las variables que almacenan contenido del html por convenio no tiene otra finalidad no es como en php que es obligatorio
// declaración de las constantes cogiendo el valor del html.
const $time = document.querySelector('time');
const $p = document.querySelector('p');
const $input = document.querySelector('input');
// constante con el tiempo inicial de la prueba-
const INITIAL_TIME = 30;
// constante con el texto del juego
const TEXT = "the quick brown fox jumps over the lazy dog and Antonio is triying to clone monkey type for fun and profit using vanila js for the typing test speed";
// variables para almacenar el array de letras y el tiempo que se va a ir actualizando en la pantalla
let words = [];
let currentTime = INITIAL_TIME;

// puesta en marcha de las funciones
initEvents();
initGame();

// declaración de las funciones
// todo: mirar por que no funciona el tiempo, el html no coge el tiempo que se le pasa por el js
function initGame() {
    words = TEXT.split(' ').slice(0, 32);
    currentTime = INITIAL_TIME;
    $time.textContent = currentTime;
}

function initEvents() { }

