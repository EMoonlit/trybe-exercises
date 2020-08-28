/*
02. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
    console.log(numbers[i])
    

}

console.log(`A soma de todos números anteriores é: ${sum}`)