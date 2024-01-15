var  PriorityQueue = require('../라이브러리/priorityquejs')

// 최대힙(Max Heap)
let pq = new PriorityQueue(function(a,b){
  return a.cash - b.cash;
})

pq.enq({cash:250, name: 'OJS'});
pq.enq({cash:300, name: 'Gildong Hong'});
pq.enq({cash:150, name: 'Dongwon Kim'});
console.log(pq.size()) // 3 
console.log(pq.deq()); // {cash: 300, name: 'Gildong Hong'}
console.log(pq.peek()); // {cash: 250, name: 'OJS'}
console.log(pq.size()); // 2