let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 직접. 오름차순 이후에 k번쨰에 해당하는 숫자를 찾는 코드 작성
let n = input[0].split(' ').map(Number)[0]; // 5
let k = input[0].split(' ').map(Number)[1]; // 2 

let arr = input[1].split(' ').map(Number); // 숫자 배열로 생성 

arr.sort(function(a,b){
  return a - b;
}); // 오름차순; 

let answer = arr[k-1];

console.log(answer);

// case 2) 권장
let [n2, k2] = input[0].split(' ').map(Number);
let arr2 = input[1].split(' ').map(Number);
// 오름차순 정렬 수행
arr2.sort(function(a, b) {
return a - b;
})
// 앞에서부터 K번째 수를 출력
console.log(arr2[k2 - 1]);