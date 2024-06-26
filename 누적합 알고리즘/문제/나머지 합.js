// 나머지 합 https://www.acmicpc.net/problem/10986
let fs = require('fs').readFileSync('input.txt');
let input = fs.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [0, ...input[1].split(' ').map(Number)];

let sum = [0]; // 누적 합(prefix sum)
for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + arr[i];
}

let processed = []; // 누적 합(prefix sum)을 M으로 나눈 나머지
let counter = {}; // 각 나머지 값에 대한 개수를 저장하고 있는 카운터
for (let i = 0; i <= n; i++) {
  processed[i] = sum[i] % m;
  if (processed[i] in counter) counter[processed[i]] += 1;
  else counter[processed[i]] = 1;
}

let result = 0;
for (let i = 0; i < m; i++) {
  // counter[i]개에서 2개를 고르는 조합
  if (i in counter) result += parseInt(counter[i] * (counter[i] - 1) / 2);
}
console.log(result);