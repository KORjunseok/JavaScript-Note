// Math.flor() 
// 주어진 숫자에서 같은 정수를 반환. 정수를 반환기에 소수점이 있을 경우 소수점 모두 제거. 음수의 소수점이 있을 경우엔 해당 숫자보다 작은 숫자를 반환. 그렇기에 예시처럼 -6 반환 
var result1 = Math.floor(12.45); // 12 
var result2 = Math.floor(89.49248); // 89
var result3 = Math.floor(-5.23); // -6

// parseInt()
// 소수점 자르기 
var result1 = parseInt(12.45); // 12 
var result2 = parseInt(89.49248); // 89
var result3 = parseInt(-5.23); // -5

// n자리까지 보여주기 
// toFixed() 
// () 인에 숫자를 넣어주면 해당 숫자는 반올림되어 보여줌 
var number1 = 12.459812;
var result1 = number1.toFixed(2); // 12.46

var number2 = 89.49248;
var result2 = number2.toFixed(2); // 89.49

var number3 = -5.23912;
var result3 = (number3).toFixed(2); // -5.24

// round(), ceil(), floor() 활용 
// round는 반올림
var roundNumber = 12.759812;
var result1 = Math.round(roundNumber * 100) / 100; // 12.76

// ceil은 올림
var ceilNumber = 12.759812;
var result2 = Math.ceil(ceilNumber * 100) / 100; // 12.76

// floor는 내림
var floorNumber = 12.759812;
var result3 = Math.floor(floorNumber * 100) / 100; // 12.75