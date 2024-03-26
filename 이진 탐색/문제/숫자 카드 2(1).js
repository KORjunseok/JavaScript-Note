// 숫자 카드 https://www.acmicpc.net/problem/10816
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 첫 번째 줄은 갖고 있는 갖고 있는 카드의 장수 
// 두 번째 줄은 갖고 있는 카드의 배열
// 세 번째 줄은 문제로 주어진 카드의 장수 
// 네 번째 줄은 문제로 주어진 카드의 배열

// [문제 해결 아이디어] 𝑙𝑜𝑤𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 와 𝑢𝑝𝑝𝑒𝑟𝐵𝑜𝑢𝑛𝑑()를 이용하여 문제 풀어보기

// 권장답안 1)
// 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
    else start = mid + 1;
  }
  return end;
}

// 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid; 
    else start = mid + 1; // 최대한 오른쪽으로 이동
  }
  return end;
}

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

// 문제 풀이
let n = Number(input[0]); // 데이터의 수
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]); // 쿼리의 수
let query = input[3].split(' ').map(Number);

arr.sort((a, b) => a - b); // 이진 탐색을 위한 오름차순 정렬

answer = '';
for (let i = 0; i < m; i++) {
  // 값이 query[i]인 데이터의 개수 계산
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + ' ';
}
console.log(answer)