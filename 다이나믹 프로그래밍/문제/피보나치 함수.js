// 피보나치 함수 https://www.acmicpc.net/problem/1003
let file = require('fs').readFileSync('input.txt');
let input = file.toString().split('\n');

// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

// 피보나치 함수(Fibonacci Function) 반복문으로 구현(보텀업)
for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++) {
  // N번째 피보나치 수에 대하여 
  let n = Number(input[t]);
  // 0의 개수와 1의 개수 출력
  if (n == 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}