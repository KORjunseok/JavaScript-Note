// A → B https://www.acmicpc.net/problem/16953
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 정수 A를 B로 만드는 데 가능한 연산 두 가지. 필요한 연산의 최솟값을 구해보자. 
// 1. 2를 곱한다. 
// 2. 1을 수의 가장 오른쪽에 추가한다. 

// [문제 해결 아이디어] B에서 A로 이동한다 생각하면 된다. - 현재의 B 값이 정해져 있을 때 취할 수 있는 행동은 항상 정해져 있음.

// 권장 답ㄴ안
let [a, b] = input[0].split(' ').map(Number); // A 와 B 구하기
let flag = false;
let result = 1;

while (a <= b) { 
  if (a == b) { 
    flag = true;
    break; // b = a가 같게 된다면 break로 while문을 빠져 나옴 
  }
  if ( b % 2 == 0) b = parseInt(b/2); // 2로 나누어 떨어지는 경우
  else if (b % 10 == 1) b = parseInt(b/10); // 그렇지 않고, 일의 자릿수가 1인 경우
  else break; // 위 두 경우 모두 해당되지 않는 경우. 이 경우로 break로 빠져 나온다면 flag 는 그대로 false
  result++; // 두 경우에 해당 하는에 result에 +1씩 됨 
}

if (flag) console.log(result); // a = b 가 된 시점엔 flag가 true로 변경된 시점이기에 result 값을 그대로 출력 
else console.log(-1); // 그 이외의 경우엔 a -> b 가 될 수 없으므로 -1 출력