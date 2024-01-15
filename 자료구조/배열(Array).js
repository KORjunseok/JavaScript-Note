// 배열 초기화 
// 빈 배열 생성
let arr = []; 
// let arr = new Array();

arr.push(7);
arr.push(8);
arr.push(9);

for (let i = 0; i<arr.length; i++){
  console.log(arr[i])
}

// 배열의 대표적인 메서드 
// concat() : 여러 개의 배열을 이어 붙여서 합친 결과를 반환. O(N)
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let sumArr = arr1.concat(arr2, [11,12],[13])

console.log(sumArr) 
/* [실행 결과] 
[1, 2, 3, 4, 5, 6,
7, 8, 9, 10, 11, 12, 13] */

// slice(left, right) : e특정 구간의 원소를 꺼낸 배열을 반환. O(N)
let arr3 = [1,2,3,4,5];
let result = arr.slice(2,4) // [3,4]

// indexOf() : 특정한 값을 가지는 원소의 첫째 인덱스를 반환. O(N)
let arr4 = [7,3,5,6,6,2,1,2,3]

console.log(arr4.indexOf(5)); // 2 
console.log(arr4.indexOf(6)); // 3 
console.log(arr4.indexOf(8)); // -1 (해당하는 원소가 없기에 -1)