// 노드사이의 거리 https://www.acmicpc.net/problem/1240
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

// [문제 해결 아이디어] 트리에서 노드 𝐴와 𝐵를 잇는 경로는 오직 1개만 존재

// 권장 답안
let [n, m ] = input[0].split(' ').map(Number); // 노드의 개수(N), 쿼리의 개수(M)
let graph = []; // 트리 정보 입력받기
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) { // 노드 X와 노드 Y는 서로 연결
  let [x, y, cost] = input[i].split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}


function dfs(x, dist) { // 깊이 우선 탐색(DFS) 함수 구현
  if (visited[x]) return; // 각 노드는 한 번만 방문
  visited[x] = true; // 방문 처리 
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) { // 각 쿼리(query)마다 매번 DFS를 수행
  let [x, y] = input[n + i].split(' ').map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0); // 노드 X에서 출발했을 때의 모든 노드까지의 거리 계산
  console.log(distance[y]); // Y까지의 최단 거리 
}