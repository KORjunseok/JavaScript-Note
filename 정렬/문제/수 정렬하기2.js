let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 직접, 오름차순으로 구하기
let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort(); // 오름차순 정렬

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// case 2) 권장
let n2 = Number(input[0]);
let arr2 = [];
for (let i = 1; i <= n2; i++) {
  arr2.push(Number(input[i]));
}
// 오름차순 정렬 수행
arr2.sort(function (a, b) {
  return a - b;
});
let answer2 = "";
for (let i = 0; i < arr2.length; i++) {
  answer2 += arr2[i] + "\n";
}
console.log(answer2);
