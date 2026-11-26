/* Script Menu para Celular */

const botao = document.getElementById("hamburger");
const nav = document.getElementById("nav-principal");

botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.classList.toggle("ativo");
    botao.setAttribute("aria-expanded", aberto);
});



const numeroDestino = "5511940291787"; // troque pelo seu: 55 + DDD + número, só dígitos

document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
        `*Novo contato pelo site*\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

    window.location.href = url;
    this.reset(); // limpa o formulário depois de enviar
});