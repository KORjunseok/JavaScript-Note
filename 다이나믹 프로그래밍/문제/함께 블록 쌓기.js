// 함께 블록 쌓기 https://www.acmicpc.net/problem/18427
let file = require('fs').readFileSync('input.txt');
let input = file.toString().split('\n');

let [n, m, h] = input[0].split(' ').map(Number);
let a = [];
let d = new Array(h + 1).fill(0);
for (let i = 1; i <= n; i++) {
  a.push(input[i].split(' ').map(Number));
}

d[0] = 1;
// 모든 학생에 대하여 처리
for (let i = 0; i < n; i++) {
  let data = [];
  // 0부터 h까지의 모든 높이에 대하여 처리
  for (j = 0; j <= h; j++) {
    for (let k = 0; k < a.length; k++) { // 해당 학생의 모든 블록을 확인하며
      // 현재 학생의 블록으로 특정 높이의 탑을 쌓을 수 있는 경우
      if (d[j] != 0 && j + a[i][k] <= h) {
        data.push([j + a[i][k], d[j]]);
      }
    }
  }
  // 쌓을 수 있는 높이에 대하여, 경우의 수 증가
  for ([height, value] of data) {
    d[height] = (d[height] + value) % 10007;
  }
}
console.log(d[h]);