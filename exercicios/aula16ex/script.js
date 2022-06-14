let inputNumero = document.querySelector("#numero");
let campoTexto = document.querySelector("#texto");
let resultado = document.querySelector("#res");
let valores = []

let botaoAdicionar = document.querySelector("#botao1");
let botaoFinalizar = document.querySelector("#botao2");

botaoAdicionar.addEventListener("click", function() {
    if (inputNumero.value >= 1 && inputNumero.value <= 100) {
        valores.push(inputNumero.value);
        campoTexto = document.createElement('option');
        campoTexto.innerHTML = `Valor ${inputNumero.value} adicionado`;
        document.querySelector("#texto").appendChild(campoTexto);
    }else {
        if (inputNumero.value == "") {
            alert('favor digitar um número');
        } else if (inputNumero.value < 1 && inputNumero.value > 100) {
            alert('Favor digitar um número entre 1 e 100');    
        } 
    }
    inputNumero.value = ''
    inputNumero.focus()
    resultado.innerHTML = ''
})

botaoFinalizar.addEventListener("click", function() {
    if (campoTexto.value == '') {
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior;

        let paragrafo = document.createElement('p')
        paragrafo.innerHTML += `Ao todo, temos ${total} números cadastrados.`;
        paragrafo.innerHTML += "<p>O maior valor informado foi.</p>";
        paragrafo.innerHTML += "<p>O menor valor informado foi.</p>";
        paragrafo.innerHTML += "<p>Somando todos os valores temos.</p>";
        paragrafo.innerHTML += "<p>A média dos valores digitados é.</p>";
        resultado.appendChild(paragrafo);
    }
});