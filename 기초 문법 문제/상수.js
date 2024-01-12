let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')

// case 1) 권장 답안
let a = input[0].split(' ')[0];
let b = input[0].split(' ')[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));




