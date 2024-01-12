let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')

// case 1) 직접
// 숫자를 풀어서 배열로 저장 
let summ = [...input[1]]
// 숫자 배열로 변환 
let numm = summ.map(Number)
// 숫자 배열 합산 하는 for 문 작성
let result = 0;
for (i=0; i<numm.length; i++){
  result += numm[i]
}
console.log(result)

// case 2) 권장 답안
let n = Number(input[0]);
let string = input[1];

let answer = 0;
for (let x of string) { // 문자열에 포함된 문자 하나씩 확인 
  // 모든 숫자 더하기
  answer += Number(x)
}
console.log(answer)