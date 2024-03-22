// 박 터트리기 https://www.acmicpc.net/problem/19939
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 주어진 규칙 
// 1. N개의 공을 K개의 바구니에 빠짐없이 나누어 담는다.
// 2. 각 바구니에는 1개 이상의 공이 들어 있어야 한다.
// 3. 각 바구니에 담긴 공의 개수는 모두 달라야 한다.
// 4.가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이가 최소가 되어야 한다

// 규칙을 만족하면서 나눠 담을 수 있다면, 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이를 출력한다. 나눠 담을 수 없는 경우에는 -1을 출력

// 권장 답안
// 공의 개수가 최대한 연속적이게 만드는게 문제의 핵심 
// 항상 정답은 K-1 혹은 K인 것을 알 수 있다. (조건에 맞지 않는다면 -1)

// 공의 개수 N과 바구니의 개수 K를 입력
let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let summary = 0; // 1부터 K까지의 합
for (let i = 1; i < k + 1; i++) {
  summary += i;
}
if (summary > n) { // 공의 개수가 부족한 경우
  console.log(-1);
}
else { // 공의 개수가 충분한 경우
  n -= summary;
  if (n % k == 0 ) console.log(k - 1); // k개에 각각 1씩 더하기 
  else console.log(k);
}

