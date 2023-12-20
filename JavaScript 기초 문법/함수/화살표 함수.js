// 기본적인 화살표 함수 
let add = (a, b) => {
  return a + b
}
console.log(add(1333,4444))

// 한 줄로 된 화살표 함수
// 함수 내부에 return 문이 한 줄로 작성될 경우, 중괄호와 return 키워드 생략 가능
let add2 = (a, b) =>  a + b
console.log(add2(55555,4444))

// 매개변수가 하나인 화살표 함수 
// 매개변수가 하나일 경우에는 괄호를 생략할 수 있다. 
let square = x => x * x;
console.log(square(333)); // 110889