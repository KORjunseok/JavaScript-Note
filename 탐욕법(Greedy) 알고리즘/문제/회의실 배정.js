// 회의실 배정 https://www.acmicpc.net/problem/1931
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 첫째 줄에는 회의의 수. 이후 줄 부터(N + 1)는 회의의 시간 정보. 해당 회의가 끝나는 시간과 시작하는 시간은 중복이 가능하다. 회의의 최대 개수 계산.

// 권장 답안
// 모든 회의에 대해 오름차순 정렬. 정렬할 때는 1) 종료 시점, 2) 시작 시점을 우선순위로 함.
// 종료시점이 이른 회의부터 확인하여 겹치지 않게 배정한다. 

let n = Number(input[0]); // 회의의 개수
let arr = []; // 각 회의에 대한 (시작 시점, 종료 시점) 
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}

arr.sort(function(a, b) { // 종료 시간 기준으로 오름차순 정렬 
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0]
});

let cnt = 1, cur = 0; // 첫 번째 회의부터 확인
for (let i = 1; i < n; i++) {
  if(arr[cur][1] <= arr[i][0]) { // 현재 회의가 끝난 이후 회의가 시작되는 경우 카운트
    cur = i;
    cnt += 1
  }
}

console.log(cnt)
