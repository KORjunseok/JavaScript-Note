// 문자열 길이 확인 
let str1 = "안녕하세요!"
console.log(str1.length) // 6 

let str2 = [1,2,3,4,5,6,1111111]
console.log(str2.length) // 7

// 문자열 결합 
let str3 = "안녕"
let str4 = "하세요"
let result = str3.concat(str4)
console.log(result) // 안녕하세요
console.log(str3+str4) // 안녕하세요

// 문자열 자르기 
let str5 =  "Hello, world!";
console.log(str5.substr(5, 8)) // XX.substr(a, b) a 자리까지 자르고 자른 이후 자리부터 B까지 표현
console.log(str5.slice(5, 8)) // xx.slice(a, b) a 자리까지 자르고 B 자리까지 표현 

// 문자열 검색
let str6 = "Hello, world!";
console.log(str6.search("world")); // 7

// 문자열 대체
let str7 = "Hello, world!";
console.log(str7.replace("world", "JavaScript")); // Hello, JavaScript!

// 문자열 분할
let str8 = "apple,banana,kiwi";
let exSplit = str8.split(",")
console.log(exSplit); // ["apple", " banana", " kiwi"]


