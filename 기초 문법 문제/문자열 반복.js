let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')

// case 1) 직접
let n = Number(input[0])

// 반복문으로 해보기 
let result = ''
for (let a=1; a<=n; a++){
  // 문자 배열로 만들기
let inputCase = input[a].split(' ')
// 문자 배열 안에 있는 문자열을 하나씩 나눈다
let stringCase = [...inputCase[1]]
// 배열 안에 있는 공백 제거
let filtered  = stringCase.filter(function(item) {
  return item !== null && item !== undefined && item !== '' && item !== '\r';
 });

 for (let i=0; i<filtered.length; i++){
  for (let j=0; j<filtered.length; j++){
  result += filtered[i]
  }
}
}
// console.log(result) // AAABBBCCC////HHHHTTTTPPPP 에서 마무리 

// case 2) 권장 답안
let testCase = Number(input[0]);
// 한 줄(line)씩 입력
for (let i=1; i<=testCase; i++){
  let [r, s] = input[i].split(' '); // r은 반복 횟수 ex) 3, s는 해당 문자열 ex) ABC
  let result = '';
  // 현재 문자열의 각 문자를 하나씩 확인
  for (let j=0; j<= s.length; j++){
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r); // charAt(인수). 인수번쨰의 문자를 읽어냄. repeat(인수). 인수를 반복함.
  }
  console.log(result)
}