let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ')

// case 1) 내가 푼 방법 
let a = Number(input[0]) // 3 
let b = Number(input[1]) // 3 
let c = Number(input[2]) // 2 

let aa = ( a == b || b == c || a == c) 

if ( a == b && b ==c && a ==c) {
  console.log(10000 + (`${a}`*1000))
} else if ( a == b || b == c || a == c) {
  console.log(1000 + (`${a}`*1000))
}

// case 2) 권장 답안 
// 세 개의 수가 모두 같은 경우 
if (a == b && b ==c ) console.log(10000 + a * 1000)
// 세 개의 수가 전부 같지는 않지만, 두 개의 수가 같은 경우 
else if ( a == b ) console.log( 1000 + a * 100);
else if ( b == c ) console.log( 1000 + b * 100);
else if ( a == c ) console.log( 1000 + c * 100);
// 세 개의 수가 전부 다른 경우 
else console.log(Math.max(a, b, c) * 100);



