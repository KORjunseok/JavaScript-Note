let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 직접 (뭐가 잘못되었는지 알았음! )
let num = input.map(Number);
let numSet = new Set(num);
let num2 = [...numSet];

num2.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < num2.length; i++) {
  console.log(num2[i]);
}

// case 2) 권장
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  // 한 줄씩 입력받아 배열에 넣음
  arr.push(Number(input[i]));
}
arr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);

