/*
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
*/

let n = 28;
let asteriscos = `*`;
let linha = ``;

for (i = 0; i <= n; i += 1) {
    console.log(linha);
    linha += asteriscos;
}

/*
R: Desta vez o laço de repetição for está exibindo a linha atual e depois adicionando um "*" e ele vai se repetir "n" número de vezes. 
*/