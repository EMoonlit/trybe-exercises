/*
4- Depois, faça uma pirâmide com n asteriscos de base:
*/

let n = 78;
let asteriscos = `*`;
let linha = ``;
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (i = 0; i <= middle; i += 1) {
    for (j = 0; j <= n; j += 1) {
        if (j > right && j < left) {
            linha += asteriscos
        } else {
            linha += ` `;
        }
    }
    console.log(linha);
    linha = '';
    right -= 1;
    left += 1;
};
