// 개코 전쟁 https://www.acmicpc.net/problem/2325
const PriorityQueue = require("priorityqueuejs");
const Queue = require("./../../BFS 알고리즘/클래스 큐(Queue)");

let file = require("fs").readFileSync("input.txt");
let input = file.toString().split("\n");

// 일반적인 다익스트라와 동일하지만, a <-> b 간선은 무시하는 함수
function dijkstra(a, b) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙(Min Heap)
  // 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.deq();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      // a <-> b 간선은 무시
      if (i[0] == a && now == b) continue;
      else if (i[0] == b && now == a) continue;
      let cost = dist + i[1];
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

// 최단 경로 역추적 함수
function bfs() {
  let queue = new Queue();
  let visited = new Set(); // 특정한 노드 방문 여부
  queue.enqueue(end); // 도착 지점(end)을 큐에 삽입
  let removes = []; // 삭제할 간선들(결과)
  while (queue.getLength() != 0) {
    // 큐가 빌 때까지 반복하기
    let now = queue.dequeue();
    if (now == start) {
      // 시작점에 도착한 경우
      continue; // 모든 최단 경로를 확인하기 위해 break 대신 continue
    }
    for (let i of graph[now]) {
      // 현재 노드와 연결된 간선들 확인
      let cost = distance[i[0]] + i[1];
      // 최단 경로에 포함된 간선인 경우 삭제 목록에 추가
      if (cost == distance[now]) {
        removes.push([i[0], now]);
        // 각 "직전 노드"는 한 번씩만 방문
        if (!visited.has(i[0])) {
          queue.enqueue(i[0]);
          visited.add(i[0]);
        }
      }
    }
  }
  return removes;
}

let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
// 노드의 개수, 간선의 개수를 입력받기 
let [n, m] = input[0].split(' ').map(Number);
// 시작 노드와 도착 노드
let [start, end] = [1, n];
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);

// 모든 간선 정보를 입력받기 
for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
// 최단 거리 테이블을 모두 무한으로 초기화
let distance = new Array(n + 1).fill(INF);
// 다익스트라 알고리즘을 수행
dijkstra(-1, -1);

// 최단 경로 역추적: 모든 최단 경로에 포함된 간선 쌍 (a, b)들을 계산
let removes = bfs();

let result = 0;
// 모든 최단 경로에 포함된 간선 쌍 (a, b)들을 확인
for ([a, b] of removes) {
  // 최단 거리 테이블을 모두 무한으로 초기화
  distance = new Array(n + 1).fill(INF);
  // a <-> b 간선은 무시하는 다익스트라 알고리즘을 수행
  dijkstra(a, b);
  result = Math.max(result, distance[end])
}
console.log(result);