let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')

let numberCase = Number(input[0])
// split 함수를 사용해서 문자열 배열로 만들고, map 함수를 사용하여 number 배열로 만듬
let arr = input[1].split(' ').map(Number)

// case 1) 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수라는 표현이 있다. 
let minValue = 1000001; // 일단 큰 수로 초기화
let maxValue = -1000001; // 일단 작은 수로 초기화
for (let i=0; i<numberCase; i++){
  // for 문법을 사용해 배열 안에 숫자가 minValue와 maxValue로 비교한 후 저장되어 큰 수와 작은 수로 변수 저장되어 문제 해결  
  if (minValue>arr[i]) minValue = arr[i];
  if (maxValue<arr[i]) maxValue = arr[i];
}
console.log(minValue, maxValue)

// case 2) reduce 메서드를 이용한 방법. 
let n = Number(input[0])
// map 함수 사용. 파라미터는 화살표 함수를 사용하여 Number 배열을 만듬 
let data = input[1].split(' ').map(x => Number(x));

// Array.prototype.reduce()
// reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환한다.
// reducer의 형태 : (accumulator, currenValue) => (반환값)
let minValue2 = data.reduce((a,b) => Math.min(a, b));
let maxValue2 = data.reduce((a,b) => Math.max(a, b));

console.log(minValue2 + " " + maxValue2);
