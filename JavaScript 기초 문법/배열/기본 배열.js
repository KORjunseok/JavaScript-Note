// 배열 크기 지정 (빈배열 만들기)
let numbers = new Array(5) // [ <5 empty items> ]

// push() 메소드
// 배열의 끝에 요소를 추가
let fruits = ['사과', '바나나'];
fruits.push('오렌지');
console.log(fruits); // [ '사과', '바나나', '오렌지' ]

// pop() 메소드
// 배열의 마지막 요소를 삭제
fruits.pop();
console.log(fruits); // [ '사과', '바나나' ]

// shift() 메소드
// 배열의 첫 번째 요소를 삭제 
fruits.shift()
console.log(fruits); // [ '바나나' ]

// unshift() 메소드
// 배열의 맨 앞에 요소 추가 
fruits.unshift("사과");
console.log(fruits); // [ '사과', '바나나' ]

// splice() 메소드 
// 배열의 요소를 삭제하거나, 새로운 요소를 추가 / fruits.splice(출발 위치, 삭제 값, 추가할 항목);
fruits.splice(1, 1, "포도");
console.log(fruits); // [ '사과', '포도' ]

// slice() 메소드 
// 배열의 일부분을 새로운 배열로만든다. / let slicedFruits = fruits.slice(x번째 부터, y번째까지)
let slicedFruits = fruits.slice(1,2)
console.log(slicedFruits); // [ '사과', '포도' ]

