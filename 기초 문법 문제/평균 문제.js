let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')

// case 1) 직접 풀어보기
// 전체 과목 개수 
let inputCase = Number(input[0])
// 전체 평균 구하기 
let averCase = input[1].split(' ').map(x => Number(x))
let sum = 0;
for (i=0; i<averCase.length; i++){
  sum += averCase[i]
}
let aver = sum/inputCase
// 최고점 구하기
let maxx = Math.max(...averCase)
// (최고점을 합친)평균 / 최고점 * 100
console.log((aver/maxx*100).toFixed(2))

// case 2) 권장 답안 
let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let maxValue = scores.reduce((a, b) => Math.max(a,b)); // 최고점 구하기
let updated = [];
for (let i=0; i<n; i++){ // 수정된 원소 하나씩 저장
  updated.push(scores[i] / maxValue * 100);
}
console.log(updated) //[ 33.33333333333333, 66.66666666666666, 100 ]

// 배열에 포함된 원소의 평균 출력 
console.log(updated.reduce((a, b) => a + b) / n)
