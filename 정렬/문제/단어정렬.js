let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 권장 
let n = Number(input[0]); // 단어의 개수(N)와 전체 문자열 입력 
let arr = []; // 배열 초기화
for (let i = 1; i <= n; i++){
  arr.push(input[i]);
}

// 중복된 원소 제거를 위한 집합(Set)으로 변환 뒤 배열로 만듦
arr = [...new Set(arr)];

arr.sort((a,b) => {
  // 길이가 다르면 길이가 짧은 것이 우선
  if (a.length != b.length) return a.length - b.length
  else { // 길이가 같으면 사전 순으로 정렬
    if (a<b) return -1;
    else if (a>b) return 1;
    else return 0;
  }
});

for (let x of arr) { // 정렬된 결과를 하나씩 출력
  console.log(x);
}