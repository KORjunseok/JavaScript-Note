let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')

let plusCase = Number(input[0]) // 기준이 되는 크기에 해당하는 숫자를 변수 지정
let result = ''; // 빠르게 출력하기 위해 하나의 문자열 변수를 만들어서 시간을 줄인다. 

for (let t=1; t<=plusCase; t++){
  let plus = input[t].split(' ') // t = 1 부터 시작하는 문자 배열로 만든다. 
  let a = Number(plus[0]); // [ '1', '1\r' ] 같은 형태가 된 문자열을 숫자로 변환한다.
  let b = Number(plus[1]);
  result += a+b+'\n'; // 숫자로 변환된 값을 result 라는 하나의 변수에 담았다가 출력
}
console.log(result)