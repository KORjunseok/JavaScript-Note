let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ')

// case 1) 직접. 
// 공백을 삭제하는 filter 함수 사용해보기 
let filtered = input.filter((a) => a != '')
// 내 생각엔 맞았는데 틀렸다고 나옴
console.log(filtered.length)

// case 2) 권장 답안 
let fs2 = require('fs');
let input2 = fs.readFileSync('input.txt').toString().split('\n');

// trim() 메서드는 문자열 양 끝의 공백을 제거. 공백으로 구분된 단어의 개수 출력.
let data = input2[0].trim().split(' ');
if (data ==""){
  console.log(0)
}
else {
  console.log(data.length)
}
