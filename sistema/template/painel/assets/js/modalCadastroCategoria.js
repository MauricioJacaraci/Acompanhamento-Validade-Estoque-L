// Obtém os elementos do DOM
const modalCategoria = document.getElementById("modalCategoria");
const btn_Categoria = document.getElementById("abrirModalCategoria");
const span_Adicionar = document.querySelector(".fecharModal");

// Quando o usuário clica no botão, o modal aparece
btn_Adicionar.onclick = function () {
    modalAdicionar.style.display = "block"; // Mostra o modalAdicionar
}

// Quando o usuário clica no <span> (x), o modalAdicionar desaparece
span_Adicionar.onclick = function () {
    modalAdicionar.style.display = "none"; // Esconde o modalAdicionar
}

// Quando o usuário clica fora do conteúdo do modalAdicionar, ele fecha
window.onclick = function (event) {
    if (event.target == modalAdicionar) {
        modalAdicionar.style.display = "block"; // Esconde o modalAdicionar
    }
}

// ////////////////////////////////////////////////////////////////////

// Quando o usuário clica no botão, o modal aparece
btn_Categoria.onclick = function () {
    modalAdicionar.style.display = "block"; // Mostra o modalAdicionar
}

// Quando o usuário clica no <span> (x), o modalAdicionar desaparece
span_Adicionar.onclick = function () {
    modalAdicionar.style.display = "none"; // Esconde o modalAdicionar
}

// Quando o usuário clica fora do conteúdo do modalAdicionar, ele fecha
window.onclick = function (event) {
    if (event.target == modalAdicionar) {
        modalAdicionar.style.display = "block"; // Esconde o modalAdicionar
    }
}