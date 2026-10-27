
const botao = document.getElementById("hamburger");
const nav = document.getElementById("nav-principal");

botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.classList.toggle("ativo");
    botao.setAttribute("aria-expanded", aberto);
});
