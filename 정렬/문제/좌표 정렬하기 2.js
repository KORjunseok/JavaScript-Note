let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 직접. y 좌표 기준 오름차순 정렬 
// let n = Number(input[0]);
// let data = [];
// for (let i = 1; i <= n; i++){
//   let [x, y] = input[i].split(' ').map(Number);
//   data.push([x,y])
// }

//  data.sort(function(a,b) {
//   return a[1] - b[1];
//  });

// let answer = "";
// for (let i = 0; i <n; i++){
//   answer += data[i][0] + " " + data[i][1] + "\n";
// };
// console.log(answer);

// // case 2) 권장 
let n = Number(input[0]);
let data = [];
for (let i = 1; i <=n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  data.push([x,y]);
}

function compare(a,b) {
  if (a[1] != b[1]) return a[1] - b[1] // y 좌표 기준 오름차순
  else return a[0] - b[0]; // y가 같으면 x 좌표 기준 오름파순
}
  data.sort(compare); // 정렬 수행
  
  let answer = ""; // 정렬 결과 수행
  for (let point of data) {
    answer += point[0] + " " + point[1] + "\n";
  }
  console.log(answer);





