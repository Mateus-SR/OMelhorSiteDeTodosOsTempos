// Adiciona a classe ModoClaro para que o sistema de modo escuro funcione
document.body.classList.add('ModoClaro')

// Procura por um elemento com a classe BrancoEscuro e chama a função toggleModoEscuro ao ser clicado
document.querySelector(".BrancoEscuro").addEventListener("click", toggleModoEscuro);

var modoEscuro = false; // Inicia com modo escuro desligado

function toggleModoEscuro() {
    // Simplesmente declarando variaveis para encurtar codigo e melhorar a leitura
    var body = document.body;
    let icone = document.querySelector('.BrancoEscuro .fas');

    if (modoEscuro === false) {
        modoEscuro = true;

        // Troca certos termos por outros
        // (isso deixa o codigo mais limpo e direto, do que a versão antiga)
        body.classList.replace('ModoClaro', 'ModoEscuro');
        icone.classList.replace('fa-moon', 'fa-sun');
    } else {
        modoEscuro = false;

        // Troca certos termos por outros
        // (isso deixa o codigo mais limpo e direto, do que a versão antiga)
        body.classList.replace('ModoEscuro', 'ModoClaro');
        icone.classList.replace('fa-sun', 'fa-moon');
    }
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