/*
1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo: 
*/

let n = 28;
let asteriscos = `*`;
let linha = ``;

for (i = 0; i < n; i += 1) {
    linha += asteriscos;
};

for (i = 0; i < n; i += 1) {
    console.log(linha)
};

/*
R:  O primeiro For adiciona na variável linha a quantidade N, em asteriscos.
    O segundo For imprime linha n número de vezes.
*/