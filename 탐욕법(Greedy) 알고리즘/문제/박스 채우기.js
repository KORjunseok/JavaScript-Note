// 박스 채우기 https://www.acmicpc.net/problem/1493
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 첫째 줄에 세 자연수 length width height 주어짐
// 둘째 줄에 큐브 종류의 개수 N이 주어짐
// 셋째 줄부터 총 N개의 줄에 큐브의 종류 Ai와 개수 Bi가 i가 증가하는 순서대로 주어진다. 큐브의 종류는 한 변의 길이를 나타낼 때 쓰는 2i에서 i이다.

// [문제 해결 아이디어] 큐브의 길이(length), 너비(width), 높이(height)는 항상 2의 제곱 형태를 보임. 
// 큰 규브는 항상 자기보다 작은 큐브로 채울 수 있음.
// 해결 방법: 최대한 큰 큐브부터 박스에 넣고, 다음 크기의 큐브도 박스에 넣을 수 있는지 단계적으로 확인한다. 

// 권장 답안 
// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while ((2 ** i) <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);
let cubes = Array(20).fill(0);

let n = Number(input[1]); // 큐브의 갯수
for (let i = 2; i <= n+1; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  cur = (2 ** i); // 현재의 정육면체 큐브의 길이
  // 채워넣어야 할 큐브의 개수 계산
  let required = parseInt(length / cur)
    * parseInt(width / cur)
    * parseInt(height / cur)
    - used;

    let usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수
    res += usage;
    used += usage;
}

if (used == length * width * height) console.log(res); // 박스를 가득 채운 경우
else console.log(-1); // 박스를 가득 채우지 못한 경우