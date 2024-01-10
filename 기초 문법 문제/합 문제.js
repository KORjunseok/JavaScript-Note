let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')

// 자연수 n의 값을 더한다. 1부터 n까지의 값을 더한다.
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작한다.
let n = Number(input[0]);
let summary = 0;

// case 1) for 문법을 이용한 방법 
for (let i=1; i<=n; i++){
  summary += i;
}
console.log(summary)

// case 2) 등차수열을 이용한 방법 
console.log(n * (n + 1) / 2);