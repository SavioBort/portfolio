const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Mensagem enviada com sucesso!";
            } else {
                console.log(response);
                result.innerHTML = "json.message";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('[aria-controls="mobile-menu"]');
    const menu = document.getElementById('mobile-menu');
    const openIcon = button.querySelector('svg:first-child');
    const closeIcon = button.querySelector('svg:last-child');

    // Função para abrir ou fechar o menu
    function toggleMenu() {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden', isExpanded);
        openIcon.classList.toggle('hidden', !isExpanded);
        closeIcon.classList.toggle('hidden', isExpanded);
    }

    // Adiciona evento de clique ao botão
    button.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar fora
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            if (!menu.classList.contains('hidden')) {
                toggleMenu();
            }
        }
    });
});