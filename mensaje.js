var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
// Reproducir música al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.currentTime = 5; // Establece el tiempo de inicio en 11 segundos
    backgroundMusic.play().catch(error => {
        console.error("No se pudo reproducir la música: ", error);
    });
});

// Mostrar el botón después de 3 segundos
setTimeout(() => {
    document.querySelector('.modal-button').classList.add('visible');
}, 3000);

// Cuando el usuario hace clic en el botón, abre el modal
document.getElementById("openModalBtn").onclick = function() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block"; // Asegúrate de que se muestre el modal
    const greetingsSpans = modal.querySelectorAll('.modal-greetings > span');
    greetingsSpans.forEach((span, index) => {
        // Reinicia la animación
        span.style.animation = 'none';
        setTimeout(() => {
            span.style.animation = '';
            span.style.animationDelay = `${index * 0.2}s`; // Ajusta el retraso según el índice
        }, 10);
    });
};

// Cuando el usuario hace clic en la "X", cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}