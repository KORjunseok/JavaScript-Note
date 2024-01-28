let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

s = Number(input[0]);
let sum = 0;
let current = 0;
while (sum <= s) {
current += 1;
sum += current;
}
console.log(current - 1);