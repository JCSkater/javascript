const botaoAdicionar = document.querySelector("#botao1");
const botaoFinalizar = document.querySelector("#botao2");
const inputNumero = document.querySelector("#numero");

botaoAdicionar.addEventListener("click", function() {
    let campoTexto = document.querySelector("#texto");
    campoTexto = document.createElement('option');
    campoTexto.innerHTML = ` Adicionou o valor ${inputNumero.value} `;
    document.querySelector("#texto").appendChild(campoTexto);
})

botaoFinalizar.addEventListener("click", function() {
    console.log('funcionou botao 2');
})

