let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 권장
let n = Number(input[0]); // n의 개수
let data = []; // 배열 초기화 
for (let i = 1; i <=n; i++){
  let [x,y] = input[i].split(' ').map(Number);
  data.push([x,y]);
}
// console.log(data); // [ [ 3, 4 ], [ 1, 1 ], [ 1, -1 ], [ 2, 2 ], [ 3, 3 ] ]

function compare(a, b) {
  if (a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름파순 
  else return a[1] - b[1]; // x가 같으면 y 좌표 기준 오름차순 
}
  data.sort(compare); // 정렬 수행

  let answer = ""; // 정렬 결과 출력
  for ( let point of data) { // foreach 문을 이용한 정렬 
    answer += point[0] + " " + point[1] + "\n";
  }  
  console.log(answer);








