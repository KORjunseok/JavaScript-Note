let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 문제 요구사항: 적절한 상한 금액을 찾는 것이 문제의 목표
// 1. 배정된 총 예산이 조건을 만족한다면, 상한 금액을 증가(최대화가 목표)시킨다.
// 2. 배정된 총 예산이 조건을 만족하지 못한다면, 상한 금액을 감소시킨다. 

// 권장 답안 
let n = Number(input[0].split(' ')[0]); // 지방의 수 
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]); // 총 예산(M)

let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = arr.reduce((a,b) => Math.max(a,b)); // 배열의 수 중 가장 큰 값이 end 

let result = 0;
while(start <= end) { // 이진 탐색 수행 (반복문)
  let mid = parseInt((start + end) /2);
  let total = 0; // 배정된 예산의 총액 계산
  for (x of arr ) { // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(mid, x); // 에산 배정. 중간 값과 배열상의 모든 값을 비교하며 작은 값을 total에 반영 
  } 
  if (total <= m) { //조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
    result = mid; // 상한액 확정
    start = mid + 1; // 중간값에 +1을 하며 반복 
  }
  else { // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1; // 중간값에 -1을 하며 반복 
  }
}

console.log(result); // 최대 상학앤 산출