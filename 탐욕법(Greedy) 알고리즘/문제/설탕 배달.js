// 설탕 배달 https://www.acmicpc.net/problem/2839
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 어떤 수를 0으로 만들어야 하는 상황에서 두 가지 연산을 사용할 수 있음. 
// 1. 값에서 5를 뺴기 2. 값에서 3을 빼기 (가능하면 5를 우선적으로 빼는 것이 효과적일 것이다.)
// 3A + 5B = N (목표: B가 가장 큰 경우를 찾는 것)

// 권장 답안 
let n = Number(input[0]); 
let cnt = 0;
let flag = false;

while (n >= 0) { // 더 이상 반복할 수 없을 때까지 반복
  // n이 0이 되었거나, 5로 나누어 떨어지는 값인 경우 
  if( n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5); // 5로 나눈 몫을 더하기 
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}
if (!flag) {
  console.log(-1);
}
