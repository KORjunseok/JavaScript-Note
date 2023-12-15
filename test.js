// fs 모듈 데이터 불러오기
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let a = input[0]
let b = input[1]

let an = [...a] // 문자열로 되어 있는 a 자릿수로 배열화 
let bn = [...b] 

let a_1 = an[2] // 문자열 a의 일의 자리 
let a_2 = an[1] // 문자열 a의 십의 자리 
let a_3 = an[0] // 문자열 a의 백의 자리 


let b_1 = bn[2] // 문자열 b의 일의 자리 
let b_2 = bn[1] // 문자열 b의 십의 자리 
let b_3 = bn[0] // 문자열 b의 백의 자리 

console.log(Number(a)* Number(b_1))
console.log(Number(a)* Number(b_2))
console.log(Number(a)* Number(b_3))
console.log(Number(a)* Number(b))
