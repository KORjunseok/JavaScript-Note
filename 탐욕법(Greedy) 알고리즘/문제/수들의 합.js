// 수들의 합 https://www.acmicpc.net/problem/1789
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// N개의 자연수 중 가장 큰 값을 구하는 문제. 결괏값(S)는 N개의 총합
// 단순히 1부터 증가시키며 누적 합을 계산

// 권장답안 
s = Number(input[0]);
let sum = 0; // 총합을 넣어둘 변수 
let current = 0; // 현재 자연수 

while (sum <= s) {
  current += 1;
  sum += current;
}
console.log(current-1);


