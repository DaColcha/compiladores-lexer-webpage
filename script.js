// Obtener los elementos relevantes del DOM
const cards = document.querySelectorAll('.carta'); // Obtener todas las tarjetas
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');

let currentIndex = 0; // Inicializar el índice actual

// Función para mostrar la tarjeta actual
function mostrarTarjeta(index) {
    // Ocultar todas las tarjetas
    cards.forEach((card) => {
        card.classList.remove('visible');
    });

    // Mostrar la tarjeta actual
    cards[index].classList.add('visible');
}

// Función para manejar el botón "Anterior"
function anterior() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1;
    }
    mostrarTarjeta(currentIndex);
}

// Función para manejar el botón "Siguiente"
function siguiente() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    mostrarTarjeta(currentIndex);
}

// Agregar controladores de eventos a los botones
anteriorBtn.addEventListener('click', anterior);
siguienteBtn.addEventListener('click', siguiente);

// Mostrar la tarjeta inicial al cargar la página
mostrarTarjeta(currentIndex);