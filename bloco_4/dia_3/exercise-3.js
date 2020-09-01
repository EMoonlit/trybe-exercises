/*
3- Agora inverta o lado do triângulo. Por exemplo:
*/

let n = 28;
let asteriscos = `*`;
let linha = ``;
let coluna;
let posicao = n;

for (i = 0; i < n; i += 1) {
    for (coluna = 0; coluna <= n; coluna += 1) {
        if (coluna < posicao) {
            linha += ' ';
        } else {
            linha += asteriscos;
        }
    }
    console.log(linha);
    linha = '';
    posicao -= 1;
};
