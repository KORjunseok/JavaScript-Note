//기본 for문
for (let i = 0; i < 11; i++) {
  console.log(i)
}

// 배열과 함께 사용하는 for문 
let numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// for .. in 문
let person = {name : 'Junseok', age : 29, gender : 'male'};

// for..in은 객체안에 key를 추출한다. 객체[key] 로 value 값을 추출할 수 있다. 
for (let key in person) {
  console.log(key + ":" + person[key])
}