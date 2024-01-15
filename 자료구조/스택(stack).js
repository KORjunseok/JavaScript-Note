// 일반적으로 스택을 구현할 때, 배열(array) 자료형을 사용

let stack = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

console.log(stack)

let reversed = stack.slice().reverse(); // 최상단 원소부터 출력 
console.log(reversed)