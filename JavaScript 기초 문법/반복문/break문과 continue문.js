// break 문 
for ( let i = 0; i < 10; i++) {
  if (i === 5) { // 0 부터 4까지의 숫자만 출력. break문은 반복문 종료
    break;
  }
  console.log(i)
}

// continue 문
for (let a = 0; a < 10; a++) {
  if (a === 5 ) { // continue 문을 사용하여 5를 제외한 0부터 9까지의 숫자를 출력
    continue;
  }
  console.log(a)
}