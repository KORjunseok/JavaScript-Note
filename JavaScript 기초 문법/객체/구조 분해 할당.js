// 구조 분해 할당 (Destructuring) 
// 배열 [] 이나 객체 {}의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 문법

// 배열 경우
let [value1, value2] = [1, '하잉'];
console.log(value1) // 1
console.log(value2) // "하잉"

let arr = ["value1", "value2", "value3"];
let [a, b, c] = arr;
console.log(a,b,c ) // value1 value2 value3

// let [a,b,c] = arr; 은 아래와 동일!
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a2,b2,c2,d2] = arr
console.log(d2) // undefined

let [a3,b3,c3,d3 = 4] = arr
console.log(d3) // 4

// 객체 
let user = {name: "abc", age: 30};
let {name, age} = user;
// let name = user.name;
// let age = user.age;

console.log(name, age) // abc 30

// 새로운 이름으로 할당
let {name: newName, age: newAge} = user;
console.log(newName, newAge) //nbc 30

