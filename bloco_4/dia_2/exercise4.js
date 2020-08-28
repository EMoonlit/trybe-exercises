/*
04. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
    console.log(numbers[i])
}

let average = sum / numbers.length;

console.log(`A soma de todos números anteriores é: ${sum}`);
console.log(`A média de todos números anteriores é: ${average}`);


if (average > 20) {
    console.log(`Valor da média ${average} é maior que 20`)
} else {
    console.log(`Valor da média ${average} é menor ou igual a 20`)
}

