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
document.getElementById('contactForm').addEventListener('submit', function (event) {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        // Se a resposta do reCAPTCHA estiver vazia, mostra um alerta e previne o envio do formulário
        alert('Por favor, complete o reCAPTCHA.');
        event.preventDefault(); // Previne o envio do formulário
    }
});
