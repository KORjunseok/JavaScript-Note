// 치즈 https://www.acmicpc.net/problem/2638 
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
const Queue = require('../클래스 큐(Queue)');

// 맵의 크기 (N과 M) 정보 입력
let [n, m] = input[0].split(' ').map(Number);
let graph = []; // 2차원 맵 입력받기
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number);
  graph.push(row);
}

// 상, 하, 좌, 우 방향 정보 
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function bfs() {
  let visited = []; // 방문 처리 배열
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false));
  visited[0][0] = true; // 제일 왼쪽 위에서 출발
  let queue = new Queue(); // 너비 우선 탐색(BFS) 수행
  queue.enqueue([0, 0]);
  while (queue.getLength() != 0) { // 큐가 빌 때까지 반복하기
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 맵을 벗어나는 경우 무시
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1; // 카운트 증가
        else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

function melt() {
  let finish = true; // 더 녹일 치즈가 없는지 여부
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) { // 녹일 치즈라면
        graph[i][j] = 0; // 녹이기
        finish = false;
      }
      else if (graph[i][j] == 2) graph[i][j] = 1; // 한 면만 닿은 경우 무시
    }
  }
  return finish;
}

let result = 0;
while (true) {
  bfs();
  if (melt()) {
    console.log(result); // 전부 녹았다면
    break;
  }
  else result += 1;
}