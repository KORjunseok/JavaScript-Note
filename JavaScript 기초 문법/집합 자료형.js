// 특정한 원소의 등장 여부를 파악할 때 집합 자료형을 효과적으로 사용할 수 있다. 

let mySet = new Set(); // 집합 객체 생성 / Set(0) {}

// 여러 개의 원소 삽입 / Set(3) { 3, 5, 7 }
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

// 원소 5 제거
mySet.delete(5);

// 원소를 하나씩 출력
for (let item of mySet) console.log(item);




