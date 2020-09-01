let n = 75;
let lineInput = [];
let baseMatrix = [];
let symbol = `*`;
let matrix = [];
let left = 1;
let right = n - 2;

for (lineColumn = 0; lineColumn < n; lineColumn += 1) {
    baseMatrix[lineColumn] = symbol;
}

matrix[0] = baseMatrix;

for ( i = 1; i < n; i += 1) {
    for (lineColumn = 0; lineColumn < n; lineColumn += 1) {
        if (lineColumn === left || lineColumn === right) {
            lineInput[lineColumn] = symbol;
        } else {
            lineInput[lineColumn] = ` `;
        }
    }
    matrix[i] = lineInput;
    left += 1;
    right -= 1;
    lineInput = [];
    if (left > right) {
        break;
    }
}

let result = ``;
for (i = matrix.length - 1; i >= 0; i -= 1){
    for (lineColumn = 0; lineColumn < n; lineColumn += 1) {
        result = result + matrix[i][lineColumn];
    }
    console.log(result);
    result = ``;
}