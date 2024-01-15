// JavaScript 큐(queue) 구현
class Queue{ // 클래스를 이용
  constructor(){
    this.items={};
    this.headIndex = 0;
    this.tailIndx = 0;
  }
  enqueue(item){ // 큐 삽입 (꼬리에 추가)
    this.items[this.tailIndx] = item;
    this.tailIndx++;
  }
  dequeue(){ // 큐 제거 (헤드에 삭제)
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek(){ // 남아있는 원소 중 가장 먼저 들어온 데이터
    return this.items[this.headIndex];
  }
  getLength(){ // 길이 확인
    return this.tailIndx - this.headIndex; 
  }
}

  // 구현된 큐(Queue) 라이브러리 사용
  let queue = new Queue(); // 클래스 사용

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7)- 삭제() - 삽입(1) - 삽입(4) - 삭제()
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

// 먼저 들어온 순서대로 출력
while(queue.getLength() !=0) {
  console.log(queue.dequeue()); 
}
// [실행 결과]
// 3
// 7
// 1
// 4
