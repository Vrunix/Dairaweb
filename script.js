// Cambio de título al cambiar de pestaña
let tituloOriginal = document.title;

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "Vuelve, te extraño 💔";
    } else {
        document.title = tituloOriginal;
    }
});

// Control de música
let musica = document.getElementById("musica");
let botonMusica = document.getElementById("toggleMusic");

botonMusica.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        botonMusica.textContent = "Pausar Música";
    } else {
        musica.pause();
        botonMusica.textContent = "Reproducir Música";
    }
});


