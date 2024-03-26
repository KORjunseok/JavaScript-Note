// 병사 배치하기 https://www.acmicpc.net/problem/18353
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim
().split('\n');

// [문제 해결 아이디어] 전투력이 높은 병사가 앞에 오도록 내림차순 배치
// 문제는 특정한 수열에서 "가장 긴 증가하는 부분 수열"을 찾는 문제. Longest Increasing Subsequence (LIS) 알고리즘으로 소개

// lowerBound() 생성
function lowerBound(arr, target, start, end) {
  while (start <end) {
  let mid = parseInt((start+end)/2);
  if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
  else start = mid + 1;
  }
  return end;
}

// 권장 답안
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse(); // 순서를 뒤집어 최장 증가 부분 수열(LIS) 문제로 변환

let d = [0]; // LIS 배열
// 이진 탐생을 활용한 LIS 알고리즘 수행
for (x of arr) {
  if (d[d.length - 1] < x) { // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    d.push(x);
  }
  else { // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체 
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}

// 열외해야 하는 병사의 최소 수를 출력
console.log(n - (d.length -1));