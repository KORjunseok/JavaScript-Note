## Map
Map은 키-값 쌍을 저장하는 객체와 비슷하다. 
 Map은 각 쌍의 키와 값을 저장하며, 객체와 달리 키로 사용할 수 있는 모든 유형을 사용할 수 있다. 

- 키-값 쌍 추가 및 검색(set)
- 키-값 쌍 삭제(delete)
- 모든 키-값 쌍 제거(clear)
- **Map** 크기 및 존재 여부 확인(size)

💡 **[Map에는 다음과 같은 주요 메서드와 프로퍼티]**

- `new Map()` – 맵을 만듦
- `map.set(key, value)` – `key`를 이용해 `value`를 저장
- `map.get(key)` – `key`에 해당하는 값을 반환. `key`가 존재하지 않으면 `undefined`를 반환
- `map.has(key)` – `key`가 존재하면 `true`, 존재하지 않으면 `false`를 반환
- `map.delete(key)` – `key`에 해당하는 값을 삭제
- `map.clear()` – 맵 안의 모든 요소를 제거
- `map.size` – 요소의 개수를 반환

### <Map 생성 및 사용>
새로운 Map을 만들려면 Map() 생성자를 사용합니다.
const myMap = new Map();
​
이제 Map에 값을 추가하려면 set() 메소드를 사용합니다.
myMap.set('key', 'value');
​
Map에서 값을 검색하려면 get() 메소드를 사용합니다.
console.log(myMap.get('key')); // 'value' 출력

### Map 예시
```JavaScript
// Map 생성 및 사용
const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// Map의 반복
for (const key of myMap.keys()) {
  console.log("키 값 소환:",key);
}

for (const value of myMap.values()) {
  console.log("벨류 값 소환:",value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

// Map의 크기 및 존재 여부 확인
console.log(myMap.size); // 3 출력

console.log(myMap.has('two')); // true 출력
```

## Set 
Set는 고유한 값을 저장하는 자료 구조. Set는 값만 저장하며, 키를 저장하지 않는다. Set 값은 중복되지 않는 유일한 요소로만 구성. 

💡 **[Set에는 다음과 같은 작업 수행]**
- 값 추가 및 검색
- 값 삭제
- 모든 값 제거
- `Set` 크기 및 존재 여부 확인

### Set 예시
```JavaScript
// Set 생성 및 사용
const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
mySet.add('value3');

console.log(mySet.has('value1')); // true 출력

// Set의 반복
for (const value of mySet.values()){
  console.log(value)
}

// Set 의 크기 및 존재 여부 확인
console.log(mySet.size) // 3 출력 

console.log(mySet.has('value2')); // true 출력
```