let arr = [1, 34, 35, 67, 434, 6, 7, 8, 4, 33, 8];
// 오름차순 정렬 1)
function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
arr.sort(compare);
console.log(arr);

// 오름차순 정렬 2)
function compare2(a, b) {
  return a - b;
}

arr.sort(compare2);
console.log(arr);

// 오름차순 정렬 예시 3)
arr.sort(function (a, b) {
  return a - b;
});

console.log(arr);

// 내림차순 정렬 예시
function compare3(a, b) {
  return b - a;
}

arr.sort(compare3);
console.log(arr);

// 문자열에 대한 오름차순 정렬 예시
let stringArr = ["fineapple", "banana", "durian", "apple", "carrot"];

stringArr.sort();
console.log(stringArr);

/// 문자열에 대한 내림차순 정렬 예시
stringArr.sort(function (a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
});
console.log(stringArr);

// 문자열에 대한 오름차순 정렬 예시 (대소문자 구분 X)
let stringArr2 = ["fineapple", "Banana", "durian", "Apple", "carrot"];

function compare4(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}

stringArr2.sort(compare4);
console.log(stringArr2);

// 객체에 대하여 원하는 기준. 오름차순 정렬 예시
// 성적 점수가 높은 순으로 학생 데이터 나열.
let stuArr = [
  { name: "홍길동", score: 90 },
  { name: "김철수", score: 85 },
  { name: "박영희", score: 97 },
];

function compare5(a,b){
  return b.score - a.score;
}

stuArr.sort(compare5);
console.log(stuArr)
