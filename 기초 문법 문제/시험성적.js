// 공통 fs 모듈 
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split('\n');

// case 1) 내가 푼 방식 
let 학생 = Number(input[0])
if (90 <= 학생 && 학생 <= 100) {
  console.log("A")
} else if (80 <= 학생 && 학생 <= 89) {
  console.log("B")
} else if (70 <= 학생 && 학생 <= 79) {
  console.log("C")
} else if (60 <= 학생 && 학생 <= 69) {
  console.log("D")
} else {
  console.log("F")
}

// case 2) 
data = Number(input[0])

function check(a) {
  if (90 <= a && a <= 100) console.log('A');
  else if (80 <= a && a <= 89) console.log('B');
  else if (70 <= a && a <= 79) console.log('C');
  else if (60 <= a && a <= 69) console.log('D');
  else console.log('F');
}

check(data)



