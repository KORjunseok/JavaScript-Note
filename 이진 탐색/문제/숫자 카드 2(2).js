let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split('\n');

// 권장답안 2) 다른 사람 풀이 
const map = input[1].split(' ').reduce((acc,cur)=>
  acc.set(+cur, (acc.get(+cur) || 0) + 1)
,new Map());

console.log(input[3].split(' ').map(v=>map.get(+v) || 0).join(' '))