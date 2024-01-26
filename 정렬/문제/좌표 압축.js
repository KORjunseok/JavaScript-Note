let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 권장
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 집합(set)으로 변경해 중복 값을 없앤 뒤 다시 배열로 반환
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a,b) => a - b); // 오름차순 정렬

// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map(); // 맵을 만듦 
for (let i=0; i < uniqueArray.length; i++){
  myMap.set(uniqueArray[i], i); // 오름차순 정렬된 배열에 키 - 벨류 값으로 map 만듦. ex) -10 => 0, -9 => 1 ...
}

answer = "";
for (x of arr) answer += myMap.get(x) + " "; // for of 문을 이용해 arr 배열에 해당하는 키 값을 벨류로 변환하여 배열 저장
console.log(answer);



