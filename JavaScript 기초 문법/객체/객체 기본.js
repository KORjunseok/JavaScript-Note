// 객체 속성 접근 
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자"
};

console.log(person.name) // "홍길동"
console.log(person.age) // 30
console.log(person.gender) // "남자"

// Object.keys() 메소드 
// 키(key)를 배열로 반환 
let aaa = Object.keys(person)
console.log(aaa)

// Object.values() 메소드
// 벨류(value)를 배열로 반환 
let bbb = Object.values(person)
console.log(bbb)

// Object.entries() 메소드
// person의 속성 이름과 속성 값들을 2차원 배열로 반환
let ccc = Object.entries(person); 
console.log(ccc); // [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// 객체 비교 
// JSON.stringify() 함수를 사용하여 객체를 문자열로 변환한 후, 문자열 비교
let person1 = {
  name: "홍길동",
  age: 30,
  gender: "남자"
};

let person2 = {
  name: "홍길동",
  age: 30,
  gender: "남자"
};

console.log(person1 === person2);   // false
console.log(JSON.stringify(person1) === JSON.stringify(person2));   // true

// 객체 병합 
// 객체 병합을 할 땐 전개 연산자(...)를 사용 
let person3 = {
  name: "홍길동",
  age: 30
};

let person4 = {
  gender: "남자"
};

let mergedPerson = {...person3, ...person4};

console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }