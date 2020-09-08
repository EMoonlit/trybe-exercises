/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

function indiceDoMaiorValor(arrayDeTeste) {
    let indiceMaior = 0;
    for ( i in arrayDeTeste) {
        if (arrayDeTeste[indiceMaior] < arrayDeTeste[i]) {
            indiceMaior = i;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]));