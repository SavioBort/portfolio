<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sávio Bortoline</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>
    <!-- Outros conteúdos do site -->

    <section class="relative isolate overflow-hidden bg-black text-white py-8 flex flex-col items-center justify-center">
        <h1 class="text-xl text-green-500 mb-4"><b>Contato</b></h1>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">
            Entre em contato
        </h2>
        <form action="process_form.php" method="POST" class="w-full max-w-4xl" id="contactForm">
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <label for="nome" class="block text-sm font-bold mb-2">Nome</label>
                    <input id="nome" type="text" name="nome" placeholder="Seu nome" required
                        class="appearance-none block w-full bg-gray-800 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700">
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <label for="email" class="block text-sm font-bold mb-2">E-mail</label>
                    <input id="email" type="email" name="email" placeholder="Seu e-mail" required
                        class="appearance-none block w-full bg-gray-800 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700">
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <label for="mensagem" class="block text-sm font-bold mb-2">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" rows="8" required
                        class="appearance-none block w-full bg-gray-800 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"></textarea>
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <div class="g-recaptcha" data-sitekey="6LfwuiIqAAAAALAxRQi1nmUYW_algNUKqHYCcqbL"></div>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <button type="submit" id="submitButton"
                    class="inline-block px-6 py-3 text-base font-semibold text-white bg-green-700 rounded-full hover:bg-green-600">
                    ENVIAR MENSAGEM
                </button>
            </div>
        </form>
    </section>
</body>
</html>
