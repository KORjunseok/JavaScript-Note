// 결혼식 https://www.acmicpc.net/problem/5567
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const Queue = require("../클래스 큐(Queue)");

let n = Number(input[0]); // 학생의 수
let m = Number(input[1]); // 친구 관계의 수
// 그래프정보
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
// 모든 친구(노드)에 대한 최단 거리 초기화
let distance = new Array(n + 1).fill(-1);
distance[1] = 0; // 시작점까지의 거리는 0으로 설정

let queue = new Queue(); // 너비 우선 탐색(BFS) 수행
queue.enqueue(1);
while (queue.getLength() != 0) { // 큐가 빌 때까지 반복하기
  let now = queue.dequeue();
  for (let nextNode of graph[now]) { // 현재 노드에서 이동할 수 있는 모든 노드를 확인
    if (distance[nextNode] == -1 ) { // 방문하지 않은 도시라면
      distance[nextNode] = distance[now] + 1;
      queue.enqueue(nextNode);
    }
  }
}
// 최단 거리가 2 이하인 모든 친구(노드)의 수를 계산
let result = 0;
for (let i = 1; i <= n; i++) {
  if (distance[i] != -1 && distance[i] <= 2) {
    result++;
  }
}
console.log(result -1); // 자기 자신은 제외