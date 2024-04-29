// 데이터의 개수 N과 데이터 입력받기
let n = 8;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

// 접두사 합(Prefix Sum) 배열 계산
let sumValue = 0;
let prefixSum = [0];
for (let i of data) {
  sumValue += i;
  prefixSum.push(sumValue);
}


// 구간 합 계산(네 번째 수부터 여덟 번째 수까지)
let left = 4;
let right = 8;
console.log(prefixSum[right]);
console.log(prefixSum[left]);

console.log(prefixSum[right] - prefixSum[left - 1]);
