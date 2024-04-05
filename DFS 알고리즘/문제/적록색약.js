// 적록색약 https://www.acmicpc.net/problem/10026
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

// [문제 해결 아이디어] 맵의 크기는 N x N 크기의 정사각형. 초기에 연결 요소의 개수를 계산하고, 빨간색을 초록색으로 변경한 상태에서 다시 한 번 계산한다. 

// 권장 답안
let n = Number(input[0]); // 전체 맵의 크기(N)
let graph = []; // 그래프 정보 입력
for (let i = 1; i <= n; i++) graph.push(input[i].split(''));

// 상, 하, 좌, 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(x, y) {
  if (!visited[x][y]) { // 방문하지 않았다면
    visited[x][y] = true; // 방문 처리 
    for (let i = 0; i < 4; i++) { // 인접한 영역을 하나씩 확인
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue; // 공간을 벗어나는 경우 무시
      if (graph[x][y] == graph[nx][ny]) dfs(nx, ny); // 같은 색상이라면 재귀적으로 dfs() 호출
    }
    return true;
  }
  return false;
}

// DFS를 이용하여 연결 요소 세기 
let result1 = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    if (dfs(i, j, 0)) result1++;

// R -> G 변환 이후에 다시 한 번 연결 요소 세기 
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    if (graph[i][j] == 'R') graph[i][j] = 'G';

// DFS를 이용하여 연결 요소 세기
let result2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    if (dfs(i, j)) result2++;

    console.log(result1 + ' ' + result2);