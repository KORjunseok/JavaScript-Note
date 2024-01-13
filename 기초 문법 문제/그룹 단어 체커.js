let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// case 1) 권장 답안. 그룹 단어인지 체크하는 함수
function check(data) {
  let setData = new Set(data[0]); // set 함수를 이용한 배열 생성 및 중복 제거
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        // 그게 아니라면 추가 
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

// 정답 출력 
let n = Number(input[0]);
let summary = 0;

for (let i=1; i<=n; i++){
  let data = input[i];
  if(check(data)) {summary += 1}
}
console.log(summary)
