// Elementos separados para cada função
const clickArea = document.querySelector(".Clica"); // Área clicável
const counterDisplay = document.querySelector(".Contador"); // Onde mostra o número
const buyButton = document.querySelector(".Compra"); // Botão de compra


// No início:
let cliques = localStorage.getItem('cliquesSalvos') || 0;

// Atualiza o display (usada em ambas funções)
function updateCounter() {
    counterDisplay.textContent = cliques;
}

// Contagem de cliques
clickArea.addEventListener("click", function() {
    cliques++;
    updateCounter();
});

// Sistema de compra
buyButton.addEventListener("click", function() {
    const preco = 10;
    
    if (cliques >= preco) {
        cliques -= preco;
        updateCounter();
        alert("Compra realizada com sucesso!");
    } else {
        alert(`Você precisa de mais ${preco - cliques} cliques!`);
    }
});



// Ao atualizar:
localStorage.setItem('cliquesSalvos', cliques);