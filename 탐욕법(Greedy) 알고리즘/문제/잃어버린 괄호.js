// 잃어버린 괄호 https://www.acmicpc.net/problem/1541 
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 문제의 목적은 가장 낮은 수를 만드는 거에 있다.  

// 권장 답안 
// 뺼셈(-) 연산자를 기준으로 나누어 여러 그룹을 만든다. 
let groups = input[0].split('-');
let answer = 0;
// console.log(groups)
for (let i = 0; i < groups.length; i++) {
  // 각 그룹 내부에서 덧셈(+) 연산 적용
  let cur = groups[i].split('+').map(Number).reduce((a, b) => a+b);
  // console.log(cur);
  if (i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈(+)
  else answer -= cur; // 두 번째 그룹부터 뺄셈(-)
}

console.log(answer);