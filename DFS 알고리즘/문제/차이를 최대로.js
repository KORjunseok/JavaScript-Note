// 차이를 최대로 https://www.acmicpc.net/problem/10819
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

function dfs(depth) {
  if (depth == n) { // 각 순열에 대한 처리
    let current = 0; // 공식 계산
    for (let i = 0; i < n - 1; i++) current += Math.abs(result[i] - result[i + 1]);
    maxValue = Math.max(maxValue, current);
  }
  for (let i = 0; i < n; i++) { // 각 수를 N개 선택하는 모든 순열 계산
    if (visited[i]) continue; // 이미 고른 수라면 무시하도록
    visited[i] = true; // 현재 선택한 수 방문 처리
    result.push(arr[i]);
    dfs(depth + 1); // 재귀 함수 호출
    visited[i] = false; // 현재 선택한 수 방문 처리 취소
    result.pop();
  }
}

// 권장 답안
let n = Number(input[0]); // 정수의 개수(N)
let arr = input[1].split(' ').map(Number); // 전체 정수 배열 입력
let visited = new Array(10).fill(false); // 방문 처리 배열
let result = [];
let maxValue = -1e9;
dfs(0);
console.log(maxValue);