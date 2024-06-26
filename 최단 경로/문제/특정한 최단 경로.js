// 특정한 최단 경로 https://www.acmicpc.net/problem/1504
const PriorityQueue = require("priorityqueuejs");

let file = require("fs").readFileSync("input.txt");
let input = file.toString().split("\n");

function dijkstra(start) { // 다익스트라(Dijkstra) 알고리즘 수행
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙(Min Heap)
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) { // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기 
    let [dist, now] = pq.deq();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      let cost = dist + i[1];
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정 
// 노드의 개수, 간선의 개수를 입력받기
let [n, m] = input[0].split(' ').map(Number);
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);
// 모든 간선 정보를 입력받기
for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  // a번 노드에서 b번 노드로 가는 비용이 c라는 의미
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
// 꼭 거쳐야 하는 a와 b 노드 입력받기
let [a, b] = input[m + 1].split(' ').map(Number);

let distance = new Array(n + 1).fill(INF); // 최단 거리 테이블 초기화
dijkstra(1); // 다익스트라 알고리즘 수행
let distance_1_to_a = distance[a];
let distance_1_to_b = distance[b];

distance = new Array(n + 1).fill(INF); // 최단 거리 테이블 초기화
dijkstra(a); // 다익스트라 알고리즘 수행
let distance_a_to_b = distance[b];
let distance_a_to_n = distance[n];

distance = new Array(n + 1).fill(INF); // 최단 거리 테이블 초기화
dijkstra(b); // 다익스트라 알고리즘 수행
let distance_b_to_a = distance[a];
let distance_b_to_n = distance[n];

let route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n;
let route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n;

let result = Math.min(route1, route2);
if (result >= INF) console.log(-1); // 경로가 없는 경우
else console.log(result);