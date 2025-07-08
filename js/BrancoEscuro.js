// Aplica a classe inicial
document.body.classList.add('ModoClaro');

// Verifica o modo salvo (convertendo string para boolean)
let modoEscuro = localStorage.getItem('Modo') === 'true'; // Corrigido aqui

// Aplica o modo salvo ao carregar a página
if (modoEscuro) {
    document.body.classList.replace('ModoClaro', 'ModoEscuro');
    document.querySelector('.BrancoEscuro .fas')?.classList.replace('fa-moon', 'fa-sun');
}

// Event listener
document.querySelector(".BrancoEscuro").addEventListener("click", toggleModoEscuro);

function toggleModoEscuro() {
    const body = document.body;
    const icone = document.querySelector('.BrancoEscuro .fas');
    
    modoEscuro = !modoEscuro; // Inverte o estado
    
    if (modoEscuro) {
        body.classList.replace('ModoClaro', 'ModoEscuro');
        icone?.classList.replace('fa-moon', 'fa-sun');
    } else {
        body.classList.replace('ModoEscuro', 'ModoClaro');
        icone?.classList.replace('fa-sun', 'fa-moon');
    }
    
    localStorage.setItem('Modo', modoEscuro); // Armazena como string
}

/*  Codigo antigo
function toggleModoEscuro() {
    // Simplesmente declarando variaveis para encurtar codigo e melhorar a leitura
    var body = document.body;
    let icone = document.querySelector('.BrancoEscuro .fas');

    if (modoEscuro === false) {
        modoEscuro = true;
        body.style.backgroundColor = "#09474a";
        body.style.color = "#b7e1cd";

        icone.classList.replace('fa-moon', 'fa-sun');
    } else {
        modoEscuro = false;
        body.style.backgroundColor = "#b7e1cd";
        body.style.color = "#09474a";

        icone.classList.replace('fa-sun', 'fa-moon');
    }
}
*/