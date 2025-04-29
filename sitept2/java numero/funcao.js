// Gera um número aleatório entre 0 e 99
let numeroAleatorio = Math.floor(Math.random() * 100);

// Função para adivinhar o número
function adivinhar() {
    // Obtém o número digitado pelo usuário
    let numeroUsuario = parseInt(document.getElementById("numeroInput").value);

    // Verifica se o número é válido
    if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 99) {
        alert("Por favor, insira um número entre 0 e 99!");
        return;
    }

    // Elemento de resultado
    let resultadoElemento = document.getElementById("resultado");

    // Verifica a adivinhação do usuário
    if (numeroUsuario === numeroAleatorio) {
        resultadoElemento.innerHTML = "Parabéns! Você acertou!";
        resultadoElemento.style.setProperty("background-color", "green"); // Cor verde se acertar
    } else {
        resultadoElemento.innerHTML = "Você errou! O número correto era " + numeroAleatorio + ". Tente novamente!";
        resultadoElemento.style.setProperty("background-color", "red"); // Cor vermelha se errar
    }
}
