let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");


// case 1) 권장. 필요한 동전의 최소 값 구하기 

let n = Number(input[0].split(' ')[0]); // 동전의 개수
let k = Number(input[0].split(' ')[1]); // 만들어야 할 금액 

let arr = [];
// 전체 동전(화폐 단위) 데이터 입력
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

let cnt = 0;
// 가치가 큰 동전부터 확인
for (let i = n-1; i>=0; i--){
  cnt += parseInt(k / arr[i]); // 해당 동전을 몇 개 사용해야 하는지 
  k %= arr[i]; // 해당 동전으로 모두 거슬러 준 뒤 남은 금액
}
 
console.log(cnt);

