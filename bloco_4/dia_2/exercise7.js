/*
07. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerNumber = 1000;

for ( i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < lowerNumber) {
        lowerNumber = numbers[i]
    }
}

console.log(lowerNumber)