// Obtener elementos del DOM
const clickButton = document.getElementById("clickButton");
const questionModal = document.getElementById("questionModal");
const userAnswer = document.getElementById("userAnswer");
const submitAnswer = document.getElementById("submitAnswer");
const closeModal = document.querySelector(".close");

// Pregunta a mostrar
const correctAnswer = "21 de junio del 2024"; // Respuesta correcta (en minúsculas)

// Manejar clic en el botón
clickButton.onclick = function() {
    questionModal.style.display = "block"; // Mostrar el modal
}

// Manejar clic en el botón de enviar respuesta
submitAnswer.onclick = function() {
    const answer = userAnswer.value.trim().toLowerCase(); // Obtener respuesta del usuario

    if (answer === correctAnswer) {
        // Redirigir a la página si la respuesta es correcta
        window.location.href = "FLORES.html"; // Cambiar la URL de destino
    } else {
        alert("Amor!!!❤️ respuesta incorrecta, el formato debe ser (dia-mes-año) ejemplo: 7 de enero del 2000"); // Mensaje de error
        userAnswer.value = ""; // Limpiar el input
    }
}

// Manejar clic en el botón de cerrar
closeModal.onclick = function() {
    questionModal.style.display = "none"; // Cerrar el modal
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target === questionModal) {
        questionModal.style.display = "none"; // Cerrar el modal
    }
}
