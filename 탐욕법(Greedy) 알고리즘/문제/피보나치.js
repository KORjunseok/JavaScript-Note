// 피보나치 https://www.acmicpc.net/problem/9009
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 피보나치 수는 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열이다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …

// [문제 해결 방법]: 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족.

// 권장 답안
// 피보나치 수들 계산
pibo = [];
pibo.push(0);
pibo.push(1);

while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length -2] + pibo[pibo.length - 1]); // 피보나치 수 구하기
// console.log(pibo)

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스 

  while (n > 0) { // n이 0이 될 때까지 
    if (n >= pibo[i]) { // 가능한 큰 피보나치 수부터 뺀다
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }
  let answer = '';
  for (let i = result.length - 1; i >= 0; i--) answer += result[i]+ ' '; // 오름차순 정렬
  console.log(answer)
}

