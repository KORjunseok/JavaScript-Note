let fs = require('fs');
let input =fs.readFileSync('input.txt').toString().split('\n')

// case 1) 권장 답안. Set를 이용한 문제 풀이
// Set는 고유한 값을 저장하는 자료 구조. Set는 값만 저장하며, 키를 저장하지 않는다. Set 값은 중복되지 않는 유일한 요소로만 구성. 
let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성 

// 원소 하나씩 확인
for (let i=0; i<10; i++ ){
  mySet.add(data[i]%42); // 42를 나눈 나머지를 집합의 원소 삽입하여 Set로 만듬 
}
console.log(mySet.size)