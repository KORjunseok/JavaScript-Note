let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 내가 푼 방법
let H = Number(input[0].split(" ")[0]); // 시
let M = Number(input[0].split(" ")[1]); // 분
let oven = Number(input[1].split(" ")); // 오븐 분

// console.log(Boolean((M += oven) > 59))
// console.log(Boolean(H > 23));
// console.log(M);

if ((M += oven) > 59) {
  H += 1;
  M -= 60;
} else if (H > 23) {
  H = 0;
  M += oven;
} else {
  M += oven;
}

// console.log(H + " " + M); // 개망함 제대로 안나옴.

// case 2) 권장 답안 
/* 
 문풀 방법.
 1. 입력으로 주어짓ㄴ 시각을 "분"의 형태로 바꾸기 
 2. 분이 주어졌을 때, 시각을 알려주는 기능을 작성
 [예시]
 - 입력 : (17시 40분 + 80분) = (1060분 + 80분 ) = 1140분 
 1. 1140을 1440으로 나눈 나머지를 취하기 : 1140분
 2. 시(hour)로 구하여 취하기 : 60으로 나눈 몫 : 19시
 3. 분(minute)으로 취하기 : 60의 나머지 : 0분 
*/ 

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);


let totalMinute = a * 60 + b + c; 
totalMinute %= 1440;
let hour = parseInt(totalMinute/60);
let minute = totalMinute % 60;

console.log(hour + " " + minute)
