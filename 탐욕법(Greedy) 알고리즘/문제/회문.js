// 회문 https://www.acmicpc.net/problem/17609
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 문자열의 앞에서부터 한 문자씩 확인하며 회문이 성립하는지 확인. 회문이 성립하지 않는 위치라며 다음의 과정으로 유사회문이 가능한지 여부 판별
// 유사회문 판별 : 해당 문자를 지웠을 때 유사회문의 가능성 확인

// 권장 답안
function palindrome(x) {
  return x == x.split("").reverse().join(""); // split()로 각 문자열 분리 reverse()로 역순 join()으로 합침. 그리고 x == x.~ 로 boolean 으로 확인
}

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  // 문자열을 하나씩 입력받아 처리
  let data = input[tc];
  if (palindrome(data)) console.log(0); // 회문인 경우
  else {
    // 화문이 아닌 경우, 유사 회문인지 검사
    let found = false;
    let n = data.length; // 문자열의 길이
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (data[i] != data[n - i - 1]) {
        // 대칭이 아닌 인덱스를 찾는 경우
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤 회문 검사
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤 회문 검사
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true;
        break;
      }
    }
    if (found) console.log(1); // 유사 회문인 경우
    else console.log(2); // 회문도 유사 회문도 아닌 경우
  }
}
