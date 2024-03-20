// 신입사원 https://www.acmicpc.net/problem/1946
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 해당 케이스에서 조건을 만족하는 지원자의 수를 계산하여 합격자를 산출한다.
// 1. 서류 성적과 2. 면접 성적 중 적어도 하나가, 다른 지원자보다 떨어지지 않는 자 

// 권장 답안
let testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc++) { 
  n = Number(input[line]);
  let arr = []; // 각 신입사원의 성적을 담음 
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data);
  }
  arr.sort((x,y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬
  let count = 0;
  let minValue = 10001;
  for (let [x, y] of arr) {
    if (y < minValue) { // y 순위 값이 작다면 카운트 (해당 인원은 합격)
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
