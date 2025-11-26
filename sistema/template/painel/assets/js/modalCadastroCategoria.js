// Obtém os elementos do DOM
const modalCategoria = document.getElementById("modalCategoria");
const btn_Categoria = document.getElementById("abrirModalCategoria");
const fechar_categoria = document.querySelector(".fecharModal2");


// Quando o usuário clica no botão, o modal aparece
btn_Categoria.onclick = function () {
    modalCategoria.style.display = "block"; // Mostra o modalCategoria
}

// Quando o usuário clica no <span> (x), o modalCategoria desaparece
fechar_categoria.onclick = function () {
    modalCategoria.style.display = "none"; // Esconde o modalCategoria
}

// Quando o usuário clica fora do conteúdo do modalCategoria, ele fecha
window.onclick = function (event) {
    if (event.target == modalCategoria) {
        modalCategoria.style.display = "block"; // Esconde o modalCategoria
    }
}