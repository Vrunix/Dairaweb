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

// Comentarios
document.getElementById("enviarComentario").addEventListener("click", function () {
    let comentarioTexto = document.getElementById("comentarioTexto").value.trim();
    if (comentarioTexto !== "") {
        let nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");
        nuevoComentario.textContent = comentarioTexto;

        document.getElementById("comentariosLista").appendChild(nuevoComentario);
        document.getElementById("comentarioTexto").value = ""; // Limpiar el textarea
    }
});





