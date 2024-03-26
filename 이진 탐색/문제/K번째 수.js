// K번째 수 https://www.acmicpc.net/problem/1300
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

// N x N = 배열 A. 배열에 들어있는 수 A[i][j] = i x j이다. 이 수를 일차원 배열 B에 넣으면 B의 크기는 N x N이 된다. B를 오름차순 정렬했을 때, B[k]를 구해보기 

// 배열 A와 B의 인덱스는 1부터 시작함 
// 첫 째줄은 배열의 크기 N
// 둘 째줄은 k 

// [문제 해결 아이디어] "현재 mid보다 작거나 같은 데이터의 수가 K개 이상이 되는 조건"을 만족하는 mid 중에서 가장 작은 값을 구하면 된다.

let n = Number(input[0]); // 배열의 크기(N) 3 
let k = Number(input[1]); // 인덱스 K 7 

let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값 

let result = 0;
while(start <= end) { // 이진 탐색 수행(반복적)
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid 보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) { // 각 행마다 계산
    total += Math.min(parseInt(mid/i), n);
  }
  if (total >= k) {  // mid 보다 작거나 같은 데이터의 개수가 k 이상이라면 
    result = mid; // result에 기록
    end = mid - 1;
  }
  // mid보다 작거나 같은 데이터의 개수가 k 미만이라면
  else start = mid + 1;
}
console.log(result);