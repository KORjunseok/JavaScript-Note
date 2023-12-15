## 객체지향 vs 절차지향
- 절차지향 프로그래밍은 순서대로 실행되는 일련의 과정을 단계적으로 기술하여 프로그램을 만드는 것, 객체지향 프로그래밍은 데이터 함수를 객체라는 그룹으로 묶어서 처리하는 방법. 

### JS 에서 객체를 만들 때 
- 자바스크립트에서 객체를 만들 때는 중괄호({})를 사용하여 객체를 만들고, 각 속성을 쉼표(,)로 구분하여 추가한다. 속성은 이름과 값을 가지며, 이름은 문자열로 작성하고, 값은 다양한 데이터 타입을 사용할 수 있따. 객체 내부의 함수를 메소드(method)라 부르며, 속성의 값으로 함수를 추가할 수 있다. 객체를 만들어서 필요한 속성과 메소드를 추가하여 사용한다. 

## 동적 타이핑
자바스크립트는 동적 타이핑을 지원하는 언어로, 변수를 선언할 때 타입을 지정하지 않는다. 이건 런타임 시점에 변수에 할당되는 값에 따라 자동으로 데이터 타입이 결정된다는 것을 의미. 

```JavaScript
let myVariable = "Hello, world!"; // 변수 선언 및 문자열 데이터 타입으로 할당
console.log(typeof myVariable); // "string" 출력

myVariable = 123; // 숫자 데이터 타입으로 할당
console.log(typeof myVariable); // "number" 출력

myVariable = true; // 불리언 데이터 타입으로 할당
console.log(typeof myVariable); // "boolean" 출력

```

### 런타임(Runtime)?
런타임 시점이란, 프로그램이 실행되는 동안의 시점을 의미. 즉, 코드가 실행되는 동안에 발생하는 시점. 반대의 의미로 컴파일 시점이 있다. 

## 함수형 프로그래밍 지원 
자바스크립트는 함수형 프로그래밍을 지원하는 언어로, 함수를 일급 객체로 취급하고, 고차 함수를 지원한다. 이를 통해 코드의 재사용성과 가독성을 높일 수 있다. 

### 일급객체란:? 
일급 객체(first-class object)란, 함수를 일반 값과 마찬가지로 변수에 할당하거나, 함수의 인자로 전달. 함수의 반환값으로 사용할 수 있는 객체를 의미한다. 

```JavaScript
// 함수를 변수에 할당
const add = function(a, b) {
  return a + b;
}

// 함수를 인자로 받는 함수
function calculate(func, a, b) {
  return func(a, b);
}

// 함수를 반환하는 함수
function getAddFunction() {
  return add;
}

// 함수를 일급 객체로 다루어 코드의 재사용성을 높임
console.log(calculate(add, 2, 3)); // 5
console.log(getAddFunction()(2, 3)); // 5

```

### 고차함수란?
고차 함수(higher-order function)란, 함수를 인자로 받거나, 함수를 반환하는 함수를 의미.

```Javascript
// 고차 함수 예시: 함수를 인자로 받는 함수
function operate(func, a, b) {
  return func(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(operate(add, 2, 3)); // 5
console.log(operate(multiply, 2, 3)); // 6
```

## 비동기 처리 
비동기 처리는 작업을 순차적으로 기다리지 않고, 병렬로 처리할 수 있도록 하는 방식.

## 클라이언트 측 및 서버 측 모두에서 사용 가능
자바스크립트는 클라이언트 측에서만 사용되는 것이 아니라, Node.js를 이용하여 서버 측에서도 사용됩니다. 이를 통해 웹 개발 전반에 걸쳐 자바스크립트를 활용할 수 있다.