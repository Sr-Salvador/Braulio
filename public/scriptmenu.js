/* Script Menu para Celular */

const botao = document.getElementById("hamburger");
const nav = document.getElementById("nav-principal");

botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.classList.toggle("ativo");
    botao.setAttribute("aria-expanded", aberto);
});



/* Script Pop up */

const popup = document.getElementById('meu-popup');
const btnFechar = document.getElementById('btn-fechar');

// Abre o pop-up assim que a página carrega totalmente
window.addEventListener('DOMContentLoaded', () => {
    popup.classList.add('mostrar');
});

// Fecha o pop-up ao clicar no botão
btnFechar.addEventListener('click', () => {
    popup.classList.remove('mostrar');
});