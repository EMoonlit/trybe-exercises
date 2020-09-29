/* Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
*/

const maiorPalavra = frase => {
    let fraseArray = frase.split(' ');
    let tamanhoFrase = 0;
    let resultado = '';

    for (const palavra of fraseArray) {
        if (palavra.length > tamanhoFrase) {
            tamanhoFrase = palavra.length;
            resultado = palavra;
        }
    }
    return resultado;
}
console.log(maiorPalavra(`Testando o retorno da maior palavra que deve ser RESPECTIVAMENTE`));