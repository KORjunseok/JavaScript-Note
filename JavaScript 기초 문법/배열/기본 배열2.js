// forEach() 메소드
// forEach() 메소드를 사용하여 배열 numbers의 모든 요소를 출력
// forEach() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행
let numbers = [1,2,3,4,5]

numbers.forEach(function(number) {
  console.log(number)
}) 

// map() 메소드
// 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과를 새로운 배열로 반환
let mapPractice = numbers.map(function (number) {
  return number * number
})
console.log(mapPractice) // [ 1, 4, 9, 16, 25 ]

// filter() 메소드 
// 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소만 새로운 배열로 반환합니다.
let filterPractice = numbers.filter(function(number) {
  return number % 2 === 0;
})
console.log(filterPractice) // [ 2, 4 ]

// reduce() 메소드 
// accumulator - 콜백의 반환 값을 누적. currentValue - 처리할 현재 요소 initialValue - 콜백의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않을 시엔 배열의 첫 번째 요소 사용
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
console.log(sum);

// find() 메소드
// 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 첫 번째 요소를 반환
let foundNumber  = numbers.find(function(number) {
  return number > 3;
})
console.log(foundNumber )

// some() 메소드 
// 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소가 하나라도 있는지 확인
let hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0; // 배열 안에 짝수 확인
})
console.log(hasEvenNumber);

// every() 메소드
// 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소가 모든 요소인지 확인
let isAllEvenNumbers = numbers.every(function(number) {
  return number % 2 === 0;
});
console.log(isAllEvenNumbers); // false / 모든 요소가 짝수는 아니기에 false가 나옴

// sort() 메소드
//  배열을 오름차순으로 정렬합니다
let numbers2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers2.sort(function(a,b) {
  return a - b;
})
console.log(numbers2) // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// reverse() 메소드
// 배열을 역순으로 정렬 (단순 역순 정렬)
let numbers3 = [31, 22, 13, 44, 15];
numbers3.reverse();
console.log(numbers3) // [ 15, 44, 13, 22, 31 ]