let inputNumero = document.querySelector("#numero");
let campoTexto = document.querySelector("#texto");
let resultado = document.querySelector("#res");
let valores = []

let botaoAdicionar = document.querySelector("#botao1");
let botaoFinalizar = document.querySelector("#botao2");


botaoAdicionar.addEventListener("click", function() {
    
    if (inputNumero.value >= 1 && inputNumero.value <= 100) {
        campoTexto = document.createElement('option');
        campoTexto.innerHTML = `Valor ${inputNumero.value} adicionado`;
        document.querySelector("#texto").appendChild(campoTexto);
    }else {
        if (inputNumero.value == "") {
            alert('favor digitar um número');
        } else if (inputNumero.value < 1) {
            alert('Favor digitar um número entre 1 e 100');    
        } else if (inputNumero.value > 100) {
            alert('Favor digitar um número entre 1 e 100');
        } else if (inputNumero.value == campoTexto.value) {
            alert('digita um bagulho diferente');
        }
    }
})

botaoFinalizar.addEventListener("click", function() {
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = "Ao todo, temos X números cadastrados.";
    resultado.appendChild(paragrafo);
    paragrafo = document.createElement('p')
    paragrafo.innerHTML = "O maior valor informado foi.";
    resultado.appendChild(paragrafo);
    paragrafo = document.createElement('p')
    paragrafo.innerHTML = "O menor valor informado foi.";
    resultado.appendChild(paragrafo);
    paragrafo = document.createElement('p')
    paragrafo.innerHTML = "Somando todos os valores temos.";
    resultado.appendChild(paragrafo);
    paragrafo = document.createElement('p')
    paragrafo.innerHTML = "A média dos valores digitados é.";
    resultado.appendChild(paragrafo);
})

