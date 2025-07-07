// Para funcionar com MÚLTIPLOS spoilers:
document.querySelectorAll(".Revelador").forEach(botao => {
    botao.addEventListener("click", toggleRevela);
});

function toggleRevela() {
    // Encontra o elemento associado a ESTE botão
    const revelar = this.nextElementSibling; // Assume que o conteúdo está logo após o botão
    
    if (revelar.classList.contains('Esconde')) {
        revelar.classList.replace('Esconde', 'Mostra');
    } else {
        revelar.classList.replace('Mostra', 'Esconde');
    }
}