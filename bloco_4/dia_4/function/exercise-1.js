/*
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/

function verificarPalindromo (palavra) {
    let arrayLetras = palavra.split(``);
    let simPalindromo = true;
    for (i in arrayLetras) {
        if (arrayLetras[i] != palavra[(palavra.length -1)- i]) {
            simPalindromo = false;
        }
    }
    return simPalindromo
}

function verificarPalindromo(string) {
    let reverso = string.split(``).reverse().join(``);
    if (reverso === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarPalindromo(`arara`));
console.log(verificarPalindromo(`desenvolvimento`));