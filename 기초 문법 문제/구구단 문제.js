let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')

// case 1) 내가 푼 방법
let gugu = input[0]

for (i=1; i<=9; i++){
  console.log(`${gugu} ` + "*" + ` ${i}`, "= ",gugu*i)
}

// case 2) 권장 답안
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  // 템플릿 리터럴을 사용해 문자열 내부에 변수를 함하여 출력 (백틱 문자 사용)
  console.log(`${n} * ${i} = ${n * i}`);
  }