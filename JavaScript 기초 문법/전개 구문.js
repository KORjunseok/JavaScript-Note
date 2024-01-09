// 전개 구문 (Spread)

// 배열
let arr = [1,2,3];

let newArr = [...arr, 10]
console.log(newArr) // [ 1, 2, 3, 10 ]

// 객체 
let user = {name : "Jun", age : 30};
let user2 = {...user}

console.log(user2.name); // "Jun"