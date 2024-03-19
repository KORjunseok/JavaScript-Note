// ATM https://www.acmicpc.net/problem/11399
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 권장 답안 
// ATM 문제 풀기
let n = Number(input[0]);
// 오름차순으로 정렬을 하고 누적 값을 통해 계산한다.  1 3 6 9 13
let arr = input[1].split(" ").map(Number);
// 배열 오름차순 정렬
arr.sort((a, b) => {
  return a - b;
});
// 정답
let result = 0;
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  result += Number(arr[i]);
  answer += result;
}

console.log(answer);
