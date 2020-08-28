/*
09. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
*/
let numbers = []

for (i = 0; i < 26; i += 1) {
    numbers.push(i)
    console.log(`Adiciando o número ${numbers[i]} ao Array!`)
}

console.log(numbers)

for (i = 0; i < numbers.length; i += 1) {
    console.log(`A divisão de ${numbers[i]} por 2, é: ${numbers[i]/2}`)
}