//exercise 1

let a = 10
let b = 20

console.log("Váriaveis usadas no momento: a =", a, "e váriavel b =", b)

let adicao = a + b 
console.log("Adição", a, "+", b," é igual à:", adicao)

let subtracao = a - b
console.log("Subtração", a, "-", b, " é igual à:", subtracao)

let multiplicacao = a * b
console.log("Multiplicação", a, "*", b, " é igual à:", multiplicacao)

let divisao = a / b
console.log("Divisão", a, "/", b, " é igual à:", divisao)

let modulo = a % b
console.log("Módulo, ou resto da divisão", a, "%", b, " é igual à:", modulo)

//exercise 2

let compare1 = a > b
console.log("Comparando:", a, ">", b, "Resultado =", compare1)

let compare2 = a < b
console.log("Comparando:", a, "<", b, "Resultado =", compare2)

//exercise 3

let c = 80
console.log("Encontrando o maior e menor número dentre 3 numeros, adicionado a váriavel c =", c)
if ( a > b && b > c) {
    console.log(a, "é o maior");
} else if ( b > a && a > c) {
    console.log(b, "é o maior número")
} else {
    console.log(c, "é o maior número")
}

//exercise 4

let numero1 = 0

if( numero1 < 0) {
    console.log("o número", numero1, "é negativo!")
} else if (numero1 > 0) {
    console.log("o número", numero1, "é positivo!")
} else {
    console.log("O número recebido é igual a", numero1)
}

//exercise 5

let angulo1 = 0
let angulo2 = 60
let angulo3 = 60

let somaDosAngulos = angulo1 + angulo2 + angulo3
if (somaDosAngulos === " "){
    console.log("Erro!")
} else if (somaDosAngulos == 180) {
    console.log(true)
} else {
    console.log(false)
} 


//exercise 6

let peca = "Rei"
let nomeDaPeca = peca.toLowerCase();
switch(nomeDaPeca){
    case 'rei':
            console.log('é o Rei, ele pode se movimentar..');
        break;
    case 'rainha':
            console.log('é a Rainha, ela pode se movimentar...')

}