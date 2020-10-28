const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

console.log(setTimeout(() => pushNumber(numbers, 1), 3000));
console.log(numbers);
console.log(pushNumber(numbers, 2));
console.log(numbers);
console.log(pushNumber(numbers, 3));
console.log(numbers);

setTimeout(() => assert.deepEqual(numbers, [2, 3, 1]), 3000);