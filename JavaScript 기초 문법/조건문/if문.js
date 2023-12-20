// 기본적인 if 문 
let a = 10;
if (a>0) {
  console.log('a는 양수입니다.')
} else if ( a<0) {
  console.log('a는 음수입니다.')
} else {
  console.log('a는 0입니다.')
}

// 조건문의 중첩
let age = 20;
let gender = "여성";

if (age >= 18) {
  if (gender === "남성") {
    console.log('성인 남성임')
  } else {
    console.log('성인 여성임')
  }
} else {
  console.log('미성년자임')
}

// 조건부 실행
let x = 100;
(x > 0) && console.log('x는 양수임')

// 삼항 연산자와 단축 평가 
let a2 // = "냠냠"
let b2 = a2 || 200; // 변수 a2가 존재하지 않는 경우에 기본 값으로 200을 사용함. || 연산자를 사용하여 단축 평가 (short-circuit evaluation)를 할 수 있음. 

console.log(b2)