// 가장 긴 짝수 연속한 부분 수열 (large) https://www.acmicpc.net/problem/22862
let fs = require('fs').readFileSync('input.txt');
let input = fs.toString().split('\n');

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = 0;
let eraseCount = 0;
for (let start = 0, end = 0; start < n; start++) {
  while (end < n) {
    if (arr[end] % 2 == 0) end++; // 짝수인 경우 end 증가
    else { // 홀수인 경우
      if (eraseCount == k) break; // 더 지울 수 없다면 종료
      // 지울 수 있는 여건이 있다면 지우기
      eraseCount++;
      end++;
    }
  }
  result = Math.max(result, end - start - eraseCount); // 범위의 길이 계산
  // start를 한 칸 오른쪽으로 이동할 때, 가능하다면 지울 수 있는 개수 증가
  if (arr[start] % 2 == 1) eraseCount--;
}
console.log(result);