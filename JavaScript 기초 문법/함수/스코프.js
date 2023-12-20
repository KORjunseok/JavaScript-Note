// 전역 스코프 
let a = 10; 
function printA() {
  console.log(a)
}
printA(); // 10

// 지역 스코프 
function printB(){
  let b = 20;
  // console.log(b); //20 
}
printB(); // 

// 블록 스코프 
if(true) {
  let c = 30;
  console.log(c);
}
console.log(c); // ReferenceError: c is not defined
