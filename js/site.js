document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ano").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const numero = "5531972479061";
    const mensagem = "Olá! Vim pelo site e gostaria de agendar uma aula experimental.";

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    document.getElementById("whatsapp-float").href = link
})