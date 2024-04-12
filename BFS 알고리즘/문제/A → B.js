// A → B https://www.acmicpc.net/problem/16953
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
const Queue = require('../클래스 큐(Queue)');

// 이전에 탐욕법(Greedy) 알고리즘에서 풀었던 문제를 BFS를 이용하여 풀어본다 

// 시작(s)과 목표(t)를 입력받기
let [s, t] = input[0].split(' ').map(Number);
let queue = new Queue(); // 너비 우선 탐색(BFS) 수행
queue.enqueue([s, 0]); // (값, 최소 연산 횟수) 삽입
let visited = new Set();
let found = false;

// 큐가 빌 때까지 반복하기
while (queue.getLength() != 0) {
  let [value, dist] = queue.dequeue();
  if (value > 1e9) continue; // 범위를 벗어나는 경우
  if (value == t) { // 목표 값에 도달한 경우
    console.log(dist + 1); // 최소 연산 횟수 + 1 출력
    found = true; 
    break;
  }
  for (let oper of ['*', '+']) {
    let nextValue = value;
    if (oper == '*') nextValue *= 2; // 2를 곱하기
    if (oper == '+') { // 1을 오른쪽에 추가
      nextValue *= 10;
      nextValue += 1;
    }
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, dist + 1]);
      visited.add(nextValue);
    }
  }
}
if (!found) console.log(-1); // 바꿀 수 없는 경우