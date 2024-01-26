let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1)
let arr = input[0].split(" ").map(Number); // arr 변수를 ' ' 기준으로 숫자 배열로 만듦
// 오름차순 정렬 수행
arr.sort(function (a, b) {
  return a - b;
});
// 변수 초기화 하고 index[i]에 따라 + " ", 콘솔 출력
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}
console.log(answer);

// case 2) 선택 정렬을 통한 풀이
function selectionSort(arr) {
  // 선택 정렬 함수
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++)
      if (arr[minIndex] > arr[j]) minIndex = j;
    let temp = arr[i]; // 스와프(swap)
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

let input2 = fs.readFileSync("input.txt").toString().split("\n");

let arr2 = input2[0].split(" ").map(Number);
selectionSort(arr2);
let answer2 = "";
for (let i = 0; i < arr2.length; i++) {
  answer2 += arr2[i] + " ";
}
console.log(answer2);
