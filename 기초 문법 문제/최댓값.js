let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')

// let aa = input.map(Number)
// let maxValue = aa.reduce((a, b) => Math.max(a,b));

// case 1) for 반복문과 조건문을 이용한 방법 
let maxIndex = 0;
let maxValue = 0;
for (let i=0; i<9;i++){ // 모든 데이터를 하나씩 확인한다. 
  let data = Number(input[i]);
  if (maxValue<data){
    maxValue = data; // 하나씩 확인하며 data 값을 maxValue 값으로 저장. 가장 큰 수가 나왔을 떄 멈춘다. 
    maxIndex=i; // 위의 조건이 수행될 떄 아래 maxIndex=i도 수행 되기에 maxValue 값에 맞는 index 추출 가능
  }
}
console.log(maxValue)
console.log(maxIndex+1) // index 0으로 시작하기에 +1을 해서 현재 자리 값을 찾아줌 

// case 2) Math 메서드를 이용한 방법 
let data2 = input.map(x => Number(x)) // map 메서드를 이용한 number 배열 생성 
let max = Math.max(...data2) // spread operator. Math.max 메서드를 이용하여 최댓값 찾음

console.log(max)
console.log(data2.indexOf(max) +1) // number 배열에 해당하는 max index를 찾아줌. 0부터 시작하기에 +1을 함.