let num = []
num.push(6, 8, 3, 9, 5)
num.push(1)
/*
console.log(`O meu vetor é: ${num}`)
console.log(`O tamanho do meu vetor é: ${num.length}`)

for(let index=0; index < num.length; index++){
    console.log(num[index])
}
*/

for(let index in num){
    console.log(`A posição ${index} tem o valor ${num[index]}`)
}

let posicao = num.indexOf(7)

if(posicao == -1) {
    console.log("Valor não encontrado")
} else {
    console.log(`O valor ${num[3]} está na posição ${posicao}`)
}