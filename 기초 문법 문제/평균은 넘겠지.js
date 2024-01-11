let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 직접 해보기
// 우선 평균을 구해보자
let scores = input[1].split(" ").map((x) => Number(x));
// 앞에 인원수를 제외하고 점수만 모아보자
// shift() 메소드. 배열의 첫 번째 요소를 삭제한다.
let students = scores.shift(); // bb 에는 학생의 해당 케이스의 학생의 수. aa 에는 학생의 수를 제외한 점수.
let sum = 0; // scores 의 총합

// 숫자 배열 모두 더하기 for 문 사용
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
// 평균 구하기
let avg = sum / students; // 현재 70

// 평균에 해당하는 점수를 넘은 학생의 수를 구한다. 이후 퍼센트로 변환. 여기에서 막힘.

// case2) 권장 답안.
// 한글로 먼저 풀이 방법을 적고 코드로 옮긴다.
// 1. 먼저 N개의 원소에 대한 평균 값을 계산. 2. N개의 원소를 하나씩 ㄷ확인하여 평균 이상인지 확인. O(N). 해당 시간 복잡도는 O(N)이다.

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++) { // 각각의 테스트 케이스를 확인.
  let data = input[t].split(" ").map(Number);
  let n = data[0]; // 첫 번째 수는 데이터의 개수
  let summary = 0; // n개의 점수에 대한 평균 계산을 위해 변수 생성
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }
  let average = summary /n; // 평균 계산
  let cnt = 0; // 점수가 평균을 넘는 학생 수 계산 
  for (let i=1; i<=n; i++){
    if(data[i]>average) cnt+=1; // 평균은 넘는 학생을 cnt 변수에 +해줌
  }
  console.log(`${(cnt/n*100).toFixed(3)}%`); // 점수가 평균을 넘는 학생의 비율을 소수점 아래 셋쨰 자리까지 출력
}
