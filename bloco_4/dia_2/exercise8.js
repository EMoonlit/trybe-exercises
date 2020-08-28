/*
08. Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
*/

let numbers = []

for (i = 0; i < 26; i += 1) {
    numbers.push(i)
    console.log(`Adiciando o número ${numbers[i]} ao Array!`)
}

console.log(numbers)