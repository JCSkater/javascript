const numero = document.querySelector("#numero");
const botao = document.querySelector("#botao");
const tabuada = document.querySelector('#lista');

botao.addEventListener('click', function(){
    if (numero.value.length == 0) {
        window.alert("Por favor digite um número.")
    } else {
        let num = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tabuada.appendChild(item)
            c++
        }
    }
})