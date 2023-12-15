// 공통) fs 모듈을 이용해 파일 전체로 읽어와 문자열로 저장.input.txt 파일에 1행에 1 2 
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n
// '); 백준 기준 /dev/stdin

// Case 1) ['1', '2']
let line = input[0].split(' ')

let a1 = parseInt(line[0]); // 숫자 1
let b1 = parseInt(line[1]); // 숫자 2 

console.log(a1+b1);

// Case 2) 곱하기 
let data = input[0].split(' ');

console.log(data) // ['1', '2']

let a2 = Number(data[0]); // 정수 1 
let b2 = Number(data[1]); // 정수 2

console.log(a2*b2)

// Case 3) 사칙연산 
let a3 = Number(input[0].split(' ')[0]); // 정수 1 
let b3 = Number(input[0].split(' ')[1]); // 정수 2

console.log(a3+b3)
console.log(a3-b3)
console.log(a3*b3)
console.log(parseInt(a3/b3))
console.log(a3%b3)

// case 4) 세 자리 수 x 세 자리 수 
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
