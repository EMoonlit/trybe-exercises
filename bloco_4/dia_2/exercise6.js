/*
06. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numOdd = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        numOdd += 1;
    }
}

if (numOdd === 0) {
    console.log(`Nenhum valor impar encontrado`);
} else {
    console.log(`Foram encontrados ${numOdd} numeros ímpares`)
}