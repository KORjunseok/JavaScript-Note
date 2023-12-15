let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ')

// 알람 문제 
let H = Number(input[0].split(' '));
let M = Number(input[1].split(' '));

if (M < 45) { // 분이 45분 미만이라면 
  H -= 1 
  M += 15
  if (H < 0) H = 23 // 차감한 후 시가 음수라면 23 
} else M -= 45 // 45분 이상이라면 분만 45 차감 

console.log(H + " " + M)