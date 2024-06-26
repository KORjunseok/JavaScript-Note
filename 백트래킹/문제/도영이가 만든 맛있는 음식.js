// 도영이가 만든 맛있는 음식 https://www.acmicpc.net/problem/2961
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

// [문제 해결 아이디어] 모든 길이에 대한 가능한 모든 조합을 구하는 것

// 권장 답안
function dfs(depth, start) {
  if (depth >= 1) { // 현재 조합에 대하여 결과 계산
    let totalX = 1; 
    let totalY = 0;
    for (let i of result) { // 인덱스(index)를 하나씩 확인하며
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y; 
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
  }
  for (let i = start; i < n; i++) { // 모든 조합 계산
    if (visited[i]) continue;
    visited[i] = true; // 방문 처리
    result.push(i);
    dfs(depth + 1, i + 1); // 재귀 함수 호출
    visited[i] = false; // 방문 처리 해제
    result.pop();
  }
}

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) { // 각 재료의 (신만, 쓴맛) 기록
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
let visited = new Array(n).fill(false); // 방문 처리 배열
let result = []; // 조합 결과 배열
let answer = 1e9;

dfs(0, 0);
console.log(answer);






