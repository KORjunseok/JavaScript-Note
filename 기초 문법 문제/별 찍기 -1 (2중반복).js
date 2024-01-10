let fs = require('fs')
let input =fs.readFileSync('input.txt').toString().split('\n')

// 권장 답안. 2중 반복을 이용한 문법.
let n = Number(input[0]);

let result ="";
for (let i=1; i <=n; i++){ // 층(행)만큼 반복
  for (let j=1; j<=i; j++){ // 현재 행만큼 별 출력 
    result += "*"; // 별 누적
  } 
  result += "\n" // 줄 바꿈 적용
}

console.log(result)