// Elementos separados para cada função
const clickArea = document.querySelector(".Clica"); // Área clicável
const counterDisplay = document.querySelector(".Contador"); // Onde mostra o número
const Powerup_CliqueSegundos = document.querySelector(".Powerup_CliqueSegundos"); // Botão de compra


// No início:
let cliques = localStorage.getItem('cliquesSalvos') || 0;
let Qtnd_Powerup_CliqueSegundos = localStorage.getItem('cliquesSalvos') || 0;
let Timer_Powerup_CliqueSegundos = localStorage.getItem('cliquesSalvos') || 10000;

// Atualiza o display (usada em ambas funções)
function updateCounter() {
    counterDisplay.textContent = "R$" + cliques;
    // Ao atualizar:
    localStorage.setItem('cliquesSalvos', cliques);
}

// Contagem de cliques
clickArea.addEventListener("click", function() {
    cliques++;
    updateCounter();
});

setInterval (Func_Powerup_CliqueSegundos, Timer_Powerup_CliqueSegundos);

function Func_Powerup_CliqueSegundos() {
    cliques += Qtnd_Powerup_CliqueSegundos;
    updateCounter();

}


// Sistema de compra
Powerup_CliqueSegundos.addEventListener("click", function() {
    const preco = 10;
    
    if (cliques >= preco) {
        cliques -= preco;
        updateCounter();
        alert("Compra realizada com sucesso!");
        Qtnd_Powerup_CliqueSegundos++;
    } else {
        alert(`Você precisa de mais ${preco - cliques} cliques!`);
    }
});

