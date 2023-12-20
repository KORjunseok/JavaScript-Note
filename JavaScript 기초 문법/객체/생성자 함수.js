// 생성자 함수(constructor function)를 통한 객체 생성 
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자")
let person2 = new Person("홍길순", 25, "여자")

