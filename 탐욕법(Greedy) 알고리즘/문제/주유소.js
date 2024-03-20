// 주유소 https://www.acmicpc.net/problem/13305
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 첫 번째 줄은 도시의 갯수, 두 번째 줄은 도시 간의 간격, 세 번째 줄은 각 도시의 리터당 가격

// 권장 답안
// 주유 비용을 내림차순(비오름차순)으로 변경. 
// 현재 위치에 있는 도시 보다 뒤에 있는 비싼 주요소에 대해서 미리 결제하는 것이 핵심 

let n = Number(input[0]); // 도시의 갯수 
let dist = input[1].split(' ').map(Number); // 거리 
let cost = input[2].split(' ').map(Number); // 리터당 가격 

// 주유 비용(cost) 배열의 값을 비오름차순이 되도록 변환 
// [5, 2, 4, 1] -> [5, 2, 2, 1]
let minCost = cost[0];
for (let i= 0; i < n; i++) {
  minCost = Math.min(minCost, cost[i]); // for 반복문을 돌 때마다 가장 작은 숫자를 찾음
  cost[i] = minCost;
}

// 도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++){
  // JavaScript에서 큰 정수를 처리할 때는 BigInt 사용
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}
console.log(String(answer)); // 뒤에 붙는  'n'제거 