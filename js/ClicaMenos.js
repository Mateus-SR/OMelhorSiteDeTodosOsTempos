/*
    Boa parte desse codigo foi refatorado pelo Deepseek, para fins de estudo e aprendizado.
    Futuramente, tudo aqui estará devidamente documentado/analisado.
    (e vou evitar usar codigos prontos de IAs................)

*/

document.addEventListener('DOMContentLoaded', inicializarDisplay);

// Elementos
const clickArea = document.querySelector(".Clica");
const counterDisplay = document.querySelector(".Contador");
const Powerup_CliqueSegundos = document.querySelector(".Powerup_CliqueSegundos");

// Variáveis de estado
let cliques = Number(localStorage.getItem('cliquesSalvos')) || 0;
let Qtnd_Powerup_CliqueSegundos = Number(localStorage.getItem('Var_Qtnd_Powerup_CliqueSegundos')) || 0;
let timerInterval = null;  // Referência para o intervalo
let tempoBase = 10000;     // Tempo base em ms

// 1. EXIBIÇÃO INICIAL (corrige o problema do placeholder)
function inicializarDisplay() {
    counterDisplay.textContent = "R$" + cliques;
    Powerup_CliqueSegundos.textContent = `[R$10] ${Qtnd_Powerup_CliqueSegundos} cliques/${tempoBase/1000} segundos`;
    
    // Inicia o timer se já tiver powerups
    if (Qtnd_Powerup_CliqueSegundos > 0) {
        iniciarTimer();
    }
}

// 2. SISTEMA DE TIMER FLEXÍVEL
function iniciarTimer() {
    // Para qualquer timer existente
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Calcula o tempo atualizado (para futuros powerups)
    const tempoAtual = calcularTempoAtual();
    
    // Inicia novo timer
    timerInterval = setInterval(() => {
        cliques += Qtnd_Powerup_CliqueSegundos;
        updateCounter();
    }, tempoAtual);
}

// 3. FUNÇÃO PARA FUTURAS MELHORIAS (redução de tempo)
function calcularTempoAtual() {
    // Aqui você pode adicionar lógica de redução
    // Ex: return tempoBase / (1 + bonusDeVelocidade);
    return tempoBase;
}

// 4. ATUALIZAÇÃO DO CONTADOR
function updateCounter() {
    counterDisplay.textContent = "R$" + cliques;
    localStorage.setItem('cliquesSalvos', cliques.toString());
}

// 5. SISTEMA DE COMPRA
Powerup_CliqueSegundos.addEventListener("click", function() {
    const preco = 10;
    
    if (cliques >= preco) {
        cliques -= preco;
        Qtnd_Powerup_CliqueSegundos++;
        
        // Atualiza exibição e storage
        Powerup_CliqueSegundos.textContent = `[R$10] ${Qtnd_Powerup_CliqueSegundos} cliques/${tempoBase/1000} segundos`;
        localStorage.setItem('Var_Qtnd_Powerup_CliqueSegundos', Qtnd_Powerup_CliqueSegundos.toString());
        
        // Inicia/Reinicia o timer
        iniciarTimer();
        updateCounter();
    } else {
        alert(`Você precisa de mais ${preco - cliques} cliques!`);
    }
});

// 6. CONTADOR DE CLIQUES
clickArea.addEventListener("click", function() {
    cliques++;
    updateCounter();
});

// INICIALIZAÇÃO
inicializarDisplay();